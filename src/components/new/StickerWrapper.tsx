import './StickerWrapper.css';
import type { StickerTypeData } from '../../constants/sticker-constants';
import { useEffect, useRef } from 'react';

interface Props {
    stickers: StickerTypeData;
    selectedId: number;
    onSelect: (id: number) => void;
}

const StickerWrapper = ({ stickers, selectedId, onSelect }: Props) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const stickerRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
    const isFirstRender = useRef(true);

    useEffect(() => {
        const container = scrollContainerRef.current;
        const target = stickerRefs.current[selectedId];

        // 1. 선택된 아이템이 없거나(-1), 타겟 엘리먼트가 없으면 아무것도 안 함
        if (selectedId === -1 || !target || !container) {
            // 첫 렌더링 플래그는 업데이트하여 다음 클릭부터 애니메이션이 작동하게 함
            if (isFirstRender.current) isFirstRender.current = false;
            return;
        }

        // 2. 상황에 따른 애니메이션(behavior) 설정
        // 첫 렌더링(이미 선택된 상태로 진입)이면 'auto'(즉시), 아니면 'smooth'(부드럽게)
        const scrollBehavior = isFirstRender.current ? 'auto' : 'smooth';

        container.scrollTo({
            left: target.offsetLeft - container.offsetLeft - 20,
            behavior: scrollBehavior,
        });

        // 실행 후 첫 렌더링 플래그 해제
        isFirstRender.current = false;
    }, [selectedId]);

    const onClickSticker = (id: number) => {
        if (selectedId === id) {
            onSelect(-1);
        } else {
            onSelect(id);
        }
    };

    return (
        <div className="StickerWrapper">
            <h3>{stickers.stickerTypeName}</h3>

            <div className="StickerScrollContainer" ref={scrollContainerRef}>
                {stickers.stickers.map((item) => (
                    <div
                        key={item.id}
                        className="StickerItem"
                        onClick={() => onClickSticker(item.id)}
                        ref={(el) => {
                            stickerRefs.current[item.id] = el;
                        }}
                    >
                        <div
                            className="StickerImageWrapper"
                            style={
                                selectedId === item.id
                                    ? { backgroundColor: item.color }
                                    : { backgroundColor: `${item.color === 'transparent' ? 'transparent' : '#E6E7EA'}` }
                            }
                        >
                            <img src={selectedId === item.id ? item.src : item.srcGray} alt={item.name} />
                        </div>
                        <span className={`StickerName ${selectedId === item.id ? 'selected' : ''}`}>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StickerWrapper;
