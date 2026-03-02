import { eventManager } from './event-manager';

// 컴포넌트 밖에서도 호출 가능한 일반 함수
export const toast = (message: string) => {
    eventManager.emit(message);
};
