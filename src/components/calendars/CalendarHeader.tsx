import ChevronDown from '../../assets/ChevronDown';
import { useModal } from '../../hooks/useModal';
import './CalendarHeader.css';

interface Props {
    pivotDate: Date;
    updatePivotDate: (year: number, month: number) => void;
}

const CalendarHeader = ({ pivotDate, updatePivotDate }: Props) => {
    const { isOpen, ModalWrapper, open, close } = useModal();
    return (
        <div className="CalendarHeader">
            <div className="select-wrapper" onClick={open}>
                <p>{`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}</p>
                <ChevronDown />
            </div>
            <button>이번달</button>

            <ModalWrapper>
                {/* 2. 배경 Overlay: isOpen일 때 'show' 클래스 추가 */}
                <div className={`bottom-sheet-overlay ${isOpen ? 'show' : ''}`} onClick={close} />

                {/* 3. 시트 본체: isOpen일 때 'open' 클래스 추가 */}
                <div className={`bottom-sheet ${isOpen ? 'open' : ''}`}>
                    <div className="sheet-handle" />
                    <div className="sheet-content">
                        <h4>월 선택</h4>
                        <div className="month-grid">
                            {Array.from({ length: 12 }, (_, i) => (
                                <div
                                    key={i}
                                    className={`month-item ${pivotDate.getMonth() === i ? 'active' : ''}`}
                                    onClick={() => {
                                        updatePivotDate(pivotDate.getFullYear(), i);
                                        close();
                                    }}
                                >
                                    {i + 1}월
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ModalWrapper>
        </div>
    );
};

export default CalendarHeader;
