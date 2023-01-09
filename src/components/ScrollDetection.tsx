import {useState, useEffect} from "react";

const ScrollDetection = ({children}:{children:any}) => {
  const [scrollDir, setScrollDir] = useState("scrolling down");
  const [inMotion, setInMotion] = useState("")

  useEffect(() => {
    // courtesy of https://stackoverflow.com/questions/62497110/detect-scroll-direction-in-react-js

    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling-down" : "scrolling-up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
        if (scrollY > 50) {
          setInMotion("in-motion")
        } else {
          setInMotion("")
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return (
    <div className={`scrollDetector ${scrollDir} ${inMotion}`}>
      {children}
    </div>
  )
}

export default ScrollDetection