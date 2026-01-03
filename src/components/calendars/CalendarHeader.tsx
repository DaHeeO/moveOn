import { useState } from 'react';
import ChevronDown from '../../assets/ChevronDown';
import ChevronLeft from '../../assets/chevronLeft';
import ChevronRight from '../../assets/chevronRight';
import X from '../../assets/x';
import { ModalWrapper, useModal } from '../../hooks/useModal';
import './CalendarHeader.css';

interface Props {
    pivotDate: Date;
    updatePivotDate: (year: number, month: number) => void;
}

const MONTHS_OF_YEAR = Array.from({ length: 12 }, (_, i) => i + 1);

const CalendarHeader = ({ pivotDate, updatePivotDate }: Props) => {
    const { isOpen, open, close } = useModal();

    const [viewYear, setViewYear] = useState(pivotDate.getFullYear());

    const handleModalOpen = () => {
        setViewYear(pivotDate.getFullYear());
        open();
    };

    const handleModalClose = () => {
        close();
        setViewYear(pivotDate.getFullYear());
    };

    const setToday = () => {
        const now = new Date();
        updatePivotDate(now.getFullYear(), now.getMonth());
        setViewYear(now.getFullYear());
    };

    return (
        <div className="CalendarHeader">
            <div className="select-wrapper" onClick={handleModalOpen}>
                <p>{`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}</p>
                <ChevronDown />
            </div>
            <button onClick={setToday}>이번달</button>

            <ModalWrapper isOpen={isOpen}>
                <div className={'bottom-sheet-overlay'} onClick={handleModalClose} />
                <div className={'bottom-sheet'} onClick={(e) => e.stopPropagation()}>
                    <div className="sheet-content">
                        <div className="sheet-header">
                            <h4>월 선택</h4>
                            <div className="icon-button" onClick={handleModalClose}>
                                <X />
                            </div>
                        </div>
                        <div className="year-grid">
                            <div
                                className="icon-button"
                                onClick={() => {
                                    setViewYear(viewYear - 1);
                                }}
                            >
                                <ChevronLeft />
                            </div>
                            {viewYear}년
                            <div
                                className="icon-button"
                                onClick={() => {
                                    setViewYear(viewYear + 1);
                                }}
                            >
                                <ChevronRight />
                            </div>
                        </div>
                        <div className="month-grid">
                            {MONTHS_OF_YEAR.map((month) => {
                                return (
                                    <div
                                        className={`month-item ${
                                            pivotDate.getMonth() + 1 === month && viewYear === pivotDate.getFullYear()
                                                ? 'active'
                                                : ''
                                        }`}
                                        key={month}
                                        onClick={() => {
                                            updatePivotDate(viewYear, month - 1);
                                            close();
                                        }}
                                    >
                                        {month}월
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </ModalWrapper>
        </div>
    );
};

export default CalendarHeader;
