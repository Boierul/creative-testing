import './App.css'

import React, { useEffect, useState } from 'react';

function App() {

    const [time, setTime] = useState({ a: [], b: [] });
    const [rollClass, setRollClass] = useState("clock__block--bounce");
    const [digitsTimeout, setDigitsTimeout] = useState(null);
    const [rollTimeout, setRollTimeout] = useState(null);
    const [mod, setMod] = useState(0 * 60 * 1000);

    const updateTime = () => {
        const rawDate = new Date();
        const date = new Date(Math.ceil(rawDate.getTime() / 1e3) * 1e3 + mod);
        let h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();
        const ap = h < 12 ? "AM" : "PM";

        if (h === 0) h = 12;
        if (h > 12) h -= 12;

        setTime(prevState => ({
            a: [...prevState.b],
            b: [
                (h < 10 ? `0${h}` : `${h}`),
                (m < 10 ? `0${m}` : `${m}`),
                (s < 10 ? `0${s}` : `${s}`),
                ap
            ]
        }));
    }

    const animateDigits = () => {
        const groups = document.querySelectorAll("[data-time-group]");

        Array.from(groups).forEach((group, i) => {
            const { a, b } = time;

            if (a[i] !== b[i]) group.classList.add(rollClass);
        });

        clearTimeout(rollTimeout);
        setRollTimeout(setTimeout(removeAnimations, 900));
    }

    const displayTime = () => {
        // screen reader time
        const timeDigits = [...time.b];
        const ap = timeDigits.pop();

        document.querySelector('.clock').ariaLabel = `${timeDigits.join(":")} ${ap}`;

        // displayed time
        Object.keys(time).forEach(letter => {
            const letterEls = document.querySelectorAll(`[data-time="${letter}"]`);

            Array.from(letterEls).forEach((el, i) => {
                el.textContent = time[letter][i];
            });
        });
    }

    const loop = () => {
        updateTime();
        displayTime();
        animateDigits();
        tick();
    }

    const removeAnimations = () => {
        const groups = document.querySelectorAll("[data-time-group]");

        Array.from(groups).forEach(group => {
            group.classList.remove(rollClass);
        });
    }

    const tick = () => {
        clearTimeout(digitsTimeout);
        setDigitsTimeout(setTimeout(loop, 1e3));
    }

    useEffect(() => {
        loop();
        return () => {
            clearTimeout(digitsTimeout);
            clearTimeout(rollTimeout);
        }
    });

    return (
        <>
            <div className="clock" aria-label="00:00:00 AM">
                <div className="clock__block clock__block--delay2" aria-hidden="true" data-time-group>
                    <div className="clock__digit-group">
                        <div className="clock__digits" data-time="a">00</div>
                        <div className="clock__digits" data-time="b">00</div>
                    </div>
                </div>
                <div className="clock__colon"></div>
                <div className="clock__block clock__block--delay1" aria-hidden="true" data-time-group>
                    <div className="clock__digit-group">
                        <div className="clock__digits" data-time="a">00</div>
                        <div className="clock__digits" data-time="b">00</div>
                    </div>
                </div>
                <div className="clock__colon"></div>
                <div className="clock__block" aria-hidden="true" data-time-group>
                    <div className="clock__digit-group">
                        <div className="clock__digits" data-time="a">00</div>
                        <div className="clock__digits" data-time="b">00</div>
                    </div>
                </div>
                <div className="clock__block clock__block--delay2 clock__block--small" aria-hidden="true"
                     data-time-group>
                    <div className="clock__digit-group">
                        <div className="clock__digits" data-time="a">PM</div>
                        <div className="clock__digits" data-time="b">AM</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
