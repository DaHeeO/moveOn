import { useContext, useMemo, useRef, useState } from 'react';
import { DiaryStateContext } from '../App';
import { getFormattedDate, getMonthlyData, getSelectedDiary } from '../utils/diaryFileter';
import CalendarBoard from '../components/calendars/CalendarBoard';
import CalendarHeader from '../components/calendars/CalendarHeader';
import DiaryPreview from '../components/calendars/DiaryPreview';
import BottomButton from '../components/common/BottomButton';
import { useNavigate } from 'react-router-dom';

const Calendar = () => {
    const nav = useNavigate();

    const handleDiaryAction = () => {
        // if (selectedDiary?.id) {
        //     nav(`/edit/${selectedDiary.id}`);
        // } else {
        //     nav('/new');
        // }
        nav('/new');
    };
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
            <BottomButton label={selectedDiary?.id ? '일기 수정' : '일기 쓰기'} onClick={handleDiaryAction} />
        </div>
    );
};

export default Calendar;
