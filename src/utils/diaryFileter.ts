import type { DiaryData } from '../constants/diary-constants';

/**
 *
 * @param data
 * @param pivotDate
 * @returns
 */
export const getMonthlyData = (data: DiaryData[], pivotDate: Date) => {
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime();

    return data.filter((item) => {
        return item.date >= beginTime && item.date <= endTime;
    });
};

/**
 * 특정 날짜의 다이어리 조회
 * @param monthlyData
 * @param selectedDate
 * @returns
 */
export const getSelectedDiary = (monthlyData: DiaryData[], selectedDate: Date) => {
    const targetDay = selectedDate.getDate();

    return monthlyData.find((item) => {
        return new Date(item.date).getDate() === targetDay;
    });
};
