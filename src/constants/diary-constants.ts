export interface DiaryData {
    id: number;
    date: string;
    feelingId: number;
    content?: string;
    weight?: number;
}

export const DIARY_TEMP_DATA: DiaryData[] = [
    { id: 1, date: '2025-12-01', feelingId: 1, content: '1월 시작 ㄱㅂㅈㄱ' },
    {
        id: 2,
        date: '2026-01-02',
        feelingId: 2,
        content: '10키로 감량 성공 다 디졌다',
    },
    {
        id: 3,
        date: '2026-01-03',
        feelingId: 3,
        content: '근데 난 왜 일찍 못일어날까?',
        weight: 73.2,
    },
    { id: 4, date: '2026-01-07', feelingId: 4, content: '와 나 이제 좀 잘한다. ㅎㅋㅋㅋㅋ' },
    {
        id: 5,
        date: '2026-01-13',
        feelingId: 5,
        content: '할일 : 일기 추가 기능 만들기',
        weight: 72.2,
    },
    {
        id: 6,
        date: '2026-01-18',
        feelingId: 6,
        content: '스크롤 기능도 추가 하면 좋은데 너무 어려워',
    },
    {
        id: 7,
        date: '2026-01-20',
        feelingId: 7,
        content: 'local storage 기능 활용해서 내꺼 저장하는거 아니면 DB 새로 파? ',
        weight: 71.6,
    },
    { id: 8, date: '2026-01-23', feelingId: 8, content: '일을 키우지 말자 다희야' },
    { id: 9, date: '2026-01-24', feelingId: 9, content: '헬창이 되겠어' },
    {
        id: 10,
        date: '2026-01-25',
        feelingId: 3,
        content: '기가 막히노',
        weight: 72.1,
    },
    { id: 11, date: '2026-01-27', feelingId: 10, content: '유진이 와저러노' },
    { id: 12, date: '2026-01-28', feelingId: 1, content: '이제 1일 남았다ㅏ 2월까지' },
    { id: 13, date: '2026-01-31', feelingId: 2, content: '마감날' },
    { id: 14, date: '2026-02-01', feelingId: 3, content: '몰라여' },
];
