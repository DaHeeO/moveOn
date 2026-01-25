import './BottomButton.css';

interface Props {
    label: string; // 버튼에 표시할 문구
    onClick: () => void; // 클릭 시 실행할 함수
}

const BottomButton = ({ label, onClick }: Props) => {
    return (
        <div className="BottomButton">
            <button onClick={onClick}>{label}</button>
        </div>
    );
};

export default BottomButton;
