import type { DiaryData } from '../../constants/diary-constants';
import './CalendarBoard.css';
import CalendarItem from './CalendarItem';

interface Props {
    todayRef: Date;
    pivotDate: string;
    updatePivotDate: (selectedDate: number) => void;
    monthlyDairy: DiaryData[];
}

const CalendarBoard = ({ todayRef, pivotDate, updatePivotDate, monthlyDairy }: Props) => {
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

    const [year, month, currentDate] = pivotDate.split('-').map(Number);

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

    const handleDateClick = (selectedDate: number) => {
        if (selectedDate <= 0) return;
        updatePivotDate(selectedDate);
    };

    return (
        <div className="CalendarBoard">
            <div className="days-wrapper">
                {daysOfWeek.map((day) => {
                    return <div key={day}>{day}</div>;
                })}
            </div>
            <div className="calendar-grid">
                {daysrender.map((day) => {
                    const dayData = monthlyDairy.find((item) => {
                        const itemDate = new Date(item.date);
                        return itemDate.getDate() === day;
                    });
                    return (
                        <CalendarItem
                            key={day}
                            day={day}
                            feelingId={dayData?.feelingId}
                            isToday={
                                year === todayRef.getFullYear() &&
                                month === todayRef.getMonth() + 1 &&
                                todayRef.getDate() === day
                            }
                            isSelected={day === currentDate}
                            handleDateClick={() => handleDateClick(day)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CalendarBoard;
