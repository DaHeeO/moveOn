import { useLocation, useNavigate, useParams } from 'react-router-dom';
import NewHeader from '../components/new/NewHeader';
import NewContentBox from '../components/new/NewContentBox';
import BottomButton from '../components/common/BottomButton';
import { useContext, useState } from 'react';
import { DiaryDispatchContext } from '../App';

const EditContent = () => {
    const nav = useNavigate();
    const params = useParams();
    const location = useLocation();

    const { onUpdate } = useContext(DiaryDispatchContext)!;

    const diaryData = location.state || {};

    const [content, setContent] = useState(diaryData.content || '');

    const handleEdit = () => {
        onUpdate(Number(params.id), diaryData.date, diaryData.stickers, content);
        nav('/', { replace: true, state: { pivotDate: diaryData.date } });
    };

    const navigateBack = () => {
        nav(`/edit1/${params.id}`, {
            state: {
                ...diaryData,
                content,
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
            <BottomButton focus={true} label={'기록 완료'} onClick={handleEdit} />
        </div>
    );
};

export default EditContent;
