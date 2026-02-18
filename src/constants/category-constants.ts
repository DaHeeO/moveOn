export interface CategoryData {
    id: number;
    name: string;
    color: string;
    src: string;
    srcGray: string;
    srcException?: string;
}
export type CategoryKey = 'feeling' | 'diet' | 'workout' | 'poop' | 'sleep' | 'period';

export const FEELING_LIST: CategoryData[] = [
    {
        id: 1,
        name: '기분 최고',
        color: '#4FE685',
        src: '/src/assets/feeling/feeling1.png',
        srcGray: '/src/assets/feeling/feeling1gray.png',
    },
    {
        id: 2,
        name: '행복해',
        color: '#FFC0C2',
        src: '/src/assets/feeling/feeling2.png',
        srcGray: '/src/assets/feeling/feeling2gray.png',
    },
    {
        id: 3,
        name: '신나',
        color: '#FFE57C',
        src: '/src/assets/feeling/feeling3.png',
        srcGray: '/src/assets/feeling/feeling3gray.png',
    },
    {
        id: 4,
        name: '평온해',
        color: '#AFEB8C',
        src: '/src/assets/feeling/feeling4.png',
        srcGray: '/src/assets/feeling/feeling4gray.png',
    },
    {
        id: 5,
        name: '그냥 그래',
        color: '#D2E682',
        src: '/src/assets/feeling/feeling5.png',
        srcGray: '/src/assets/feeling/feeling5gray.png',
    },
    {
        id: 6,
        name: '슬픔',
        color: '#AEE7EF',
        src: '/src/assets/feeling/feeling6.png',
        srcGray: '/src/assets/feeling/feeling6gray.png',
    },
    {
        id: 7,
        name: '우울해',
        color: '#8EAFE1',
        src: '/src/assets/feeling/feeling7.png',
        srcGray: '/src/assets/feeling/feeling7gray.png',
    },
    {
        id: 8,
        name: '걱정돼',
        color: '#C0BDFF',
        src: '/src/assets/feeling/feeling8.png',
        srcGray: '/src/assets/feeling/feeling8gray.png',
    },
    {
        id: 9,
        name: '최악',
        color: '#8099C0',
        src: '/src/assets/feeling/feeling9.png',
        srcGray: '/src/assets/feeling/feeling9gray.png',
    },
    {
        id: 10,
        name: '킹받음',
        color: '#FA5064',
        src: '/src/assets/feeling/feeling10.png',
        srcGray: '/src/assets/feeling/feeling10gray.png',
    },
];

export const DIET_LIST: CategoryData[] = [
    {
        id: 1,
        name: '살빠짐',
        color: '#43D778',
        src: '/src/assets/diet/diet1.png',
        srcGray: '/src/assets/diet/diet1gray.png',
    },
    {
        id: 2,
        name: '유지어터',
        color: '#AFEB8C',
        src: '/src/assets/diet/diet2.png',
        srcGray: '/src/assets/diet/diet2gray.png',
    },
    {
        id: 3,
        name: '살쪘어',
        color: '#FFDFB9',
        src: '/src/assets/diet/diet3.png',
        srcGray: '/src/assets/diet/diet3gray.png',
    },
    {
        id: 4,
        name: '오운완',
        color: '#C3C4C9',
        src: '/src/assets/diet/diet4.png',
        srcGray: '/src/assets/diet/diet4gray.png',
    },
    {
        id: 5,
        name: '목표 달성',
        color: '#FFE57C',
        src: '/src/assets/diet/diet5.png',
        srcGray: '/src/assets/diet/diet5gray.png',
    },
    {
        id: 6,
        name: '단식 성공',
        color: '#BAD4E6',
        src: '/src/assets/diet/diet6.png',
        srcGray: '/src/assets/diet/diet6gray.png',
    },
    {
        id: 7,
        name: '치팅데이',
        color: '#FFC7AF',
        src: '/src/assets/diet/diet7.png',
        srcGray: '/src/assets/diet/diet7gray.png',
    },
    {
        id: 8,
        name: '폭식함',
        color: '#FFA7B1',
        src: '/src/assets/diet/diet8.png',
        srcGray: '/src/assets/diet/diet8gray.png',
    },
];

export const WORKOUT_LIST: CategoryData[] = [
    {
        id: 1,
        name: '오운완',
        color: '#43D778',
        src: '/src/assets/workout/workout1.png',
        srcGray: '/src/assets/workout/workout1gray.png',
    },
    {
        id: 2,
        name: '쉬는날',
        color: '#A3BE78',
        src: '/src/assets/workout/workout2.png',
        srcGray: '/src/assets/workout/workout2gray.png',
    },
    {
        id: 3,
        name: '전신운동',
        color: '#284164',
        src: '/src/assets/workout/workout3.png',
        srcGray: '/src/assets/workout/workout3gray.png',
    },
    {
        id: 4,
        name: '상체 뿌셔',
        color: '#284164',
        src: '/src/assets/workout/workout4.png',
        srcGray: '/src/assets/workout/workout4gray.png',
    },
    {
        id: 5,
        name: '하체 뿌셔',
        color: '#284164',
        src: '/src/assets/workout/workout5.png',
        srcGray: '/src/assets/workout/workout5gray.png',
    },
    {
        id: 6,
        name: ' 복근뿌셔',
        color: '#204267',
        src: '/src/assets/workout/workout6.png',
        srcGray: '/src/assets/workout/workout6gray.png',
    },
    {
        id: 7,
        name: '근육통',
        color: '#8EAECA',
        src: '/src/assets/workout/workout7.png',
        srcGray: '/src/assets/workout/workout7gray.png',
    },
    {
        id: 8,
        name: '러닝',
        color: '#4F7955',
        src: '/src/assets/workout/workout8.png',
        srcGray: '/src/assets/workout/workout8gray.png',
    },
    {
        id: 9,
        name: '걷기',
        color: '#4F7955',
        src: '/src/assets/workout/workout9.png',
        srcGray: '/src/assets/workout/workout9gray.png',
    },
    {
        id: 10,
        name: '홈트',
        color: '#B5D4FF',
        src: '/src/assets/workout/workout10.png',
        srcGray: '/src/assets/workout/workout10gray.png',
    },
    {
        id: 11,
        name: '필라테스',
        color: '#FFCBCC',
        src: '/src/assets/workout/workout11.png',
        srcGray: '/src/assets/workout/workout11gray.png',
    },
];

export const POOP_LIST: CategoryData[] = [
    {
        id: 1,
        name: '응가 성공',
        color: 'transparent',
        src: '/src/assets/poop/poop1.png',
        srcGray: '/src/assets/poop/poop1gray.png',
    },
    {
        id: 2,
        name: '황금똥',
        color: 'transparent',
        src: '/src/assets/poop/poop2.png',
        srcGray: '/src/assets/poop/poop2gray.png',
    },
    {
        id: 3,
        name: '딱딱',
        color: 'transparent',
        src: '/src/assets/poop/poop3.png',
        srcGray: '/src/assets/poop/poop3gray.png',
    },
    {
        id: 4,
        name: '설사',
        color: 'transparent',
        src: '/src/assets/poop/poop4.png',
        srcGray: '/src/assets/poop/poop4gray.png',
    },
    {
        id: 5,
        name: '피똥',
        color: 'transparent',
        src: '/src/assets/poop/poop5.png',
        srcGray: '/src/assets/poop/poop5gray.png',
    },
    {
        id: 6,
        name: '꾸륵꾸륵',
        color: 'transparent',
        src: '/src/assets/poop/poop6.png',
        srcGray: '/src/assets/poop/poop6gray.png',
    },
    {
        id: 7,
        name: '변비',
        color: 'transparent',
        src: '/src/assets/poop/poop7.png',
        srcGray: '/src/assets/poop/poop7gray.png',
    },
    {
        id: 8,
        name: '변비 탈출',
        color: 'transparent',
        src: '/src/assets/poop/poop8.png',
        srcGray: '/src/assets/poop/poop8gray.png',
    },
];

export const SLEEP_LIST: CategoryData[] = [
    {
        id: 1,
        name: '잘 잤어',
        color: '#CBDDFD',
        src: '/src/assets/sleep/sleep1.png',
        srcGray: '/src/assets/sleep/sleep1gray.png',
        srcException: '/src/assets/sleep/sleepIcon.png',
    },
    {
        id: 2,
        name: '아주 잘잠',
        color: '#91B3F0',
        src: '/src/assets/sleep/sleep2.png',
        srcGray: '/src/assets/sleep/sleep2gray.png',
        srcException: '/src/assets/sleep/sleepIcon2.png',
    },
    {
        id: 3,
        name: '늦잠잤어',
        color: '#FFE092',
        src: '/src/assets/sleep/sleep3.png',
        srcGray: '/src/assets/sleep/sleep3gray.png',
    },
    {
        id: 4,
        name: '꿈 많이 꿈',
        color: '#C9C6FF',
        src: '/src/assets/sleep/sleep4.png',
        srcGray: '/src/assets/sleep/sleep4gray.png',
    },
    {
        id: 5,
        name: '악몽꿨어',
        color: '#ADA8FF',
        src: '/src/assets/sleep/sleep5.png',
        srcGray: '/src/assets/sleep/sleep5gray.png',
    },
    {
        id: 6,
        name: '잘 못잤어',
        color: '#FFB3A3',
        src: '/src/assets/sleep/sleep6.png',
        srcGray: '/src/assets/sleep/sleep6gray.png',
    },
    {
        id: 7,
        name: '밤 샜어',
        color: '#FA5064',
        src: '/src/assets/sleep/sleep7.png',
        srcGray: '/src/assets/sleep/sleep7gray.png',
    },
];

export const PERIOD_LIST: CategoryData[] = [
    {
        id: 1,
        name: '생리 중',
        color: 'transparent',
        src: '/src/assets/period/period1.png',
        srcGray: '/src/assets/period/period1gray.png',
    },
    {
        id: 2,
        name: '양 많음',
        color: 'transparent',
        src: '/src/assets/period/period2.png',
        srcGray: '/src/assets/period/period2gray.png',
    },
    {
        id: 3,
        name: '양 적음',
        color: 'transparent',
        src: '/src/assets/period/period3.png',
        srcGray: '/src/assets/period/period3gray.png',
    },
    {
        id: 4,
        name: '윽 생리통',
        color: 'transparent',
        src: '/src/assets/period/period4.png',
        srcGray: '/src/assets/period/period4gray.png',
    },
    {
        id: 5,
        name: '부정출혈',
        color: 'transparent',
        src: '/src/assets/period/period5.png',
        srcGray: '/src/assets/period/period5gray.png',
    },
    {
        id: 6,
        name: '분비물',
        color: 'transparent',
        src: '/src/assets/period/period6.png',
        srcGray: '/src/assets/period/period6gray.png',
    },
    {
        id: 7,
        name: '질염',
        color: 'transparent',
        src: '/src/assets/period/period7.png',
        srcGray: '/src/assets/period/period7gray.png',
    },
    {
        id: 8,
        name: '왜 안해?',
        color: 'transparent',
        src: '/src/assets/period/period8.png',
        srcGray: '/src/assets/period/period8gray.png',
    },
    {
        id: 9,
        name: '입맛 터져',
        color: 'transparent',
        src: '/src/assets/period/period9.png',
        srcGray: '/src/assets/period/period9gray.png',
    },
    {
        id: 10,
        name: '러브러브',
        color: '#FFC4C4',
        src: '/src/assets/period/period10.png',
        srcGray: '/src/assets/period/period10gray.png',
    },
];
