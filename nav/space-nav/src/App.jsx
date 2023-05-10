import './App.css'
import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // import the FontAwesomeIcon component
import { faPlus } from '@fortawesome/free-solid-svg-icons'; // import the individual icons you need


function App() {
    // https://codepen.io/Hyperplexed/pen/ZErorNd
    // https://www.awwwards.com/inspiration/star-atlas-menu

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    return (
        <>
            <div id="menu" className={isMenuOpen ? 'menu-toggled' : ''}>
                <button type="button" id="menu-toggle" onClick={toggleMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <div id="menu-toggle-label">
                        <span className="word">SPACE</span>
                        <span className="word">SALAD</span>
                    </div>
                </button>
                <div id="menu-gradient"></div>
                <div id="menu-gradient-blur"></div>
                <div id="menu-arcs-wrapper">
                    <svg id="menu-arcs">
                        <circle className="menu-arc" cx="50%" cy="50%" r="18%"></circle>
                        <circle className="menu-arc" cx="50%" cy="50%" r="30%"></circle>
                        <circle className="menu-arc" cx="50%" cy="50%" r="42%"></circle>
                    </svg>
                </div>
                <div id="menu-links">
                    <a className="link" href="https://www.youtube.com/c/Hyperplexed" target="_blank">
                        <span className="anchor"></span>
                        <span className="index">01</span>
                        <span className="label">Space</span>
                    </a>
                    <a className="link" href="https://www.youtube.com/c/Hyperplexed" target="_blank">
                        <span className="anchor"></span>
                        <span className="index">02</span>
                        <span className="label">Planet</span>
                    </a>
                    <a className="link" href="https://www.youtube.com/c/Hyperplexed" target="_blank">
                        <span className="anchor"></span>
                        <span className="index">03</span>
                        <span className="label">Satellite</span>
                    </a>
                    <a className="link" href="https://www.youtube.com/c/Hyperplexed" target="_blank">
                        <span className="anchor"></span>
                        <span className="index">04</span>
                        <span className="label">Asteroid</span>
                    </a>
                </div>
            </div>

            <div id="content">
                {/*<i className="fa-solid fa-planet-ringed"></i>*/}
                {/*<i className="fa-solid fa-plus"></i>*/}
                {/*<i className="fa-solid fa-salad"></i>*/}
                {/*<FontAwesomeIcon icon={faPlanetRinged} />*/}
                <FontAwesomeIcon icon={faPlus} />
                {/*<FontAwesomeIcon icon={faSalad} />*/}
            </div>

            <a id="source-link" className="meta-link" href="https://www.awwwards.com/inspiration/star-atlas-menu"
               target="_blank">
                <i className="fa-solid fa-link"></i>
                <span>Source</span>
            </a>
        </>
    )
}

export default App;
