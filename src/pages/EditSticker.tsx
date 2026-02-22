import { useLocation, useNavigate, useParams } from 'react-router-dom';
import NewHeader from '../components/new/NewHeader';
import StickerWrapper from '../components/new/StickerWrapper';

import BottomButton from '../components/common/BottomButton';
import { STICKERS } from '../constants/sticker-constants';
import { useContext, useState } from 'react';
import { type StickerSelection } from '../constants/diary-constants';
import { DiaryStateContext } from '../App';

const EditSticker = () => {
    const nav = useNavigate();
    const params = useParams();
    const location = useLocation();

    const diaryList = useContext(DiaryStateContext);
    const originDiary = location.state?.diaryData || diaryList?.find((d) => d.id === Number(params.id));

    const navigateBack = () => {
        nav('/', { replace: true, state: { pivotDate: originDiary.date } });
    };

    const [selections, setSelections] = useState<StickerSelection>(() => {
        const baseState = Object.fromEntries(STICKERS.map((s) => [s.key, -1]));

        const targetStickers = location.state?.stickers || originDiary?.stickers;

        return targetStickers ? { ...baseState, ...targetStickers } : baseState;
    });

    const handleSelect = (key: string, value: number) => {
        setSelections((prev) => ({ ...prev, [key]: value }));
    };

    const navigateNext = () => {
        const filteredStickers = Object.fromEntries(Object.entries(selections).filter(([_, value]) => value !== -1));

        nav(`/edit2/${params.id}`, {
            state: {
                ...originDiary,
                stickers: filteredStickers,
                content: location.state?.content ?? originDiary?.content,
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

export default EditSticker;
