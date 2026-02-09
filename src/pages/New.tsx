import { useNavigate } from 'react-router-dom';
import NewHeader from '../components/news/NewHeader';
import StickerWrapper from '../components/news/StickerWrapper';
import {
    DIET_STICKERS,
    FEELING_STICKERS,
    PERIOD_STICKERS,
    POOP_STICKERS,
    SLEEP_STICKERS,
    WORKOUT_STICKERS,
} from '../constants/sticker-constants';
import BottomButton from '../components/common/BottomButton';

const New = () => {
    const nav = useNavigate();

    const navigateBack = () => {
        nav(-1);
    };

    const feeling_stickers = FEELING_STICKERS;
    const diet_stickers = DIET_STICKERS;
    const workout_stickers = WORKOUT_STICKERS;
    const poop_stickers = POOP_STICKERS;
    const sleep_stickers = SLEEP_STICKERS;
    const period_stickers = PERIOD_STICKERS;

    return (
        <div style={{ marginBottom: 100 }}>
            <NewHeader navigateBack={navigateBack} />
            <StickerWrapper stickers={feeling_stickers} />
            <StickerWrapper stickers={diet_stickers} />
            <StickerWrapper stickers={workout_stickers} />
            <StickerWrapper stickers={poop_stickers} />
            <StickerWrapper stickers={sleep_stickers} />
            <StickerWrapper stickers={period_stickers} />
            <BottomButton label={'다음'} onClick={() => {}} />
        </div>
    );
};

export default New;
