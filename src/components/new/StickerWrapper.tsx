import './StickerWrapper.css';
import type { StickerTypeData } from '../../constants/sticker-constants';

interface Props {
    stickers: StickerTypeData;
    selectedId: number;
    onSelect: (id: number) => void;
}

const StickerWrapper = ({ stickers, selectedId, onSelect }: Props) => {
    const onClickSticker = (id: number) => {
        if (selectedId === id) {
            onSelect(-1);
        } else {
            onSelect(id);
        }
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
                                selectedId === item.id
                                    ? { backgroundColor: item.color }
                                    : { backgroundColor: `${item.color === 'transparent' ? 'transparent' : '#E6E7EA'}` }
                            }
                        >
                            <img src={selectedId === item.id ? item.src : item.srcGray} alt={item.name} />
                        </div>
                        <span className={`StickerName ${selectedId === item.id ? 'selected' : ''}`}>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StickerWrapper;
