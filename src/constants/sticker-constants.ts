import {
    DIET_LIST,
    FEELING_LIST,
    PERIOD_LIST,
    POOP_LIST,
    SLEEP_LIST,
    WORKOUT_LIST,
    type FeelingData,
} from './feeling-constants';

export interface StickerTypeData {
    stickerTypeName: string;
    stickers: FeelingData[];
}

export const FEELING_STICKERS: StickerTypeData = {
    stickerTypeName: '기분',
    stickers: FEELING_LIST,
};

export const DIET_STICKERS: StickerTypeData = {
    stickerTypeName: '다이어트',
    stickers: DIET_LIST,
};

export const WORKOUT_STICKERS: StickerTypeData = {
    stickerTypeName: '운동',
    stickers: WORKOUT_LIST,
};

export const POOP_STICKERS: StickerTypeData = {
    stickerTypeName: '응가',
    stickers: POOP_LIST,
};

export const SLEEP_STICKERS: StickerTypeData = {
    stickerTypeName: '수면',
    stickers: SLEEP_LIST,
};

export const PERIOD_STICKERS: StickerTypeData = {
    stickerTypeName: '응가',
    stickers: PERIOD_LIST,
};
