import { useToastContainer } from '../../hooks/use-toast-container';
import { Toast } from './Toast';
import './Toast.css';

export const ToastContainer = () => {
    const { toasts } = useToastContainer();

    return (
        <div className="toast-container">
            {toasts.map((t) => (
                <Toast key={t.id} message={t.message} />
            ))}
        </div>
    );
};
