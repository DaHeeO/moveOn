import './StickerWrapper.css';
import type { StickerTypeData } from '../../constants/sticker-constants';
import { useState } from 'react';

interface Props {
    stickers: StickerTypeData;
}

const StickerWrapper = ({ stickers }: Props) => {
    const [selectedSticker, setSelectedSticker] = useState(-1);
    const onClickSticker = (id: number) => {
        if (selectedSticker === id) {
            setSelectedSticker(-1);
        } else setSelectedSticker(id);
    };

    return (
        <div className="StickerWrapper">
            <h3>{stickers.stickerTypeName}</h3>

            <div className="StickerScrollContainer">
                {stickers.stickers.map((item) => (
                    <div key={item.id} className="StickerItem" onClick={() => onClickSticker(item.id)}>
                        <div
                            className="StickerImageWrapper"
                            style={
                                selectedSticker === item.id
                                    ? { backgroundColor: item.color }
                                    : { backgroundColor: `${item.color === 'transparent' ? 'transparent' : '#E6E7EA'}` }
                            }
                        >
                            <img src={selectedSticker === item.id ? item.src : item.srcGray} alt={item.name} />
                        </div>
                        <span className={`StickerName ${selectedSticker === item.id ? 'selected' : ''}`}>
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StickerWrapper;
