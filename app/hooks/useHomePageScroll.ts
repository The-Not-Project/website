// import { useState, useEffect } from 'react';

// type HomePageScrollState = {
//   transparency: boolean;
//   backgroundPosition: number;
//   overlayShrink: boolean;
// };

// export default function useHomePageScroll(radarRef: React.RefObject<HTMLDivElement>): HomePageScrollState {
//   const [state, setState] = useState<HomePageScrollState>({
//     transparency: true,
//     backgroundPosition: 0,
//     overlayShrink: false,
//   });

//   useEffect(() => {
//     function handleScroll() {
//       const offset = window.scrollY * 0.5;
//       const newTransparency = window.scrollY <= 50;

//       if (!radarRef.current) return;

//       const { top, bottom, height } = radarRef.current.getBoundingClientRect();
//       // Determine if 90% of the element is visible
//       const elementVisibleHeight = height * 0.9;
//       const isVisible = top + elementVisibleHeight <= window.innerHeight && bottom >= 0;

//       setState({
//         transparency: newTransparency,
//         backgroundPosition: offset,
//         overlayShrink: isVisible,
//       });
//     }

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [radarRef]);

//   return state;
// }
