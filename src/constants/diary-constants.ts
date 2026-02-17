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
    stickers: StickerSelection;
}

export const DIARY_TEMP_DATA: DiaryData[] = [
    {
        id: 1,
        date: '2026-02-01',
        feelingId: 1,
        content: '2월 시작 ㄱㅂㅈㄱ',
        stickers: {
            feeling: 1,
            diet: 1,
            workout: 1,
            poop: 1,
            sleep: 1,
            period: 1,
        },
    },
    {
        id: 2,
        date: '2026-02-02',
        feelingId: 2,
        content: '10키로 감량 성공 다 디졌다',
        stickers: {
            feeling: 2,
            diet: 2,
            workout: 2,
            poop: 2,
            sleep: 2,
            period: 2,
        },
    },
    {
        id: 3,
        date: '2026-02-03',
        feelingId: 3,
        content: '근데 난 왜 일찍 못일어날까?',
        weight: 73.2,
        stickers: {
            feeling: 3,
            diet: 3,
            workout: 3,
            poop: 3,
            sleep: 3,
            period: 3,
        },
    },
    {
        id: 4,
        date: '2026-02-07',
        feelingId: 4,
        content: '와 나 이제 좀 잘한다. ㅎㅋㅋㅋㅋ',
        stickers: {
            feeling: 4,
            diet: 4,
            workout: 4,
            poop: 4,
            sleep: 4,
            period: 4,
        },
    },
    {
        id: 5,
        date: '2026-02-13',
        feelingId: 5,
        content: '할일 : 일기 추가 기능 만들기',
        weight: 72.2,
        stickers: {
            feeling: 5,
            diet: 5,
            workout: 5,
            poop: 5,
            sleep: 5,
            period: 5,
        },
    },
    {
        id: 6,
        date: '2026-02-18',
        feelingId: 6,
        content: '스크롤 기능도 추가 하면 좋은데 너무 어려워',
        stickers: {
            feeling: 6,
            diet: 6,
            workout: 6,
            poop: 6,
            sleep: 6,
            period: 6,
        },
    },
    {
        id: 7,
        date: '2026-02-20',
        feelingId: 7,
        content: 'local storage 기능 활용해서 내꺼 저장하는거 아니면 DB 새로 파? ',
        weight: 71.6,
        stickers: {
            feeling: 7,
            diet: 7,
            workout: 7,
            poop: 7,
            sleep: 7,
            period: 7,
        },
    },
    {
        id: 8,
        date: '2026-02-23',
        feelingId: 8,
        content: '일을 키우지 말자 다희야',
        stickers: {
            feeling: 8,
            diet: 8,
            workout: 8,
            poop: 8,
            period: 8,
        },
    },
    {
        id: 9,
        date: '2026-02-24',
        feelingId: 9,
        content: '헬창이 되겠어',
        stickers: {
            feeling: 9,
            workout: 9,
            period: 9,
        },
    },
    {
        id: 10,
        date: '2026-02-25',
        feelingId: 3,
        content: '기가 막히노',
        weight: 72.1,
        stickers: {
            feeling: 10,
            workout: 10,
            period: 10,
        },
    },
    {
        id: 11,
        date: '2026-02-27',
        feelingId: 10,
        content: '유진이 와저러노',
        stickers: {
            workout: 11,
        },
    },
];
