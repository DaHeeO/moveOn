import { type CategoryData } from '../../constants/category-constants';
import './CalendarItem.css';

interface Props {
    day: number;
    isToday: boolean;
    isSelected: boolean;
    sticker?: CategoryData;
    handleDateClick: (day: number) => void;
}
const CalendarItem = ({ day, isToday, isSelected, sticker, handleDateClick }: Props) => {
    let tooltipText = '';
    let tooltipClass = '';

    if (isToday && isSelected) {
        tooltipText = '오늘';
        tooltipClass = 'today-tooltip';
    } else if (isToday && !isSelected) {
        tooltipText = '오늘';
        tooltipClass = 'today-tooltip tooltip-gray';
    } else if (!isToday && isSelected) {
        tooltipText = '선택';
        tooltipClass = 'today-tooltip';
    }

    if (day <= 0) {
        return <div className="CalendarItem empty"></div>;
    }

    return sticker ? (
        <div
            className={`CalendarItem has-feeling ${isSelected ? 'selected' : ''}`}
            onClick={() => handleDateClick(day)}
            style={{ backgroundColor: sticker.color }}
        >
            {tooltipText && <div className={tooltipClass}>{tooltipText}</div>}
            <img src={sticker.src} alt={sticker.name} className="emotion-img" />
        </div>
    ) : (
        <div className="CalendarItem" onClick={() => handleDateClick(day)}>
            {tooltipText && <div className={tooltipClass}>{tooltipText}</div>}

            <p className="day-number">{day}</p>
        </div>
    );
};

export default CalendarItem;
