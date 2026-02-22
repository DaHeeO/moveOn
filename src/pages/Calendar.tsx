import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { DiaryStateContext } from '../App';
import { getFormattedDate, getMonthlyData, getSelectedDiary } from '../utils/diaryFileter';
import CalendarBoard from '../components/calendar/CalendarBoard';
import CalendarHeader from '../components/calendar/CalendarHeader';
import DiaryPreview from '../components/calendar/DiaryPreview';
import BottomButton from '../components/common/BottomButton';
import { useLocation, useNavigate } from 'react-router-dom';
import CalendarCategory from '../components/calendar/CalendarCategory';
import type { CategoryKey } from '../constants/category-constants';

const Calendar = () => {
    const nav = useNavigate();
    const location = useLocation();

    const handleDiaryAction = () => {
        // if (selectedDiary) {
        //     nav(`/edit/${selectedDiary.id}`, { state: { diaryData: selectedDiary } });
        // } else {
        //     nav('/new1', { state: { date: pivotDate } });
        // }
        nav('/new1', { state: { date: pivotDate } });
    };

    const data = useContext(DiaryStateContext);

    const [pivotDate, setPivotDate] = useState(() => {
        // 만약에 수정이나 새로 다이어리 생성하고 넘어온거랴면 pivotDate 들어있음
        const pivotDate = location.state?.pivotDate;

        // 선택된거 있으면 PivotDate 아니면 오늘날짜
        return pivotDate || getFormattedDate(new Date());
    });

    // state 안 비워져서 이렇게 두는거
    useEffect(() => {
        if (location.state?.pivotDate) {
            nav(location.pathname, { replace: true, state: {} });
        }
    }, []);

    // header 부분에서 관리하는 년, 월 을 담은 viewMonth
    const viewMonth = pivotDate.slice(0, 7);
    const todayRef = useRef(new Date());

    const monthlyDairy = useMemo(() => {
        if (!data) return [];
        return getMonthlyData(data, viewMonth);
    }, [viewMonth]);

    const selectedDiary = useMemo(() => {
        return getSelectedDiary(monthlyDairy, pivotDate);
    }, [pivotDate]);

    const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('feeling');

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

    const updateCategory = (category: CategoryKey) => {
        setSelectedCategory(category);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, width: '100%' }}>
            <CalendarHeader
                todayRef={todayRef.current}
                pivotDate={pivotDate}
                updateViewMonth={updateViewMonth}
                updateDateToToday={updateDateToToday}
            />
            <CalendarCategory selectedCategory={selectedCategory} updateCategory={updateCategory} />
            <CalendarBoard
                todayRef={todayRef.current}
                pivotDate={pivotDate}
                updatePivotDate={updatePivotDate}
                monthlyDairy={monthlyDairy}
                selectedCategory={selectedCategory}
            />
            <DiaryPreview selectedDiary={selectedDiary} pivotDate={pivotDate} />
            <BottomButton
                focus={true}
                label={selectedDiary?.id ? '일기 수정' : '일기 쓰기'}
                onClick={handleDiaryAction}
            />
        </div>
    );
};

export default Calendar;
