import { useContext, useMemo, useRef, useState } from 'react';
import { DiaryStateContext } from '../App';
import { getFormattedDate, getMonthlyData, getSelectedDiary } from '../utils/diaryFileter';
import CalendarBoard from '../components/calendars/CalendarBoard';
import CalendarHeader from '../components/calendars/CalendarHeader';
import DiaryPreview from '../components/calendars/DiaryPreview';

const Calendar = () => {
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(getFormattedDate(new Date()));
    // header 부분에서 관리하는 년, 월 을 담은 viewMonth
    const viewMonth = pivotDate.slice(0, 7);
    const todayRef = useRef(new Date());

    const monthlyDairy = useMemo(() => {
        return getMonthlyData(data, viewMonth);
    }, [viewMonth]);

    const selectedDiary = useMemo(() => {
        return getSelectedDiary(monthlyDairy, pivotDate);
    }, [pivotDate]);

    // CalendarHeader에서 관리하는 로직 -> 년, 월 만 변경
    const updateViewMonth = (nextMonth: string) => {
        const [year, month] = nextMonth.split('-').map(Number);
        const currentDate = parseInt(pivotDate.split('-')[2]);
        const maxdayInMonth = new Date(year, month, 0).getDate();
        const adjustedDate = currentDate > maxdayInMonth ? maxdayInMonth : currentDate;
        const formattedDate = String(adjustedDate).padStart(2, '0');

        setPivotDate(`${nextMonth}-${formattedDate}`);
    };

    const updateDateToToday = () => {
        setPivotDate(getFormattedDate(todayRef.current));
    };

    const updatePivotDate = (selectedDate: number) => {
        const [year, month] = pivotDate.split('-').map(Number);
        setPivotDate(getFormattedDate(new Date(year, month - 1, selectedDate)));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, width: '100%' }}>
            <CalendarHeader
                todayRef={todayRef.current}
                pivotDate={pivotDate}
                updateViewMonth={updateViewMonth}
                updateDateToToday={updateDateToToday}
            />
            <CalendarBoard
                todayRef={todayRef.current}
                pivotDate={pivotDate}
                updatePivotDate={updatePivotDate}
                monthlyDairy={monthlyDairy}
            />
            <DiaryPreview selectedDiary={selectedDiary} pivotDate={pivotDate} />
            <div style={{ position: 'fixed', bottom: 0 }}>
                <button> 일기 수정</button>
                <button> 선택한 날짜로 이동</button>
            </div>
        </div>
    );
};

export default Calendar;
