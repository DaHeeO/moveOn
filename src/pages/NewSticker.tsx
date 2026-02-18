import { useNavigate } from 'react-router-dom';
import NewHeader from '../components/new/NewHeader';
import StickerWrapper from '../components/new/StickerWrapper';

import BottomButton from '../components/common/BottomButton';
import { STICKERS } from '../constants/sticker-constants';

const NewSticker = () => {
    const nav = useNavigate();

    const navigateBack = () => {
        nav(-1);
    };

    const navigateNext = () => {
        nav('/new2');
    };

    return (
        <div style={{ marginBottom: 100 }}>
            <NewHeader
                title={
                    <>
                        먼저 다양한 스티커로 <br /> 하루를 표현해 보세요
                    </>
                }
                description={<>캘린더에서 주제별로 모아볼 수 있어요</>}
                navigateBack={navigateBack}
            />
            {STICKERS.map((sticker, index) => (
                <StickerWrapper key={index} stickers={sticker} />
            ))}

            <BottomButton label={'다음'} onClick={navigateNext} />
        </div>
    );
};

export default NewSticker;
