// app/admin/components/NavBar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavBarContainer } from './navbar.styles';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <NavBarContainer>
      <ul>
        <li>
          <Link
            className={pathname === '/admin/personal-info' ? 'active' : ''}
            href='/admin/personal-info'
            title='Personal Info'
          >
            Personal Info
          </Link>
        </li>
        <li>
          <Link
            className={pathname === '/admin/categories' ? 'active' : ''}
            href='/admin/categories'
            title='Categories'
          >
            Categories
          </Link>
        </li>
        <li>
          <Link
            className={pathname === '/admin/stories' ? 'active' : ''}
            href='/admin/stories'
            title='Stories'
          >
            Stories
          </Link>
        </li>
      </ul>
    </NavBarContainer>
  );
}
