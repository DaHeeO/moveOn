import './CalendarHeaderControl.css';
import { useState } from 'react';
import { ModalWrapper, useModal } from '../../hooks/useModal';

// icon
import ChevronDown from '../../assets/ChevronDown';
import ChevronRight from '../../assets/ChevronRight';
import X from '../../assets/X';
import ChevronLeft from '../../assets/ChevronLeft';
import { getFormattedMonth } from '../../utils/diaryFileter';
import type { ViewMode } from '../../constants/category-constants';

interface Props {
    viewMode: ViewMode;
    onViewModeChange: (mode: ViewMode) => void;
    pivotDate: string;
    updateViewMonth: (viewMonth: string) => void;
}

const MONTHS_OF_YEAR = Array.from({ length: 12 }, (_, i) => i + 1);

const CalendarHeaderControl = ({ viewMode, onViewModeChange, pivotDate, updateViewMonth }: Props) => {
    const { isOpen, open, close } = useModal();
    const viewMonth = pivotDate.slice(0, 7);
    const [currentYear, currentMonth] = viewMonth.split('-').map(Number);
    const [viewYear, setViewYear] = useState(currentYear);

    const handleModalOpen = () => {
        setViewYear(currentYear);
        open();
    };

    const handleModalClose = () => {
        close();
        setViewYear(currentYear);
    };

    return (
        <div className="CalendarHeaderControl">
            <div className="select-wrapper" onClick={handleModalOpen}>
                <p>{`${currentYear}년 ${currentMonth}월`}</p>
                <ChevronDown />
            </div>
            <div className="calendar-toggle-container">
                <button
                    className={`calendar-toggle-btn ${viewMode === 'metric' ? 'selected' : ''}`}
                    onClick={() => onViewModeChange('metric')}
                >
                    <img src={viewMode === 'metric' ? '/src/assets/calendar.png' : '/src/assets/calendar_gray.png'} />
                </button>
                <button
                    className={`calendar-toggle-btn ${viewMode === 'sticker' ? 'selected' : ''}`}
                    onClick={() => onViewModeChange('sticker')}
                >
                    <img src={viewMode === 'sticker' ? '/src/assets/sticker.png' : '/src/assets/sticker_gray.png'} />
                </button>
            </div>
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

export default CalendarHeaderControl;
