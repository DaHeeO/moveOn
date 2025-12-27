import './DiaryPreview.css';

const DiaryPreview = () => {
    const content = `오늘 할일 
    1. 데이터 파일 import 
    2. 상세 조회 기능
    그리고 자잘하게 여러개 혼자 힘으로 해보기! 
 `;
    return (
        <div className="DiaryPreview">
            <div className="header-wrapper">12.25 목요일</div>
            <div className="content-wrapper">{content}</div>
        </div>
    );
};

export default DiaryPreview;
