import './App.css'

import React, { useState, useEffect, useRef } from 'react';

function App() {
    // https://codepen.io/narrowdesign/pen/JNVyJb

    const [rotation, setRotation] = useState(0);
    const [currentSection, setCurrentSection] = useState(0);
    const [moved, setMoved] = useState(0);
    const [sectionCount, setSectionCount] = useState(0);
    const [smallScreen, setSmallScreen] = useState(false);
    const [landscape, setLandscape] = useState(false);
    const [spiralOrigin, setSpiralOrigin] = useState('');
    const [winW, setWinW] = useState(window.innerWidth);
    const [winH, setWinH] = useState(window.innerHeight);
    const [animating, setAnimating] = useState(false);
    const [touchStartY, setTouchStartY] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);

    const spiralRef = useRef(null);
    const sectionsRef = useRef([]);

    const aspect = 0.618033;
    const axis = 0.7237;
    const scrollTimeout = useRef(null);
    const animRAF = useRef(null);

    const userAgent = window.navigator.userAgent.toLowerCase();
    const firefox = userAgent.indexOf('firefox') !== -1 || userAgent.indexOf('mozilla') === -1;
    const ios = /iphone|ipod|ipad/.test(userAgent);
    const safari = (userAgent.indexOf('safari') !== -1 && userAgent.indexOf('chrome') === -1) || ios;
    const linux = userAgent.indexOf('linux') !== -1;
    const windows = userAgent.indexOf('windows') !== -1;

    function trimRotation() {
        return Math.round(rotation / 90) * 90;
    }

    function startScrollTimeout() {
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
            setMoved(0);
        }, 100);
    }

    function resizeHandler() {
        setWinW(window.innerWidth);
        setWinH(window.innerHeight);
        setSmallScreen(winW < 768);
        setLandscape(winW > winH);
        setSpiralOrigin(`${Math.floor(winW * axis)}px ${Math.floor(winW * aspect * axis)}px`);
    }

    function scrollHandler() {
        animRAF.current = requestAnimationFrame(() => {
            const scale = Math.pow(aspect, rotation / 90);
            setCurrentSection(Math.min(sectionCount + 2, Math.max(-sectionCount, Math.floor((rotation - 30) / -90))));
            if (spiralRef.current) {
                spiralRef.current.style.transform = `rotate(${rotation}deg) scale(${scale})`;
            }
            sectionsRef.current.forEach((section, i) => {
                if (section) {
                    if (i === currentSection) {
                        section.classList.add('active');
                    } else {
                        section.classList.remove('active');
                    }
                }
            });
        });
    }

    return (
        <>
            <div className="js-spiral">
                <div className="js-section">
                    <div className="message">
                        Scroll, Use Arrow Keys or Click<br/><br/>
                        <h2>I used this scrolling interface to create <a href="https://narrowdesign.com"
                                                                         target="_blank">narrowdesign.com</a>
                        </h2>
                    </div>
                </div>
                <div className="js-section">

                </div>
                <div className="js-section">

                </div>
                <div className="js-section">

                </div>
                <div className="js-section">

                </div>
                <div className="js-section">

                </div>
                <div className="js-section">

                </div>
                <div className="js-section">

                </div>
                <div className="js-section">

                </div>
                <div className="js-section">

                </div>
                <div className="js-section">

                </div>
                <div className="js-section">

                </div>
                <div className="js-section">

                </div>
                <div className="js-section">

                </div>
                <div className="js-section">

                </div>
            </div>
        </>
    )
}

export default App;
