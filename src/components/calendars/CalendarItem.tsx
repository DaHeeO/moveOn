import './CalendarItem.css';

const CalendarItem = ({ day }: { day: number }) => {
    return <div className={`CalendarItem ${day <= 0 ? 'empty' : ''}`}>{day > 0 && <p>{day}</p>}</div>;
};

export default CalendarItem;
