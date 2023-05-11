import './App.scss'

function App() {
    // https://codepen.io/enneking/pen/abwxOMp

    return (
        <>
            <div id="container-main">

                <div id="container-left">
                    <div className="container-nav">
                        <h6 className="nav-1">
                            Home
                        </h6>
                        <h6 className="nav-2">
                            <br/>
                                Page_1
                        </h6>
                        <h6 className="nav-3">
                            <br/>
                                <br/>
                                    <br/>
                                        <a target="_blank" href="https://juliusenneking.com">
                                            Credits
                                        </a>
                        </h6>
                    </div>
                </div>

                <div id="container-middle-1">
                    <h6 className="txt-middle">No news<br/>no updates<br/>cool</h6>
                </div>

                <div id="container-middle-2">
                    <div className="filter"></div>
                </div>

                <div id="container-right">
                    <div className="container-gif-1"></div>
                    <div className="container-gif-2"></div>
                </div>

            </div>
        </>
    )
}

export default App;
