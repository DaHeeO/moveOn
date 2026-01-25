import { useNavigate } from 'react-router-dom';
import NewHeader from '../components/news/NewHeader';
import StickerWrapper from '../components/news/StickerWrapper';
import { FEELING_STICKERS } from '../constants/sticker-constants';
import BottomButton from '../components/common/BottomButton';

const New = () => {
    const nav = useNavigate();

    const navigateBack = () => {
        nav(-1);
    };

    const stickers = FEELING_STICKERS;

    return (
        <div style={{ marginBottom: 100 }}>
            <NewHeader navigateBack={navigateBack} />
            <StickerWrapper stickers={stickers} />
            <StickerWrapper stickers={stickers} />
            <StickerWrapper stickers={stickers} />
            <StickerWrapper stickers={stickers} />
            <StickerWrapper stickers={stickers} />
            <BottomButton label={'다음'} onClick={() => {}} />
        </div>
    );
};

export default New;
