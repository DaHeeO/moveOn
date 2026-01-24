import './StickerWrapper.css';
import type { StickerTypeData } from '../../constants/sticker-constants';

interface Props {
    stickers: StickerTypeData;
}

const StickerWrapper = ({ stickers }: Props) => {
    return (
        <div className="StickerWrapper">
            <h3>{stickers.stickerTypeName}</h3>
        </div>
    );
};

export default StickerWrapper;
