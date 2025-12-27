import { useState } from 'react';
import ModalPortal from '../components/common/ModalPortal';

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    const ModalWrapper = ({ children }: { children: React.ReactNode }) =>
        isOpen ? <ModalPortal>{children}</ModalPortal> : null;

    return { isOpen, open, close, ModalWrapper };
};
