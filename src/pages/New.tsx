import { useNavigate } from 'react-router-dom';
import NewHeader from '../components/news/NewHeader';
import StickerWrapper from '../components/news/StickerWrapper';
import { FEELING_STICKERS } from '../constants/sticker-constants';

const New = () => {
    const nav = useNavigate();

    const navigateBack = () => {
        nav(-1);
    };

    const stickers = FEELING_STICKERS;

    return (
        <div>
            <NewHeader navigateBack={navigateBack} />
            <StickerWrapper stickers={stickers} />
        </div>
    );
};

export default New;
