import './CalendarHeader.css';
import { useState } from 'react';
import { ModalWrapper, useModal } from '../../hooks/useModal';

// icon
import ChevronDown from '../../assets/ChevronDown';
import ChevronRight from '../../assets/ChevronRight';
import X from '../../assets/X';
import ChevronLeft from '../../assets/ChevronLeft';
import { getFormattedMonth } from '../../utils/diaryFileter';

interface Props {
    todayRef: Date;
    viewMonth: string;
    updateViewMonth: (viewMonth: string) => void;
}

const MONTHS_OF_YEAR = Array.from({ length: 12 }, (_, i) => i + 1);

const CalendarHeader = ({ todayRef, viewMonth, updateViewMonth }: Props) => {
    const { isOpen, open, close } = useModal();

    const [currentYear, currentMonth] = viewMonth.split('-').map(Number);
    const [viewYear, setViewYear] = useState(currentYear);
    const isCurrentMonth = currentMonth === todayRef.getMonth() + 1 && currentYear === todayRef.getFullYear();

    const handleModalOpen = () => {
        setViewYear(currentYear);
        open();
    };

    const handleModalClose = () => {
        close();
        setViewYear(currentYear);
    };

    const setToday = () => {
        if (isCurrentMonth) return;
        updateViewMonth(getFormattedMonth(todayRef));
    };

    return (
        <div className="CalendarHeader">
            <div className="select-wrapper" onClick={handleModalOpen}>
                <p>{`${currentYear}년 ${currentMonth}월`}</p>
                <ChevronDown />
            </div>
            <button onClick={setToday} className={`today-btn ${isCurrentMonth ? '' : 'highlight'}`}>
                이번달
            </button>

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
                                            currentMonth === month && currentYear === viewYear ? 'active' : ''
                                        }`}
                                        key={month}
                                        onClick={() => {
                                            updateViewMonth(getFormattedMonth(new Date(viewYear, month - 1)));
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
