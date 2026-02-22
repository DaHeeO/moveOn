import './BottomButton.css';

interface Props {
    label: string;
    onClick: () => void;
    focus: boolean;
}

const BottomButton = ({ label, onClick, focus }: Props) => {
    return (
        <div className="BottomButton">
            <button className={`${focus ? 'focus' : ''}`} onClick={onClick}>
                {label}
            </button>
        </div>
    );
};

export default BottomButton;
