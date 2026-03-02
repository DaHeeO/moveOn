import { useEffect, useState } from 'react';
import { eventManager } from '../core/event-manager';

export const useToastContainer = () => {
    const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);

    useEffect(() => {
        // useEffect는 첫 앱 렌더링 될때만 실행된다.
        // 하지만 eventManger에 message를 인수로 두고 밑에 있는 모든 함수를 넘겨준다.
        const unsubscribe = eventManager.subscribe((message) => {
            const id = Date.now();
            setToasts((prev) => [...prev, { id, message }]);

            setTimeout(() => {
                setToasts((prev) => {
                    const nextToasts = prev.filter((t) => t.id !== id);
                    return nextToasts; // 새 배열이 반환되면서 리렌더링 유발
                });
            }, 3000);
        });

        // ToastContainer가 사라지기 전에는 unsubscribe() 사실 eventManger의 리턴값 delete가 작동되지 않는다.
        // 그래서 계속 구독을 할 수 있는거다.
        return () => {
            unsubscribe();
        };
    }, []);

    return { toasts };
};
