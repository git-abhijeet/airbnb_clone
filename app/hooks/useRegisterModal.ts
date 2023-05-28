import { create } from "zustand";

interface RegisterModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useRegisterModal = create<RegisterModalStore>((set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    // onOpen: () => {
    //     console.log("Modal opened"); // Add this console.log statement
    //     set({ isOpen: true });
    // },
    onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;