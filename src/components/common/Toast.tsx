export const Toast = ({ message }: { message: string }) => {
    return (
        <div className="toast-wrapper">
            <div className="alert-icon-wrapper">
                <span className="exclamination-mark-toast">!</span>
            </div>
            <div className="toast-message">{message}</div>
        </div>
    );
};
