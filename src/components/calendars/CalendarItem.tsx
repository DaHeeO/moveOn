import { FEELING_LIST } from '../../constants/feeling-constants';
import './CalendarItem.css';

interface Props {
    day: number;
    feelingId?: number;
    isToday: boolean;
    isSelected: boolean;
    handleDateClick: (day: number) => void;
}
const CalendarItem = ({ day, feelingId, isToday, isSelected, handleDateClick }: Props) => {
    const feeling = FEELING_LIST.find((it) => it.feelingId === feelingId);

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

    return feelingId && feeling ? (
        <div
            className={`CalendarItem has-feeling ${isSelected ? 'selected' : ''}`}
            onClick={() => handleDateClick(day)}
            style={{ backgroundColor: feeling.color }} // 배경색 적용
        >
            {tooltipText && <div className={tooltipClass}>{tooltipText}</div>}
            <img src={`../src/assets/feeling${feelingId}.png`} alt={feeling.feelingName} className="emotion-img" />
        </div>
    ) : (
        <div className="CalendarItem" onClick={() => handleDateClick(day)}>
            {tooltipText && <div className={tooltipClass}>{tooltipText}</div>}

            <p className="day-number">{day}</p>
        </div>
    );
};

export default CalendarItem;
