export interface FeelingData {
    feelingId: number;
    feelingName: string;
    color: string;
}

export const FEELING_LIST: FeelingData[] = [
    { feelingId: 1, feelingName: '완전 좋음', color: '#4FE685' },
    { feelingId: 2, feelingName: '좋음', color: '#FFE57C' },
    { feelingId: 3, feelingName: '그럭저럭', color: '#D2E682' },
    { feelingId: 4, feelingName: '나쁨', color: '#8FAFE1' },
    { feelingId: 5, feelingName: '끔찍함', color: '#FA5064' },
];
