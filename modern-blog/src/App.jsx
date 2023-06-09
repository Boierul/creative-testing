import './App.scss'

function App() {
    // https://codepen.io/TurkAysenur/pen/gOmMgpx

    return (
        <>
            <div className="blog">
                <div className="blog-part is-menu">
                    <a href="#" className="blog-menu">
                        Work
                        <svg fill="none" stroke="currentColor" strokeWidth=".7" strokeLinecap="round"
                             strokeLinejoin="round" className="feather feather-arrow-up-right" viewBox="0 0 24 24">
                            <path d="M7 17L17 7M7 7h10v10"/>
                        </svg>
                    </a>
                    <a href="#" className="blog-menu">Studio</a>
                    <a href="#" className="blog-menu">Blog</a>
                    <a href="#" className="blog-menu">Contact</a>
                    <a href="#" className="blog-menu mention">@MagazineDope</a>
                    <a href="#" className="blog-menu subscribe">Subscribe</a>
                </div>
                <div className="blog-header blog-is-sticky">
                    <div className="blog-article header-article">
                        <div className="blog-big__title">Self</div>
                        <div className="blog-menu rounded small-title">Pinned Issue</div>
                    </div>
                    <div className="blog-article page-number">
                        NO. 01
                    </div>
                </div>
                <div className="blog-header-container">
                    <div className="blog-header">
                        <div className="blog-article header-article">
                            <div className="blog-big__title">Esteem</div>
                            <div className="blog-menu small-title date">12.06.2021</div>
                        </div>
                        <div className="blog-article">
                            <img
                                src="https://images.unsplash.com/photo-1496629062893-b0f566065d44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt=""/>
                                <h2>Sharing The <span>Widespread</span> Acclaim About Motivation</h2>
                                <div className="blog-detail">
                                    <span>By Richard Carnation</span>
                                    <span>5 Min Read</span>
                                </div>
                                <p>Blonde received widespread acclaim, with critics praising Ocean's introspective
                                    lyrics and the album's unconventional</p>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                         className="feather feather-corner-down-right" viewBox="0 0 24 24">
                                        <path d="M15 10l5 5-5 5"/>
                                        <path d="M4 4v7a4 4 0 004 4h12"/>
                                    </svg>
                                    See More
                                </a>
                        </div>
                    </div>
                    <div className="blog-header">
                        <div className="blog-article header-article">
                            <div className="blog-big__title">Love</div>
                            <div className="blog-menu small-title date">12.06.2021</div>
                        </div>
                        <div className="blog-article">
                            <img
                                src="https://images.unsplash.com/photo-1529255484355-cb73c33c04bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt=""/>
                                <h2>Talking About <span>Vulnerability</span> During Quarantine</h2>
                                <div className="blog-detail">
                                    <span>By Tom Hiddleston</span>
                                    <span>5 Min Read</span>
                                </div>
                                <p>Having traveled to Turkey multiple times, with critics praising Ocean's introspective
                                    lyrics and the album's unconventional</p>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                         className="feather feather-corner-down-right" viewBox="0 0 24 24">
                                        <path d="M15 10l5 5-5 5"/>
                                        <path d="M4 4v7a4 4 0 004 4h12"/>
                                    </svg>
                                    See More
                                </a>
                        </div>
                    </div>
                    <div className="blog-header">
                        <div className="blog-article header-article">
                            <div className="blog-big__title">Control</div>
                            <div className="blog-menu small-title date">12.06.2021</div>
                        </div>
                        <div className="blog-article">
                            <img
                                src="https://images.unsplash.com/photo-1616248249518-b16013cd4e42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkzfHxibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt=""/>
                                <h2>How 2020 Changed <span>Understanding</span> Of Mental Health</h2>
                                <div className="blog-detail">
                                    <span>By Scarlett Witch</span>
                                    <span>5 Min Read</span>
                                </div>
                                <p>Time is defines ad the indefinete continued progress, with critics praising Ocean's
                                    introspective lyrics and the album's</p>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                         className="feather feather-corner-down-right" viewBox="0 0 24 24">
                                        <path d="M15 10l5 5-5 5"/>
                                        <path d="M4 4v7a4 4 0 004 4h12"/>
                                    </svg>
                                    See More
                                </a>
                        </div>
                    </div>
                </div>
                <div className="blog-part right-blog">
                    <marquee width="100%" direction="left">
                        <span>Now And Then You Miss It Sounds Make You Cry</span>
                        <span>Now In - MoMa Sharing Exhibition NOW</span>
                        <span>NYC Opens After Long Lockdown Check</span>
                    </marquee>
                    <div className="blog-right-title-container">
                        <div className="blog-right-title">
                            Featured Articles
                        </div>
                        <div className="blog-menu rounded">See All</div>
                    </div>
                    <div className="blog-right">
                        <div className="blog-right-container">
                            <div className="blog-title-date">
                                <div className="blog-right-page">1</div>
                                <div className="date">12.06.2021</div>
                            </div>
                            <div className="blog-right-page-title">Blonde - Widespread Acclaim</div>
                            <div className="blog-right-page-subtitle">Blonde received widespread acclaim, with critics
                                praising Ocean's introspective lyrics and the album's
                            </div>
                        </div>
                        <div className="blog-right-container">
                            <div className="blog-title-date">
                                <div className="blog-right-page">2</div>
                                <div className="date">12.06.2021</div>
                            </div>
                            <div className="blog-right-page-title">Introspective Lyrics and Beats</div>
                            <div className="blog-right-page-subtitle">When we toured Scotland we stopped at several
                                selft-sealing hpuses because hotels would
                            </div>
                        </div>
                        <div className="blog-right-container">
                            <div className="blog-title-date">
                                <div className="blog-right-page">3</div>
                                <div className="date">12.06.2021</div>
                            </div>
                            <div className="blog-right-page-title">The Language Of Gris: Comples Beauty Of Monochrome
                            </div>
                            <div className="blog-right-page-subtitle">The interior concept was conceived of by Dutch
                                archtitect Studio Anne Holtrop who cleverly emulated
                            </div>
                        </div>
                        <div className="blog-right-container">
                            <div className="blog-title-date">
                                <div className="blog-right-page">4</div>
                                <div className="date">12.06.2021</div>
                            </div>
                            <div className="blog-right-page-title">A24 IS LAUNCHING ITS OWN BEAUTY BRAND</div>
                            <div className="blog-right-page-subtitle">Blonde received widespread acclaim, with critics
                                praising Ocean's introspective lyrics and the album's
                            </div>
                        </div>
                        <div className="blog-right-container">
                            <div className="blog-title-date">
                                <div className="blog-right-page">5</div>
                                <div className="date">12.06.2021</div>
                            </div>
                            <div className="blog-right-page-title">Elon Musk's SpaceX is launching a moon satellite
                            </div>
                            <div className="blog-right-page-subtitle">The interior concept was conceived of by Dutch
                                archtitect Studio Anne Holtrop who cleverly emulated
                            </div>
                        </div>
                        <div className="blog-right-container">
                            <div className="blog-title-date">
                                <div className="blog-right-page">6</div>
                                <div className="date">12.06.2021</div>
                            </div>
                            <div className="blog-right-page-title">What Happens When You Leave Your Old life Behind
                            </div>
                            <div className="blog-right-page-subtitle">The interior concept was conceived of by Dutch
                                archtitect Studio Anne Holtrop who cleverly emulated
                            </div>
                        </div>
                        <div className="circle">
                            <div className="circle-title">Leave Your Old Life Behind</div>
                            <div className="circle-subtitle">Don't try to be like someone else, be yourself. Be secure
                                with yourself.
                            </div>
                            <div className="circle-footer">Explore</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
