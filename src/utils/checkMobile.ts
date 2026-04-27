import { useEffect, useState } from "react"

export const checkMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    const checkIsMobile = () => {
        if(window.innerWidth <= 1200){
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }
    useEffect(()=>{
        window.addEventListener('resize', checkIsMobile);
        checkIsMobile();
    },[]);
  return {
    isMobile
  }
}
