import type { CategoryKey } from '../../constants/category-constants';
import type { DiaryData } from '../../constants/diary-constants';
import { STICKERS } from '../../constants/sticker-constants';
import './CalendarBoard.css';
import CalendarItem from './CalendarItem';

interface Props {
    todayRef: Date;
    pivotDate: string;
    updatePivotDate: (selectedDate: number) => void;
    monthlyDairy: DiaryData[];
    selectedCategory: CategoryKey;
}

const CalendarBoard = ({ todayRef, pivotDate, updatePivotDate, monthlyDairy, selectedCategory }: Props) => {
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

    // 현재 카테고리랑 같은 스티커 렌더링
    const stickers = STICKERS.find((s) => s.key === selectedCategory)!;

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

                    // 여기다가 로직 처리를 해야함 category 별로
                    const currentStickerId = dayData?.stickers[selectedCategory];
                    const sticker = stickers.stickers.find((s) => s.id === currentStickerId);
                    return (
                        <CalendarItem
                            key={day}
                            day={day}
                            sticker={sticker}
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
