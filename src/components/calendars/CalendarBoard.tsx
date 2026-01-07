import './CalendarBoard.css';
import CalendarItem from './CalendarItem';

interface Props {
    pivotDate: string;
    updatePivotDate: () => void;
}

const CalendarBoard = ({ pivotDate, updatePivotDate }: Props) => {
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

    const [year, month, day] = pivotDate.split('-').map(Number);

    // 0: sun, 1: mon, ...
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay();

    // 이번달의 마지막 날
    const daysInMonth = new Date(year, month, 0).getDate();

    const daysrender = [];

    // 캘린더 앞날짜 의미없는거 추가
    for (let i = -firstDayOfMonth + 1; i <= 0; i++) {
        daysrender.push(i);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        daysrender.push(i);
    }

    return (
        <div className="CalendarBoard">
            <div className="days-wrapper">
                {daysOfWeek.map((day) => {
                    return <div key={day}>{day}</div>;
                })}
            </div>
            <div className="calendar-grid">
                {daysrender.map((day) => {
                    return <CalendarItem key={day} day={day} />;
                })}
            </div>
        </div>
    );
};

export default CalendarBoard;
