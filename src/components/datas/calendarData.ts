export interface DiaryData {
    id: number;
    date: number;
    feelingId?: number;
    content?: string;
    weight?: number;
}

export const diaryTempData: DiaryData[] = [
    { id: 1, date: new Date('2025-12-01').getTime(), feelingId: 1, content: '12월 첫 시작 연말을 잘 마무래 해보기!' },
    {
        id: 2,
        date: new Date('2025-12-02').getTime(),
        feelingId: 2,
        content: '러닝 시작, 심으뜸 러닝 7:30 페이스로 조짐',
    },
    {
        id: 3,
        date: new Date('2025-12-03').getTime(),
        feelingId: 4,
        content: '오늘은 운동 안했지롱 늦게 일어나서 나도 이제 노력안해도 일찍일어나고 싶어',
        weight: 73.2,
    },
    { id: 4, date: new Date('2025-12-07').getTime(), feelingId: 3, content: '학원에 할일은 왜케 많은겨...' },
    {
        id: 5,
        date: new Date('2025-12-13').getTime(),
        feelingId: 5,
        content: '우리반 애들 시험 망해서 2명 나감.. ㅠㅠ 미안하다 얘들아',
        weight: 72.2,
    },
    {
        id: 6,
        date: new Date('2025-12-18').getTime(),
        feelingId: 1,
        content: '학원 방학 시작!! 이제부터 포폴 준비 열심히 해보자',
    },
    {
        id: 7,
        date: new Date('2025-12-20').getTime(),
        feelingId: 1,
        content: '다이어리 만드는거 들었는데 react 이제 조금씩 이해가 되는것 같아',
        weight: 71.6,
    },
    { id: 8, date: new Date('2025-12-23').getTime(), feelingId: 4, content: '해피 솔크다 이자식들아...' },
    { id: 8, date: new Date('2025-12-24').getTime(), feelingId: 4, content: '나도 남자친구...' },
    {
        id: 9,
        date: new Date('2025-12-25').getTime(),
        feelingId: 2,
        content: '오늘은 심심하고 재미었을줄 알았는데 애들 만나서 재밌긴 했어',
        weight: 72.1,
    },
    { id: 10, date: new Date('2025-12-27').getTime(), feelingId: 1, content: 'UI는 기깔나게 만드는 듯 ㅋㅋㅋㅋㅋ' },
    { id: 11, date: new Date('2026-01-27').getTime(), feelingId: 1, content: 'UI는 기깔나게 만드는 듯 ㅋㅋㅋㅋㅋ' },
];
