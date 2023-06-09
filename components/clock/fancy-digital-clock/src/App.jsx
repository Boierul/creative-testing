import './App.scss'
import {useEffect, useRef, useState} from "react";
import classNames from "classnames";

function App() {
    const TimerChar = (props) => {
        const ref = useRef(null);

        const colon = props.char === ":";

        if (colon) {
            return (
                <h1 className="timer-char colon">:</h1>
            );
        }

        const number = parseInt(props.char);

        const getCharSlider = () => {
            let options = [];

            for (let i = 0; i <= 9; i++) {
                const classes = classNames(
                    "timer-char-slider-option", {
                        active: number === i
                    });

                options.push(<span key={i} className={classes}>{i}</span>);
            }

            const height = ref.current ? ref.current.offsetHeight : 0,
                top = `${number * height * -1}px`;

            return (
                <div className="timer-char-slider" style={{top}}>{options}</div>
            );
        }

        return (
            <div ref={ref} className="timer-char number">{getCharSlider()}</div>
        )
    }

    const Timer = () => {
        const [date, setDateTo] = useState(new Date());

        useEffect(() => {
            const interval = setInterval(() => {
                const update = new Date();

                if (update.getSeconds() !== date.getSeconds()) {
                    setDateTo(update);
                }
            }, 100);

            return () => {
                clearInterval(interval);
            }
        }, [date]);

        const formatSegment = (segment) => {
            return segment < 10 ? `0${segment}` : segment;
        }

        const getHours = (hours) => {
            return hours % 12 === 0 ? 12 : hours % 12;
        }

        const getTime = () => {
            const hours = getHours(date.getHours()),
                minutes = date.getMinutes(),
                seconds = date.getSeconds();

            return `${formatSegment(hours)}:${formatSegment(minutes)}:${formatSegment(seconds)}`;
        }

        const getChars = () => {
            return getTime().split("").map((char, index) => (
                <TimerChar key={index} char={char}/>
            ));
        }

        return(
            <div id="timer">
                <div id="timer-text">{getChars()}</div>
            </div>)
    }

    return (
        <>
            <div id="root">
                <div id="app">
                    <Timer />
                </div>
            </div>
        </>
    )
}

export default App;
