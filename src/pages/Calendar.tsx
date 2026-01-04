import { useContext, useMemo, useRef, useState } from 'react';
import CalendarBoard from '../components/calendars/CalendarBoard';
import CalendarHeader from '../components/calendars/CalendarHeader';
import DiaryPreview from '../components/calendars/DiaryPreview';
import { DiaryStateContext } from '../App';
import { getFormattedMonth, getMonthlyData } from '../utils/diaryFileter';

const Calendar = () => {
    const data = useContext(DiaryStateContext);
    // 년, 월 만 관리
    const [viewMonth, setViewMonth] = useState(getFormattedMonth(new Date()));
    const [selectedDate, setSelectedDate] = useState(Number(new Date().getDate()));
    const todayRef = useRef(new Date());

    const monthlyDate = useMemo(() => {
        return getMonthlyData(data, viewMonth);
    }, [viewMonth]);

    console.log(monthlyDate);

    const updateViewMonth = (viewMonth: string) => {
        setViewMonth(viewMonth);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, width: '100%' }}>
            <CalendarHeader todayRef={todayRef.current} viewMonth={viewMonth} updateViewMonth={updateViewMonth} />
            <CalendarBoard viewMonth={viewMonth} todayRef={todayRef.current} />
            <DiaryPreview />
        </div>
    );
};

export default Calendar;
