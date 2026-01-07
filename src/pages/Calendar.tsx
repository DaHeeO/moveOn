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

    const monthlyDate = useMemo(() => {
        return getMonthlyData(data, viewMonth);
    }, [viewMonth]);

    const selectedDiary = useMemo(() => {
        return getSelectedDiary(monthlyDate, pivotDate);
    }, [pivotDate]);

    // header에서 관리하는 로직
    const updateViewMonth = (nextMonth: string) => {
        const day = pivotDate.split('-')[2];
        // safeday 로직 필요!!!!!!!!!!!!!!!!!

        setPivotDate(`${nextMonth}-${day}`);
    };

    const updatePivotDate = () => {};

    return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, width: '100%' }}>
            <CalendarHeader todayRef={todayRef.current} viewMonth={viewMonth} updateViewMonth={updateViewMonth} />
            <CalendarBoard pivotDate={pivotDate} updatePivotDate={updatePivotDate} />
            <DiaryPreview selectedDiary={selectedDiary} pivotDate={pivotDate} />
        </div>
    );
};

export default Calendar;
