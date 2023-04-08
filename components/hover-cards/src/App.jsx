import './App.scss'
import {useEffect} from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'

function App() {
    // https://fontawesome.com/docs/web/style/duotone

    useEffect(() => {
        document.getElementById("cards").onmousemove = e => {
            for (const card of document.getElementsByClassName("card")) {
                const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        }
    }, []);

    return (
        <>
            <div id="cards">
                <div className="card">
                    <div className="card-content">
                        <div className="card-image">
                            <FontAwesomeIcon icon={faHome} style={{ "--fa-primary-color": "#ffffff", "--fa-secondary-color": "#000000" }} />
                        </div>
                        <div className="card-info-wrapper">
                            <div className="card-info">
                                <FontAwesomeIcon icon={faHome}/>
                                <div className="card-info-title">
                                    <h3>Apartments</h3>
                                    <h4>Places to be apart. Wait, what?</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-image">
                            <i className="fa-duotone fa-unicorn"></i>
                        </div>
                        <div className="card-info-wrapper">
                            <div className="card-info">
                                <i className="fa-duotone fa-unicorn"></i>
                                <div className="card-info-title">
                                    <h3>Unicorns</h3>
                                    <h4>A single corn. Er, I mean horn.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-image">
                            <i className="fa-duotone fa-blender-phone"></i>
                        </div>
                        <div className="card-info-wrapper">
                            <div className="card-info">
                                <i className="fa-duotone fa-blender-phone"></i>
                                <div className="card-info-title">
                                    <h3>Blender Phones</h3>
                                    <h4>These absolutely deserve to exist.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-image">
                            <i className="fa-duotone fa-person-to-portal"></i>
                        </div>
                        <div className="card-info-wrapper">
                            <div className="card-info">
                                <i className="fa-duotone fa-person-to-portal"></i>
                                <div className="card-info-title">
                                    <h3>Adios</h3>
                                    <h4>See you...</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-image">
                            <i className="fa-duotone fa-person-from-portal"></i>
                        </div>
                        <div className="card-info-wrapper">
                            <div className="card-info">
                                <i className="fa-duotone fa-person-from-portal"></i>
                                <div className="card-info-title">
                                    <h3>I mean hello</h3>
                                    <h4>...over here.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-image">
                            <i className="fa-duotone fa-otter"></i>
                        </div>
                        <div className="card-info-wrapper">
                            <div className="card-info">
                                <i className="fa-duotone fa-otter"></i>
                                <div className="card-info-title">
                                    <h3>Otters</h3>
                                    <h4>Look at me, imma cute lil fella.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a id="source-link" className="link" href="https://linear.app/features" target="_blank">
                <i className="fa-solid fa-link"></i>
                <span className="roboto-mono">Source</span>
            </a>

            <a id="youtube-link" className="link" href="https://youtu.be/htGfnF1zN4g" target="_blank">
                <i className="fa-brands fa-youtube"></i>
                <span>5 min Tutorial</span>
            </a>
        </>
    )
}

export default App;
