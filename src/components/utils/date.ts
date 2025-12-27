/**
 * 인수로 받은 타임스탬프의 날짜를 00:00:00으로 초기화하여 반환합니다.
 * @param timestamp
 * @returns timestamp: number
 */

export const getStartOfDate = (timestamp: number): number => {
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    // 시간을 0(Hours), 0(Minutes), 0(Seconds) 으로 세팅한 새로운 Date 객체 생성 후 숫자로 반환
    return new Date(year, month, day, 0, 0, 0).getTime();
};
