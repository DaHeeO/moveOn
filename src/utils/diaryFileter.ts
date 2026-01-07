import type { DiaryData } from '../constants/diary-constants';

/**
 * yyyy-MM 형태 변환
 * @param date
 * @returns
 */
export const getFormattedMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
};

/**
 * yyyy-MM-dd string 형태로 반환
 * @param date
 * @returns
 */
export const getFormattedDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

/**
 *
 * @param data
 * @param pivotDate
 * @returns
 */
export const getMonthlyData = (data: DiaryData[], viewMonth: string) => {
    return data.filter((item) => {
        return item.date.startsWith(viewMonth);
    });
};

/**
 * 특정 날짜의 다이어리 조회
 * @param monthlyData
 * @param selectedDate
 * @returns
 */
export const getSelectedDiary = (monthlyData: DiaryData[], selectedDate: string) => {
    return monthlyData.find((item) => {
        return item.date === selectedDate;
    });
};
