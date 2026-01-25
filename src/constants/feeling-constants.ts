export interface FeelingData {
    feelingId: number;
    feelingName: string;
    color: string;
    src: string;
    srcGray: string;
}

export const FEELING_LIST: FeelingData[] = [
    {
        feelingId: 1,
        feelingName: '기분 최고',
        color: '#4FE685',
        src: '/src/assets/feeling/feeling1.png',
        srcGray: '/src/assets/feeling/feeling1gray.png',
    },
    {
        feelingId: 2,
        feelingName: '행복해',
        color: '#FFC0C2',
        src: '/src/assets/feeling/feeling2.png',
        srcGray: '/src/assets/feeling/feeling2gray.png',
    },
    {
        feelingId: 3,
        feelingName: '신나',
        color: '#FFE57C',
        src: '/src/assets/feeling/feeling3.png',
        srcGray: '/src/assets/feeling/feeling3gray.png',
    },
    {
        feelingId: 4,
        feelingName: '평온해',
        color: '#AFEB8C',
        src: '/src/assets/feeling/feeling4.png',
        srcGray: '/src/assets/feeling/feeling4gray.png',
    },
    {
        feelingId: 5,
        feelingName: '그냥 그래',
        color: '#D2E682',
        src: '/src/assets/feeling/feeling5.png',
        srcGray: '/src/assets/feeling/feeling5gray.png',
    },
    {
        feelingId: 6,
        feelingName: '슬픔',
        color: '#AEE7EF',
        src: '/src/assets/feeling/feeling6.png',
        srcGray: '/src/assets/feeling/feeling6gray.png',
    },
    {
        feelingId: 7,
        feelingName: '우울해',
        color: '#8EAFE1',
        src: '/src/assets/feeling/feeling7.png',
        srcGray: '/src/assets/feeling/feeling7gray.png',
    },
    {
        feelingId: 8,
        feelingName: '걱정돼',
        color: '#C0BDFF',
        src: '/src/assets/feeling/feeling8.png',
        srcGray: '/src/assets/feeling/feeling8gray.png',
    },
    {
        feelingId: 9,
        feelingName: '최악',
        color: '#8099C0',
        src: '/src/assets/feeling/feeling9.png',
        srcGray: '/src/assets/feeling/feeling9gray.png',
    },
    {
        feelingId: 10,
        feelingName: '킹받음',
        color: '#FA5064',
        src: '/src/assets/feeling/feeling10.png',
        srcGray: '/src/assets/feeling/feeling10gray.png',
    },
];
