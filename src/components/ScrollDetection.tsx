import React, {useState, useEffect} from "react";

const ScrollDetection = () => {
  const [scrollDir, setScrollDir] = useState("scrolling down");

  useEffect(() => {
    // courtesy of https://stackoverflow.com/questions/62497110/detect-scroll-direction-in-react-js
    
    console.log('test')

    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    console.log(scrollDir);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return (
    <div>Scroll Detection</div>
  )
}

export default ScrollDetection