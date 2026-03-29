import { useEffect, useRef } from 'react';
import type { CategoryKey, ViewMode } from '../../constants/category-constants';
import { STICKERS, METRICS } from '../../constants/sticker-constants';
import './CalendarCategory.css';

interface Props {
    viewMode: ViewMode;
    selectedCategory: CategoryKey;
    updateCategory: (category: CategoryKey) => void;
}

const CalendarCategory = ({ viewMode, selectedCategory, updateCategory }: Props) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const isFirstRender = useRef(true);

    const displayData = (viewMode === 'sticker' ? STICKERS : METRICS).map((item) => ({
        key: item.key,
        name: item.stickerTypeName,
        color: item.color,
        icon: 'iconSrc' in item ? item.iconSrc : null,
    }));

    useEffect(() => {
        const container = scrollContainerRef.current;
        const target = categoryRefs.current[selectedCategory];

        if (container && target) {
            const behavior = isFirstRender.current ? 'auto' : 'smooth';

            container.scrollTo({
                left: target.offsetLeft - container.offsetLeft - 30,
                behavior: behavior,
            });
        }

        isFirstRender.current = false;
    }, [selectedCategory]);

    return (
        <div className="CalendarCategory" ref={scrollContainerRef}>
            {displayData.map((item) => (
                <div
                    className={`CalendarCategoryWrapper ${selectedCategory === item.key ? 'selected' : ''}`}
                    key={item.key}
                    onClick={() => updateCategory(item.key)}
                    ref={(el) => {
                        categoryRefs.current[item.key] = el;
                    }}
                >
                    <div className="CalendarCategoryIconWrapper" style={{ backgroundColor: item.color }}>
                        {item.icon ? (
                            <img src={item.icon} alt="" />
                        ) : (
                            <div
                                style={{
                                    width: '16px',
                                    height: '16px',
                                    backgroundColor: item.color,
                                    borderRadius: '50%',
                                }}
                            />
                        )}
                    </div>
                    <p className={`CategoryIconName ${selectedCategory === item.key ? 'selected' : ''}`}>{item.name}</p>
                </div>
            ))}
        </div>
    );
};

export default CalendarCategory;
