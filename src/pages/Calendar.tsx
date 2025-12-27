import { useContext, useMemo, useState } from 'react';
import CalendarBoard from '../components/calendars/CalendarBoard';
import CalendarHeader from '../components/calendars/CalendarHeader';
import DiaryPreview from '../components/calendars/DiaryPreview';
import { DiaryStateContext } from '../App';
import { getMonthlyData } from '../utils/diaryFileter';

const Calendar = () => {
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());

    const monthlyDate = useMemo(() => {
        return getMonthlyData(data, pivotDate);
    }, [pivotDate]);

    console.log(monthlyDate);

    const updatePivotDate = (targetYear: number, targetMonth: number) => {
        const lastDayOfTargetMonth = new Date(targetYear, targetMonth + 1, 0).getDate();

        const safeDay = pivotDate.getDate() > lastDayOfTargetMonth ? lastDayOfTargetMonth : pivotDate.getDate();
        setPivotDate(new Date(targetYear, targetMonth, safeDay));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, width: '100%' }}>
            <CalendarHeader pivotDate={pivotDate} updatePivotDate={updatePivotDate} />
            <CalendarBoard />
            <DiaryPreview />
        </div>
    );
};

export default Calendar;
