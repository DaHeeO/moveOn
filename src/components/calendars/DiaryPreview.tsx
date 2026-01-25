import type { DiaryData } from '../../constants/diary-constants';
import { FEELING_LIST } from '../../constants/feeling-constants';
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
    const feeling = FEELING_LIST.find((it) => it.feelingId === selectedDiary?.feelingId);

    if (!selectedDiary) {
        return (
            <div className="DiaryPreview empty">
                <div className="header-wrapper">
                    <div>{formattedDate}</div>
                </div>
                <div className="content-wrapper">
                    <div className="empty-wrapper">
                        <img src="../src/assets/feelingDefault.png" className="img_wrapper" />
                        <p>작성된 스티커 일기가 없어요</p>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="DiaryPreview">
            <div className="header-wrapper">
                <div>{formattedDate}</div>
                <div className="diary-button">
                    <div> 수정</div>
                    <div> 삭제</div>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="icon-list-wrapper">
                    <img
                        src={`../src/assets/feeling/feeling${selectedDiary.feelingId}.png`}
                        className="icon-wrapper"
                        style={{ backgroundColor: feeling?.color }}
                    />
                    {feeling?.feelingName}
                </div>
                <p style={{ color: 'black' }}> {selectedDiary.content}</p>
            </div>
        </div>
    );
};

export default DiaryPreview;
