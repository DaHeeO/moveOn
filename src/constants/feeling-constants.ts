export interface FeelingData {
    feelingId: number;
    feelingName: string;
    color: string;
}

export const FEELING_LIST: FeelingData[] = [
    { feelingId: 1, feelingName: '기분 최고', color: '#00EA7A' },
    { feelingId: 2, feelingName: '행복해', color: '#FFC0C2' },
    { feelingId: 3, feelingName: '신나', color: '#FFE469' },
    { feelingId: 4, feelingName: '평온해', color: '#9FED80' },
    { feelingId: 5, feelingName: '그냥 그래', color: '#CDE773' },
    { feelingId: 6, feelingName: '슬픔', color: '#9DE9F2' },
    { feelingId: 7, feelingName: '우울해', color: '#86B0E6' },
    { feelingId: 8, feelingName: '걱정돼', color: '#BFBDFF' },
    { feelingId: 9, feelingName: '최악', color: '#799AC4' },
    { feelingId: 10, feelingName: '킹받음', color: '#FF3B5F' },
];
