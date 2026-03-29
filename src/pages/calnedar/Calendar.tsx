import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { DiaryStateContext } from '../../App';
import { getFormattedDate, getMonthlyData, getSelectedDiary } from '../../utils/diaryFileter';
import CalendarHeaderControl from '../../components/calendar/CalendarHeaderControl';
import CalendarHeader from '../../components/calendar/CalendarHeader';
import CalendarStickerBoard from '../../components/calendar/CalendarStickerBoard';
import DiaryPreview from '../../components/calendar/DiaryPreview';
import BottomButton from '../../components/common/BottomButton';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    DEFAULT_CATEGORY,
    type CategoryKey,
    type MetricCategoryKey,
    type StickerCategoryKey,
    type ViewMode,
} from '../../constants/category-constants';
import CalendarMetricBoard from '../../components/calendar/CalendarMetricBoard';
import CalendarCategory from '../../components/calendar/CalendarCategory';

const Calendar = () => {
    const nav = useNavigate();
    const location = useLocation();

    const handleDiaryAction = () => {
        if (selectedDiary) {
            nav(`/diary/edit1/${selectedDiary.id}`, {
                state: { diaryData: selectedDiary, category: selectedCategory },
            });
        } else {
            nav('/diary/new1', { state: { date: pivotDate, category: selectedCategory } });
        }
    };

    const data = useContext(DiaryStateContext);

    const [pivotDate, setPivotDate] = useState(() => {
        // 만약에 수정이나 새로 다이어리 생성하고 넘어온거랴면 pivotDate 들어있음
        const pivotDate = location.state?.pivotDate;

        // 선택된거 있으면 PivotDate 아니면 오늘날짜
        return pivotDate || getFormattedDate(new Date());
    });

    const [selectedCategory, setSelectedCategory] = useState<CategoryKey>(() => {
        const passedCategory = location?.state?.category as CategoryKey;

        return passedCategory || DEFAULT_CATEGORY.metric;
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
    }, [data, viewMonth]);

    const selectedDiary = useMemo(() => {
        return getSelectedDiary(monthlyDairy, pivotDate);
    }, [monthlyDairy, pivotDate]);

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

    const [viewMode, setViewMode] = useState<ViewMode>('metric');

    const handleViewModeChange = (mode: ViewMode) => {
        setViewMode(mode);
        // 모드 전환 시 각 모드의 기본 카테고리로 세팅
        setSelectedCategory(DEFAULT_CATEGORY[mode]);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, width: '100%' }}>
            <CalendarHeader todayRef={todayRef.current} pivotDate={pivotDate} updateDateToToday={updateDateToToday} />

            <CalendarHeaderControl
                viewMode={viewMode}
                onViewModeChange={handleViewModeChange}
                pivotDate={pivotDate}
                updateViewMonth={updateViewMonth}
            />
            <CalendarCategory viewMode={viewMode} selectedCategory={selectedCategory} updateCategory={updateCategory} />
            {viewMode === 'metric' ? (
                <CalendarMetricBoard
                    key="metric-board"
                    todayRef={todayRef.current}
                    pivotDate={pivotDate}
                    updatePivotDate={updatePivotDate}
                    monthlyDairy={monthlyDairy}
                    selectedCategory={selectedCategory as MetricCategoryKey}
                />
            ) : (
                <CalendarStickerBoard
                    todayRef={todayRef.current}
                    pivotDate={pivotDate}
                    updatePivotDate={updatePivotDate}
                    monthlyDairy={monthlyDairy}
                    selectedCategory={selectedCategory as StickerCategoryKey}
                />
            )}

            <DiaryPreview selectedDiary={selectedDiary} pivotDate={pivotDate} selectedCategory={selectedCategory} />
            <BottomButton
                focus={true}
                label={selectedDiary?.id ? '일기 수정' : '일기 쓰기'}
                onClick={handleDiaryAction}
            />
        </div>
    );
};

export default Calendar;
