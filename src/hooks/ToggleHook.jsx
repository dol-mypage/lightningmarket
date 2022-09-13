import React from 'react'
import { useEffect, useState } from "react";
import throttle from "util/throttle";

    const useScrollToggle = (initState = false) => {
    const [scrollFlag, setScrollFlag] = useState(initState);
    
    const updateScroll = () => {
    const { scrollY } = window;
    scrollY > 10 ? setScrollFlag(true) : setScrollFlag(false);
    };
    const handleScroll = throttle(updateScroll, 100);

    useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    }, []);
    return scrollFlag;
    };

export default useScrollToggle;
