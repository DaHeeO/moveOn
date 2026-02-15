import { useNavigate } from 'react-router-dom';
import NewHeader from '../components/news/NewHeader';
import StickerWrapper from '../components/news/StickerWrapper';

import BottomButton from '../components/common/BottomButton';
import { STICKERS } from '../constants/sticker-constants';

const New = () => {
    const nav = useNavigate();

    const navigateBack = () => {
        nav(-1);
    };

    return (
        <div style={{ marginBottom: 100 }}>
            <NewHeader navigateBack={navigateBack} />
            {STICKERS.map((sticker, index) => (
                <StickerWrapper key={index} stickers={sticker} />
            ))}

            <BottomButton label={'다음'} onClick={() => {}} />
        </div>
    );
};

export default New;
