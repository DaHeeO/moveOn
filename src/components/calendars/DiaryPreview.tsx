import type { DiaryData } from '../../constants/diary-constants';
import './DiaryPreview.css';

interface Props {
    selectedDiary?: DiaryData;
    pivotDate: string;
}

const DAYS = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

const DiaryPreview = ({ selectedDiary, pivotDate }: Props) => {
    const curDate = new Date(pivotDate);
    const month = curDate.getMonth() + 1;
    const date = curDate.getDate();
    const day = DAYS[curDate.getDay()];
    const formattedDate = `${month}.${date} ${day}`;

    if (!selectedDiary) {
        return (
            <div className="DiaryPreview empty">
                <div className="header-wrapper">{formattedDate}</div>
                <div className="content-wrapper">작성된 일기가 없습니다.</div>
            </div>
        );
    }
    return (
        <div className="DiaryPreview">
            <div className="header-wrapper">{formattedDate}</div>
            <div className="content-wrapper">{selectedDiary.content}</div>
        </div>
    );
};

export default DiaryPreview;
