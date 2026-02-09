import './StickerWrapper.css';
import type { StickerTypeData } from '../../constants/sticker-constants';
import { useState } from 'react';

interface Props {
    stickers: StickerTypeData;
}

const StickerWrapper = ({ stickers }: Props) => {
    const [selectedSticker, setSelectedSticker] = useState(-1);
    const onClickSticker = (id: number) => {
        setSelectedSticker(id);
    };

    return (
        <div className="StickerWrapper">
            <h3>{stickers.stickerTypeName}</h3>

            <div className="StickerScrollContainer">
                {stickers.stickers.map((item) => (
                    <div key={item.feelingId} className="StickerItem" onClick={() => onClickSticker(item.feelingId)}>
                        <div
                            className="StickerImageWrapper"
                            style={
                                selectedSticker === item.feelingId
                                    ? { backgroundColor: item.color }
                                    : { backgroundColor: `${item.color === 'transparent' ? 'transparent' : '#E6E7EA'}` }
                            }
                        >
                            <img
                                src={selectedSticker === item.feelingId ? item.src : item.srcGray}
                                alt={item.feelingName}
                            />
                        </div>
                        <span className={`StickerName ${selectedSticker === item.feelingId ? 'selected' : ''}`}>
                            {item.feelingName}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StickerWrapper;
