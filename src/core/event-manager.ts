type ToastEvent = (message: string) => void;

class EventManager {
    private listeners: Set<ToastEvent> = new Set();

    // 신호를 기다리는 함수 (Container가 사용)
    subscribe(listeners: ToastEvent) {
        this.listeners.add(listeners);
        // 이건 unmount가 되기 전까지는 불리지 않아서 listeners가 계속 호출될수 있는거래
        return () => this.listeners.delete(listeners);
    }

    // 신호를 보내는 함수 (toast 함수가 사용)
    emit(message: string) {
        // 여기서 listeners는 subscribe에서 구독하고 있는 함수가 동작되는거
        // 그 함수는 use-toast-container에 있는 useEffect 안에 있는 로직이 저장되어있음
        // 그러면서 setState도 저장되어있어서 use-toast-container에 있는 상태가 변화하게 됨
        // 그러면서 리렌더링이 되면서 toasts가 바뀌니깐 ToastContainer도 바뀌어서 리렌더링 될수 있는거다
        this.listeners.forEach((listeners) => listeners(message));
    }
}

export const eventManager = new EventManager();
