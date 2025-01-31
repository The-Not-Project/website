'use client';
import {
  Sidebar,
  SidebarContainer,
  CloseButton,
  SidebarList,
  SidebarListItem,
} from './sidebar.styles';
import BoroughsList from '../boroughsList/boroughsList.component';
import { FaXmark } from 'react-icons/fa6';

export default function Page() {
  return (
    <SidebarContainer>
      <Sidebar>
        <CloseButton>
          <FaXmark />
        </CloseButton>
        <SidebarList>
          <SidebarListItem>HOME</SidebarListItem>
          <SidebarListItem>BOROUGHS</SidebarListItem>
          <SidebarListItem>ABOUT US</SidebarListItem>
          <SidebarListItem>CONTACT</SidebarListItem>
        </SidebarList>
        <BoroughsList />
      </Sidebar>
    </SidebarContainer>
  );
}
