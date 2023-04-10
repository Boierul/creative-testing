import './App.scss'

function App() {

    return (
        <>
            <input type="radio" name="time" id="sunrise" checked/>
            <input type="radio" name="time" id="sunset"/>

            <div id="app">
                <div className="glow"></div>
                <div className="sky"></div>
                <div className="stars"></div>
                <div className="city">
                    <div className="building">
                        <div className="tower">
                            <div className="windows"></div>
                        </div>
                        <div className="tower">
                            <div className="windows"></div>
                            <div className="ledge"></div>
                        </div>
                        <div className="tower">
                            <div className="windows"></div>
                        </div>
                    </div>
                    <div className="building">
                        <div className="tower">
                            <div className="windows"></div>
                        </div>
                        <div className="tower">
                            <div className="windows"></div>
                            <div className="ledge"></div>
                        </div>
                        <div className="tower">
                            <div className="windows"></div>
                            <div className="ledge"></div>
                        </div>
                    </div>
                    <div className="building">
                        <div className="tower">
                            <div className="windows"></div>
                        </div>
                        <div className="tower">
                            <div className="windows"></div>
                            <div className="ledge"></div>
                        </div>
                        <div className="tower">
                            <div className="windows"></div>
                        </div>
                    </div>
                </div>
                <div className="times">
                    <div className="time"
                         data-sunrise="7:20"
                         data-sunset="9:14"
                    ></div>
                    <div className="time"
                         data-sunrise="7:25"
                         data-sunset="9:18"
                    ></div>
                    <div className="time"
                         data-sunrise="7:29"
                         data-sunset="9:23"
                    ></div>
                    <div className="time"
                         data-sunrise="7:32"
                         data-sunset="9:32"
                    ></div>
                    <div className="time"
                         data-sunrise="7:37"
                         data-sunset="9:37"
                    ></div>
                </div>
                <div className="heavens">
                    <label htmlFor="sunrise" className="sunrise" data-title="Sunrise"></label>
                    <label htmlFor="sunset" className="sunset" data-title="Sunset"></label>
                </div>
                <div className="clouds"></div>
            </div>
        </>
    )
}

export default App;
