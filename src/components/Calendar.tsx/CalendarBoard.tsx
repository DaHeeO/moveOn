import './CalendarBoard.css';
import CalendarItem from './CalendarItem';

const CalendarBoard = () => {
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const daysrender = [];
    for (let i = 0; i < 31; i++) {
        daysrender.push(i);
    }

    return (
        <div className="CalendarBoard">
            <div className="days-wrapper">
                {daysOfWeek.map((day) => {
                    return <div>{day}</div>;
                })}
            </div>
            <div className="calendar-grid">
                {daysrender.map((day) => {
                    return <CalendarItem day={day + 1} />;
                })}
            </div>
        </div>
    );
};

export default CalendarBoard;
