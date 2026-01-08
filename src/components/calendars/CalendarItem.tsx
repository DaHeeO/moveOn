import './CalendarItem.css';

interface Props {
    day: number;
    isToday: boolean;
    isSelected: boolean;
    handleDateClick: (day: number) => void;
}
const CalendarItem = ({ day, isToday, isSelected, handleDateClick }: Props) => {
    if (day <= 0) {
        return <div className="CalendarItem empty"></div>;
    }
    return (
        <div
            className={`CalendarItem ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
            onClick={() => handleDateClick(day)}
        >
            {isToday && <span className="today-tooltip">오늘</span>}

            <p className="day-number">{day}</p>
        </div>
    );
};

export default CalendarItem;
