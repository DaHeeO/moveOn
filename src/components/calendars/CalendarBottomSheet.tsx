import { useNavigate } from 'react-router-dom';
import './CalendarBottomSheet.css';

interface Props {
    id?: number;
}

const CalendarBottomSheet = ({ id }: Props) => {
    const nav = useNavigate();
    const navigateToNew = () => {
        nav('/new');
    };
    return (
        <div className="CalendarBottomSheet">
            <button onClick={navigateToNew}> {`${id ? '일기 수정' : '일기 쓰기'}`}</button>
        </div>
    );
};

export default CalendarBottomSheet;
