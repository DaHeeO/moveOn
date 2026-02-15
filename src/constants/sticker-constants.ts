import {
    DIET_LIST,
    FEELING_LIST,
    PERIOD_LIST,
    POOP_LIST,
    SLEEP_LIST,
    WORKOUT_LIST,
    type CategoryData,
    type CategoryKey,
} from './category-constants';

export interface StickerTypeData {
    key: CategoryKey;
    stickerTypeName: string;
    stickers: CategoryData[];
}

export const STICKERS: StickerTypeData[] = [
    {
        key: 'feeling',
        stickerTypeName: '기분',
        stickers: FEELING_LIST,
    },
    {
        key: 'diet',
        stickerTypeName: '다이어트',
        stickers: DIET_LIST,
    },
    {
        key: 'workout',
        stickerTypeName: '운동',
        stickers: WORKOUT_LIST,
    },
    {
        key: 'poop',
        stickerTypeName: '응가',
        stickers: POOP_LIST,
    },
    {
        key: 'sleep',
        stickerTypeName: '수면',
        stickers: SLEEP_LIST,
    },
    {
        key: 'period',
        stickerTypeName: '생리',
        stickers: PERIOD_LIST,
    },
];
