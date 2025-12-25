import ChevronDown from '../../assets/ChevronDown';
import './CalendarHeader.css';

const CalendarHeader = () => {
    return (
        <div className="CalendarHeader">
            <div className="select-wrapper">
                <p>2025.12</p>
                <ChevronDown />
            </div>
            <button>이번달</button>
        </div>
    );
};

export default CalendarHeader;
