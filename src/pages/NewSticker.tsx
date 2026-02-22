import { useLocation, useNavigate } from 'react-router-dom';
import NewHeader from '../components/new/NewHeader';
import StickerWrapper from '../components/new/StickerWrapper';

import BottomButton from '../components/common/BottomButton';
import { STICKERS } from '../constants/sticker-constants';
import { useState } from 'react';
import type { StickerSelection } from '../constants/diary-constants';

const NewSticker = () => {
    const nav = useNavigate();
    const location = useLocation();
    const { date } = location.state || {};

    const navigateBack = () => {
        nav(-1);
    };

    // 초기값 모두 -1로 설정
    const [selections, setSelections] = useState<StickerSelection>(() =>
        Object.fromEntries(STICKERS.map((s) => [s.key, -1])),
    );

    const handleSelect = (key: string, value: number) => {
        //  덮어쓰기 됨
        setSelections((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const navigateNext = () => {
        if (!isAnySelected) return;

        // sticker에서 id: -1 인거는 삭제하고 있는것만
        const filteredStickers = Object.fromEntries(Object.entries(selections).filter(([_, value]) => value !== -1));

        nav('/new2', {
            state: {
                date,
                stickers: filteredStickers,
            },
        });
    };

    // bottomButton 로직임 -1인게 하나라도 있느면 true
    const isAnySelected = Object.values(selections).some((value) => value !== -1);

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
            {STICKERS.map((sticker) => (
                <StickerWrapper
                    key={sticker.key}
                    stickers={sticker}
                    selectedId={selections[sticker.key] ?? -1}
                    onSelect={(id) => handleSelect(sticker.key, id)}
                />
            ))}

            <BottomButton focus={isAnySelected} label={'다음'} onClick={navigateNext} />
        </div>
    );
};

export default NewSticker;
