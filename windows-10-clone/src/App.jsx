import './App.css'

function App() {
    // https://codepen.io/gcazin/details/bKbMQW

    return (
        <>
            {/* Taskbar */}
            <div className="taskbar">
                <div className="icons">
                    <div className="icons-left">
                        <a href="#start-menu-modal" id="start-menu"><i className="fab fa-windows"></i></a>
                        <a href="#search" id="search"></a>
                        <a href="#tabs" id="tabs-windows"></a>
                        <a href="#" className="px"></a>
                        <a href="#folder" id="folder" className="border"></a>
                        <a href="#chrome-pop-up" id="chrome" className="border"></a>
                    </div>
                    <div className="icons-right">
                        <a href="#up" id="up" className="small-icons"><i className="fas fa-chevron-up"></i></a>
                        <a href="#sound-modal" id="sound" className="small-icons"></a>
                        <a href="#wifi-modal" id="wifi" className="small-icons"></a>
                        <div className="datetime">
                            <span className="hour">17:44</span>
                            <span className="date">25/11/2022</span>
                        </div>
                        <a href="#notifications" id="notifications"><i className="far fa-bell"></i></a>
                        <a href="#" className="clear disabled"></a>
                        <a href="#" id="return"></a>
                    </div>
                </div>
            </div>

            {/* Desktop */}
            <div className="desktop">
                {/*Icons on the desktop*/}
                <div className="icons-dekstop">
                    <div className="icon-desktop">
                        <a href="#chrome-pop-up">
                            <img src="https://raw.githubusercontent.com/gcazin/pure-css-windows-10-desktop/master/icons/chrome.png" alt=""/>
                                <span>Chrome</span>
                        </a>
                    </div>
                    <div className="icon-desktop">
                        <a href="#">
                            <img src="https://raw.githubusercontent.com/gcazin/pure-css-windows-10-desktop/master/icons/code.png" alt=""/>
                                <span>Code</span>
                        </a>
                    </div>
                    <div className="icon-desktop">
                        <a href="#"><img src="https://raw.githubusercontent.com/gcazin/pure-css-windows-10-desktop/master/icons/file-explorer.png" alt=""/><span>File Explorer</span></a>
                    </div>
                    <div className="icon-desktop">
                        <a href="#"><img src="https://raw.githubusercontent.com/gcazin/pure-css-windows-10-desktop/master/icons/word.png" alt=""/><span>Recycle bin</span></a>
                    </div>
                </div>

                {/* Speakers */}
                <div id="sound-modal">
                    <div className="sound-text">
                        <span>Speakers</span>
                    </div>
                    <div className="sound-progress">
                        <i className="fas fa-volume-up"></i>
                        <div className="bar-sound"></div>
                        <div className="bar-sound-drag"></div>
                        <span className="data-value">50%</span>
                    </div>
                </div>

                {/* Wifi */}
                <div id="wifi-modal">
                    <div className="list-networks">
                        <div className="networks">
                            <div className="icons-wifi">
                                <i className="fas fa-wifi"></i>
                            </div>
                            <div className="text-wifi">
                                <span className="name-wifi">Wifi</span>
                                <span className="type-wifi">Connected, securised</span>
                                <span className="propriety">Propriety</span>
                                <button>Disconnect</button>
                            </div>
                        </div>
                        <div className="networks">
                            <div className="icons-wifi">
                                <i className="fas fa-wifi"></i>
                            </div>
                            <span className="name-wifi">Wifi</span>
                            <span className="type-wifi">Open</span>
                        </div>
                        <div className="networks">
                            <div className="icons-wifi">
                                <i className="fas fa-wifi"></i>
                            </div>
                            <span className="name-wifi">Wifi</span>
                            <span className="type-wifi">Open</span>
                        </div>
                        <div className="options-wifi">
                            <div className="options-wifi-text">
                                <span>Options internet & security</span>
                                <span>Modify options, for a better connection</span>
                            </div>
                            <div className="options-bloc">
                                <div className="bloc-options">
                                    <i className="fas fa-wifi"></i>
                                    <span>Wifi</span>
                                </div>
                                <div className="bloc-options">
                                    <i className="fas fa-plane"></i>
                                    <span>Plane mode</span>
                                </div>
                                <div className="bloc-options">
                                    <i className="fab fa-bluetooth-b"></i>
                                    <span>Bluetooth</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Chrome */}
            <div className="chrome" id="chrome-pop-up">
                <div className="pop-up">
                    {/* Taskbar Chrome */}
                    {/* Top */}
                    <div className="chrome-top">
                        <div className="chrome-tabs">
                            <div className="triangle"></div>
                            <div className="tabs">
                        <span className="icons-tabs">
                            <i className="fab fa-codepen"></i>
                        </span>
                                <span className="text-tabs">CodePen</span>
                                <span className="close-tabs">x</span>
                            </div>
                            <div className="triangle-2"></div>
                            <div className="new-tabs"></div>
                        </div>
                        <div className="chrome-close">
                            <a href="#"><i className="fas fa-minus"></i></a>
                            <a href="#"><i className="far fa-window-restore"></i></a>
                            <a href="#"><i className="fas fa-times"></i></a>
                        </div>
                    </div>
                    {/* Bottom */}
                    <div className="chrome-bottom">
                        <div className="options-bar">
                            <div className="icons-bar">
                                <div className="arrows">
                                    <a href="#"><i className="fas fa-arrow-left"></i></a>
                                    <a href="#"><i className="fas fa-arrow-right"></i></a>
                                    <a href="#"><i className="fas fa-sync"></i></a>
                                </div>
                                <div className="search-bar">
                                    <span className="info"><i className="fas fa-lock"></i> Securised</span>
                                    <input type="text" value="https://codepen.io/gcazin"/>
                                        <span className="star"><i className="far fa-star"></i></span>
                                </div>
                                <div className="points-bar">
                                    <div className="points">
                                        <span>•</span>
                                        <span>•</span>
                                        <span>•</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bookmarks">
                                <div className="folder-book">
                                    <a target="_blank" href="https://purecss.io/"><span>P</span> Pure</a>
                                </div>
                                <div className="folder-book">
                                    <a target="_blank" href="https://developer.mozilla.org/fr/docs/Web/CSS"><i className="fab fa-css3-alt"></i> CSS</a>
                                </div>
                                <div className="folder-book">
                                    <a target="_blank" href="https://www.microsoft.com/fr-fr/windows"><i className="fab fa-windows"></i> Windows 10</a>
                                </div>
                            </div>
                        </div>
                    {/*  Bookmarks  */}
                    </div>
                    <iframe src="https://codepen.io/gcazin" frameBorder="0" width="895px" height="404px"></iframe>
                </div>
            </div>

            {/* Start menu */}
            <div id="start-menu-modal">
                <div id="user">
                    <a className="push" href="#"><i className="fas fa-bars"></i></a>
                    <a href="#"><i className="fas fa-user"></i></a>
                    <a href="#"><i className="fas fa-cog"></i></a>
                    <a href="#"><i className="fas fa-power-off"></i></a>
                </div>
                <div id="apps">
                    <a className="category" href="#">&</a>
                    <a href="#"><img src="https://raw.githubusercontent.com/gcazin/pure-css-windows-10-desktop/master/icons/access.png" alt="access"/> <span>Access</span></a>
                    <a href="#"><img src="https://raw.githubusercontent.com/gcazin/pure-css-windows-10-desktop/master/icons/sublime-text.png" alt="sublime"/> <span>Sublime text 3</span></a>
                </div>
                <div id="others">
                    <div className="title-others">
                        Office 365
                    </div>
                    <div className="box-others">
                        <div className="box">
                            <img src="https://raw.githubusercontent.com/gcazin/pure-css-windows-10-desktop/master/icons/word.png" alt=""/>
                                <span>Word</span>
                        </div>
                        <div className="box">
                            <img src="https://raw.githubusercontent.com/gcazin/pure-css-windows-10-desktop/master/icons/excel.png" alt=""/>
                                <span>Excel</span>
                        </div>
                        <div className="box">
                            <img src="https://raw.githubusercontent.com/gcazin/pure-css-windows-10-desktop/master/icons/powerpoint.png" alt=""/>
                                <span>Powerpoint</span>
                        </div>
                        <div className="box">
                            <img src="https://raw.githubusercontent.com/gcazin/pure-css-windows-10-desktop/master/icons/outlook.png" alt=""/>
                                <span>Outlook</span>
                        </div>
                        <div className="box">
                            <img src="https://raw.githubusercontent.com/gcazin/pure-css-windows-10-desktop/master/icons/publisher.png" alt=""/>
                                <span>Publisher</span>
                        </div>
                        <div className="box">
                            <img src="https://raw.githubusercontent.com/gcazin/pure-css-windows-10-desktop/master/icons/onenote.png" alt=""/>
                                <span>OneNote</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
