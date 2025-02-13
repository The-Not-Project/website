// components/popup/popup.component.tsx
'use client';

import { ReactNode } from 'react';
import { PopupContainer, Popup as StyledPopup } from './popup.styles';

export default function Popup({ children, onClose }: { children: ReactNode; onClose?: () => void }) {
  return (
    <PopupContainer onClick={onClose}>
      <StyledPopup onClick={(e) => e.stopPropagation()}>{children}</StyledPopup>
    </PopupContainer>
  );
}