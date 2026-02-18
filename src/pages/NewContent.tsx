import { useNavigate } from 'react-router-dom';
import NewHeader from '../components/new/NewHeader';
import NewContentBox from '../components/new/NewContentBox';
import BottomButton from '../components/common/BottomButton';

const NewContent = () => {
    const nav = useNavigate();

    const navigateBack = () => {
        nav(-1);
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
            <NewContentBox />
            <BottomButton label={'기록 완료'} onClick={() => {}} />
        </div>
    );
};

export default NewContent;
