import './CalendarItem.css';

interface Props {
    day: number;
    handleDateClick: (day: number) => void;
}
const CalendarItem = ({ day, handleDateClick }: Props) => {
    return (
        <div className={`CalendarItem ${day <= 0 ? 'empty' : ''}`} onClick={() => day > 0 && handleDateClick(day)}>
            {day > 0 && <p>{day}</p>}
        </div>
    );
};

export default CalendarItem;
