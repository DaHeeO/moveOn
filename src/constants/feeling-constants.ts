export interface FeelingData {
    feelingId: number;
    feelingName: string;
    color: string;
}

export const FEELING_LIST: FeelingData[] = [
    { feelingId: 1, feelingName: '기분 최고', color: '#4FE685' },
    { feelingId: 2, feelingName: '행복해', color: '#FFC0C2' },
    { feelingId: 3, feelingName: '신나', color: '#FFE57C' },
    { feelingId: 4, feelingName: '평온해', color: '#AFEB8C' },
    { feelingId: 5, feelingName: '그냥 그래', color: '#D2E682' },
    { feelingId: 6, feelingName: '슬픔', color: '#AEE7EF' },
    { feelingId: 7, feelingName: '우울해', color: '#8EAFE1' },
    { feelingId: 8, feelingName: '걱정돼', color: '#C0BDFF' },
    { feelingId: 9, feelingName: '최악', color: '#8099C0' },
    { feelingId: 10, feelingName: '킹받음', color: '#FA5064' },
];
