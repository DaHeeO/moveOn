import './NewHeader.css';
import ChevronLeft from '../../assets/ChevronLeft';

interface Props {
    navigateBack: () => void;
}

const NewHeader = ({ navigateBack }: Props) => {
    return (
        <div className="NewHeader">
            <div className="header-wrapper" onClick={navigateBack}>
                <ChevronLeft />
            </div>
            <p className="description">
                먼저 다양한 스티커로 <br />
                하루를 표현해 보세요
            </p>
            <p className="sub-text">캘린더에서 주제별로 모아볼 수 있어요</p>
        </div>
    );
};

export default NewHeader;
