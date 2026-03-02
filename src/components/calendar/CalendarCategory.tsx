import { useEffect, useRef } from 'react';
import type { CategoryKey } from '../../constants/category-constants';
import { STICKERS } from '../../constants/sticker-constants';
import './CalendarCategory.css';

interface Props {
    selectedCategory: CategoryKey;
    updateCategory: (category: CategoryKey) => void;
}

const CalendarCategory = ({ selectedCategory, updateCategory }: Props) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const isFirstRender = useRef(true);

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
            {STICKERS.map((sticker) => (
                <div
                    className={`CalendarCategoryWrapper ${selectedCategory === sticker.key ? 'selected' : ''}`}
                    key={sticker.key}
                    onClick={() => updateCategory(sticker.key)}
                    ref={(el) => {
                        categoryRefs.current[sticker.key] = el;
                    }}
                >
                    <div
                        key={sticker.key}
                        className="CalendarCategoryIconWrapper"
                        style={{
                            backgroundColor: sticker.color,
                        }}
                    >
                        <img src={sticker.iconSrc} />
                    </div>
                    <p className={`CategoryIconName ${selectedCategory === sticker.key ? 'selected' : ''}`}>
                        {sticker.stickerTypeName}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default CalendarCategory;
