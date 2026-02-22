import { useLocation, useNavigate } from 'react-router-dom';
import NewHeader from '../components/new/NewHeader';
import NewContentBox from '../components/new/NewContentBox';
import BottomButton from '../components/common/BottomButton';
import { useContext, useState } from 'react';
import { DiaryDispatchContext } from '../App';

const NewContent = () => {
    const nav = useNavigate();
    const location = useLocation();

    const { onCreate } = useContext(DiaryDispatchContext)!;

    const { date, stickers } = location.state || {};

    const [content, setContent] = useState('');

    const handleCreate = () => {
        onCreate(date, stickers, content);
        nav('/', { replace: true, state: { pivotDate: date } });
    };

    const navigateBack = () => {
        // 이전으로 되돌릴때 그전에 선택했던 스티커 다시 전달
        nav('/new1', {
            state: {
                date,
                stickers,
            },
        });
    };

    return (
        <div>
            <NewHeader
                title={
                    <>
                        조금 더 자세히 <br /> 기록해 볼까요?
                    </>
                }
                navigateBack={navigateBack}
            />
            <NewContentBox content={content} setContent={setContent} />
            <BottomButton focus={true} label={'기록 완료'} onClick={handleCreate} />
        </div>
    );
};

export default NewContent;
