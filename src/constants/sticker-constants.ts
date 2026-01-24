import { FEELING_LIST, type FeelingData } from './feeling-constants';

export interface StickerTypeData {
    stickerTypeName: string;
    stickers: FeelingData[];
}

export const FEELING_STICKERS: StickerTypeData = {
    stickerTypeName: '기분',
    stickers: FEELING_LIST,
};
