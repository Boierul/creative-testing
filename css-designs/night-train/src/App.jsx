import './App.css'

function App() {
    // https://codepen.io/thelittleblacksmith/pen/jVLdEz

    return (
        <>
            <div className="container">
                <div className="moon"></div>
                <div className="cloud-container">
                    <div className="cloud"></div>
                    <div className="cloud"></div>
                    <div className="cloud"></div>
                    <div className="cloud"></div>
                    <div className="cloud"></div>
                </div>

                <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                </div>
                <div className="mountain"></div>
                <div className="train-container">
                    <div className="train">
                        <div className="train-car head-car">
                            <div className="windows">
                                <div className="head-car-window"></div>
                                <div className="w-left"></div>
                                <div className="w-right"></div>
                            </div>
                            <div className="door"></div>
                        </div>

                        <div className="train-car">
                            <div className="windows">
                                <div className="w-left"></div>
                                <div className="w-right"></div>
                            </div>
                            <div className="door"></div>
                            <div className="windows">
                                <div className="w-left"></div>
                                <div className="w-right"></div>
                            </div>
                        </div>

                        <div className="train-car">
                            <div className="windows">
                                <div className="w-left"></div>
                                <div className="w-right"></div>
                            </div>
                            <div className="door"></div>
                            <div className="windows">
                                <div className="w-left"></div>
                                <div className="w-right"></div>
                            </div>
                        </div>

                        <div className="train-car">
                            <div className="windows">
                                <div className="w-left"></div>
                                <div className="w-right"></div>
                            </div>
                            <div className="door"></div>
                            <div className="windows">
                                <div className="w-left"></div>
                                <div className="w-right"></div>
                            </div>
                        </div>

                        <div className="train-car">
                            <div className="windows">
                                <div className="w-left"></div>
                                <div className="w-right"></div>
                            </div>
                            <div className="door"></div>
                            <div className="windows">
                                <div className="w-left"></div>
                                <div className="w-right"></div>
                            </div>
                        </div>

                        <div className="train-car end-car">
                            <div className="door"></div>
                            <div className="windows">
                                <div className="w-left"></div>
                                <div className="w-right"></div>
                                <div className="end-car-window"></div>
                            </div>
                        </div>
                    </div>


                    <div className="train-track">
                        <div className="ledge"></div>
                        <div className="pillar">
                            <div className="pillar-left"></div>
                            <div className="pillar-middle"></div>
                            <div className="pillar-right"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
