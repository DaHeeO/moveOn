import './CalendarItem.css';

const CalendarItem = ({ day }: { day: number }) => {
    return (
        <div className="CalendarItem">
            <p>{day}</p>
        </div>
    );
};

export default CalendarItem;
