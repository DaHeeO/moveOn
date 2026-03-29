import { useNavigate } from 'react-router-dom';
import type { DiaryData } from '../../constants/diary-constants';
import { STICKERS } from '../../constants/sticker-constants';
import './DiaryPreview.css';
import { ModalWrapper, useModal } from '../../hooks/useModal';
import MinusVertical from '../../assets/MinusVertical';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../../App';
import { toast } from '../../core/toast';
import type { CategoryKey } from '../../constants/category-constants';

interface Props {
    selectedDiary?: DiaryData;
    pivotDate: string;
    selectedCategory: CategoryKey;
}

const DAYS = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

const DiaryPreview = ({ selectedDiary, pivotDate, selectedCategory }: Props) => {
    const nav = useNavigate();
    const { onDelete } = useContext(DiaryDispatchContext)!;

    const { isOpen, open, close } = useModal();

    const handleModalOpen = () => {
        open();
    };

    const handleModalClose = () => {
        close();
    };

    const curDate = new Date(pivotDate);
    const month = curDate.getMonth() + 1;
    const date = curDate.getDate();
    const day = DAYS[curDate.getDay()];
    const formattedDate = `${month}.${date} ${day}`;

    const navigateToEditPage = () => {
        if (selectedDiary) {
            nav(`/diary/edit1/${selectedDiary.id}`, {
                state: { diaryData: selectedDiary, category: selectedCategory },
            });
        }
    };

    const handleDelete = () => {
        if (!selectedDiary) return;
        onDelete(Number(selectedDiary.id));
        close();
        toast('삭제가 완료되었습니다');
    };

    if (!selectedDiary) {
        return (
            <div className="DiaryPreview empty">
                <div className="header-wrapper">
                    <div>{formattedDate}</div>
                </div>
                <div className="content-wrapper">
                    <div className="empty-wrapper">
                        <img src="../src/assets/feeling/feeling1gray.png" className="img_wrapper" />
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
                    <div onClick={navigateToEditPage}> 수정</div>
                    <div onClick={handleModalOpen}> 삭제</div>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="icon-div-wrapper">
                    {Object.entries(selectedDiary.stickers).map(([key, id]) => {
                        const categoryConfig = STICKERS.find((s) => s.key === key);
                        const stickerInfo = categoryConfig?.stickers.find((it) => it.id === id);

                        const isSleepExeption = () => {
                            if (key === 'sleep' && (id === 1 || id === 2)) {
                                return true;
                            }
                            return false;
                        };
                        if (!stickerInfo) return null;

                        return (
                            <div key={key} className="icon-list-wrapper">
                                <div
                                    className="icon-wrapper"
                                    style={{
                                        backgroundColor: isSleepExeption() ? 'transparent' : stickerInfo?.color,
                                    }}
                                >
                                    <img
                                        src={isSleepExeption() ? stickerInfo.srcException : stickerInfo.src}
                                        alt={stickerInfo.name}
                                    />
                                </div>
                                <span>{stickerInfo.name}</span>
                            </div>
                        );
                    })}
                </div>
                <p className="diary-content"> {selectedDiary.content}</p>
            </div>
            <ModalWrapper isOpen={isOpen}>
                <div className="modal-alert-overlay" onClick={handleModalClose}>
                    <div className={'modal-alert-center-background'} onClick={(e) => e.stopPropagation()}>
                        <div className="alert-sheet-overlay">
                            <div className="alert-sheet-content">
                                <p>일기를 삭제하시겠어요?</p>
                                <span>작성한 스티커 및 모든 내용이 삭제됩니다</span>
                            </div>
                            <div className="alert-sheet-select">
                                <button onClick={handleModalClose}>아니요</button>
                                <MinusVertical />
                                <button onClick={handleDelete}>네. 삭제할래요</button>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalWrapper>
        </div>
    );
};

export default DiaryPreview;
