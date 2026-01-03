import { useCallback, useState } from 'react';
import ModalPortal from '../components/common/ModalPortal';

export const ModalWrapper = ({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) => {
    return isOpen ? <ModalPortal>{children}</ModalPortal> : null;
};

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);

    return { isOpen, open, close };
};
