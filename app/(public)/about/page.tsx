'use client'

import { useEffect } from "react";
import { Title } from "./styles";
import { useStore } from "@/app/zustand/store";
import clsx from "clsx";



export default function About() {

      const setIsMobile = useStore((state) => state.mobileLayout.setIsMobile);
      const isMenuOpen = useStore((state) => state.mobileLayout.isMenuOpen);

      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 600)
        };
    
        handleResize();
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    return(
        <div  className={clsx('page-wrapper', { shifted: isMenuOpen })}>
        <Title>Website still under construction, coming end of May</Title>
        
        </div>

    )
}