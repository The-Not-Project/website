// 'use client';

// import { useEffect, useState } from 'react';
// import { useUser } from '@auth0/nextjs-auth0/client';
// import NavBar from './navbar.component';

// export default function NavBarWrapper() {
//   const { user } = useUser();
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     if (!user) return;

//     fetch('/api/auth/is-admin')
//       .then(res => res.json())
//       .then(data => setIsAdmin(data.isAdmin))
//       .catch(() => setIsAdmin(false));
//   }, [user]);

//   return <NavBar authenticated={!!user} isAdmin={isAdmin} />;
// }
