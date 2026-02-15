import type { CategoryKey } from './category-constants';

export type StickerSelection = {
    [key in CategoryKey]?: number;
};

export interface DiaryData {
    id: number;
    date: string;
    feelingId: number;
    content?: string;
    weight?: number;
    stickers?: StickerSelection;
}

export const DIARY_TEMP_DATA: DiaryData[] = [
    {
        id: 1,
        date: '2025-12-01',
        feelingId: 1,
        content: '1월 시작 ㄱㅂㅈㄱ',
        stickers: {
            feeling: 1,
            diet: 3,
            workout: 5,
            poop: 1,
        },
    },
    {
        id: 2,
        date: '2026-01-02',
        feelingId: 2,
        content: '10키로 감량 성공 다 디졌다',
        stickers: {
            feeling: 1,
            diet: 3,
            workout: 5,
            poop: 1,
        },
    },
    {
        id: 3,
        date: '2026-01-03',
        feelingId: 3,
        content: '근데 난 왜 일찍 못일어날까?',
        weight: 73.2,
        stickers: {
            feeling: 1,
            diet: 3,
            workout: 5,
        },
    },
    {
        id: 4,
        date: '2026-01-07',
        feelingId: 4,
        content: '와 나 이제 좀 잘한다. ㅎㅋㅋㅋㅋ',
        stickers: {
            feeling: 1,
            diet: 3,
            workout: 5,
        },
    },
    {
        id: 5,
        date: '2026-01-13',
        feelingId: 5,
        content: '할일 : 일기 추가 기능 만들기',
        weight: 72.2,
        stickers: {
            feeling: 1,
            diet: 3,
            workout: 5,
        },
    },
    {
        id: 6,
        date: '2026-01-18',
        feelingId: 6,
        content: '스크롤 기능도 추가 하면 좋은데 너무 어려워',
        stickers: {
            feeling: 1,
            diet: 3,
            workout: 5,
        },
    },
    {
        id: 7,
        date: '2026-01-20',
        feelingId: 7,
        content: 'local storage 기능 활용해서 내꺼 저장하는거 아니면 DB 새로 파? ',
        weight: 71.6,
        stickers: {
            feeling: 1,
            diet: 3,
            workout: 5,
        },
    },
    {
        id: 8,
        date: '2026-01-23',
        feelingId: 8,
        content: '일을 키우지 말자 다희야',
        stickers: {
            feeling: 1,
            diet: 3,
            workout: 5,
        },
    },
    {
        id: 9,
        date: '2026-01-24',
        feelingId: 9,
        content: '헬창이 되겠어',
        stickers: {
            feeling: 1,
            diet: 3,
            workout: 5,
        },
    },
    {
        id: 10,
        date: '2026-01-25',
        feelingId: 3,
        content: '기가 막히노',
        weight: 72.1,
        stickers: {
            feeling: 1,
            diet: 3,
            workout: 5,
        },
    },
    {
        id: 11,
        date: '2026-01-27',
        feelingId: 10,
        content: '유진이 와저러노',
        stickers: {
            feeling: 1,
            diet: 3,
            workout: 5,
        },
    },
    {
        id: 12,
        date: '2026-01-28',
        feelingId: 1,
        content: '이제 1일 남았다ㅏ 2월까지',
        stickers: {
            feeling: 1,
            diet: 3,
            workout: 5,
        },
    },
    {
        id: 13,
        date: '2026-01-31',
        feelingId: 2,
        content: '마감날',
        stickers: {
            feeling: 1,
            diet: 3,
            workout: 5,
        },
    },
    {
        id: 14,
        date: '2026-02-01',
        feelingId: 3,
        content: '몰라여',
        stickers: {
            feeling: 1,
            diet: 3,
            workout: 5,
        },
    },
    {
        id: 15,
        date: '2026-02-03',
        feelingId: 3,
        content: '발렌타인데이',
        stickers: {
            feeling: 3,
            diet: 8,
            workout: 11,
            poop: 1,
            sleep: 1,
        },
    },
    {
        id: 16,
        date: '2026-02-18',
        feelingId: 3,
        content: '설날',
        stickers: {
            feeling: 1,
            diet: 3,
            workout: 5,
        },
    },
];
