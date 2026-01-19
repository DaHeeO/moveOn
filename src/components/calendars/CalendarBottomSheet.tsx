import './CalendarBottomSheet.css';

interface Props {
    id?: number;
}

const CalendarBottomSheet = ({ id }: Props) => {
    return (
        <div className="CalendarBottomSheet">
            <button> {`${id ? '일기 수정' : '일기 쓰기'}`}</button>
        </div>
    );
};

export default CalendarBottomSheet;
