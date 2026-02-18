import type { CategoryKey } from '../../constants/category-constants';
import { STICKERS } from '../../constants/sticker-constants';
import './CalendarCategory.css';

interface Props {
    selectedCategory: CategoryKey;
    updateCategory: (category: CategoryKey) => void;
}

const CalendarCategory = ({ selectedCategory, updateCategory }: Props) => {
    return (
        <div className="CalendarCategory">
            {STICKERS.map((sticker) => (
                <div
                    className={`CalendarCategoryWrapper ${selectedCategory === sticker.key ? 'selected' : ''}`}
                    key={sticker.key}
                    onClick={() => updateCategory(sticker.key)}
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
