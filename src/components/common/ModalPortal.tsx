import { createPortal } from 'react-dom';

const ModalPortal = ({ children }: { children: React.ReactNode }) => {
    const el = document.getElementById('modal-root');
    return el ? createPortal(children, el) : null;
};

export default ModalPortal;
