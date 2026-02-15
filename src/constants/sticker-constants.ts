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
    iconSrc: string;
    color?: string;
    stickers: CategoryData[];
}

export const STICKERS: StickerTypeData[] = [
    {
        key: 'feeling',
        stickerTypeName: '기분',
        iconSrc: '/src/assets/feeling/feeling3.png',
        color: '#FFE57C',
        stickers: FEELING_LIST,
    },
    {
        key: 'diet',
        stickerTypeName: '다이어트',
        iconSrc: '/src/assets/diet/diet7.png',
        color: '#FFC7AF',
        stickers: DIET_LIST,
    },
    {
        key: 'workout',
        stickerTypeName: '운동',
        iconSrc: '/src/assets/workout/workoutIcon.png',
        color: 'transparent',
        stickers: WORKOUT_LIST,
    },
    {
        key: 'poop',
        stickerTypeName: '응가',
        iconSrc: '/src/assets/poop/poop1.png',
        stickers: POOP_LIST,
    },
    {
        key: 'sleep',
        stickerTypeName: '수면',
        iconSrc: '/src/assets/sleep/sleepIcon.png',
        stickers: SLEEP_LIST,
    },
    {
        key: 'period',
        stickerTypeName: '생리',
        iconSrc: '/src/assets/period/period1.png',
        stickers: PERIOD_LIST,
    },
];
