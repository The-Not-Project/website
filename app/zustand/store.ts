import { create } from 'zustand';

type LayoutState = {
  mobileLayout: {
    isMenuOpen: boolean;
    isMobile: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    setIsMobile: (isMobile: boolean) => void;
  };
};

export const useStore = create<LayoutState>((set) => ({
  mobileLayout: {
    isMenuOpen: false,
    isMobile: false,
    setIsMenuOpen: (isOpen: boolean) =>
      set((state) => ({
        mobileLayout: { ...state.mobileLayout, isMenuOpen: isOpen },
      })),
    setIsMobile: (isMobile: boolean) =>
      set((state) => ({
        mobileLayout: { ...state.mobileLayout, isMobile },
      })),
  },
}));
