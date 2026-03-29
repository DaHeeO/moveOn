import './CalendarHeader.css';
import { getFormattedDate } from '../../utils/diaryFileter';

// icon
import X from '../../assets/X';
import { useNavigate } from 'react-router-dom';

interface Props {
    todayRef: Date;
    pivotDate: string;
    updateDateToToday: () => void;
}

const CalendarHeader = ({ todayRef, pivotDate, updateDateToToday }: Props) => {
    const nav = useNavigate();
    const isToday = pivotDate === getFormattedDate(todayRef);

    const setToday = () => {
        if (isToday) return;
        updateDateToToday();
    };

    const navigateHome = () => {
        nav('/');
    };

    return (
        <div className="CalendarHeader">
            <div>
                <X onClick={navigateHome} />
            </div>
            <button onClick={setToday} className={`today-btn ${isToday ? '' : 'highlight'}`}>
                오늘 선택
            </button>
        </div>
    );
};

export default CalendarHeader;
