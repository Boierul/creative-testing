import './App.scss'

function App() {
    // https://codepen.io/robinselmer/pen/vJjbOZ

    return (
        <>
            <div className="noise"></div>
            <div className="overlay"></div>
            <div className="terminal">
                <h1>Error <span className="errorcode">404</span></h1>
                <p className="output">The page you are looking for might have been removed, had its name changed or is
                    temporarily unavailable.</p>
                <p className="output">Please try to <a href="404/hacker-404/src/App.jsx#1">go back</a> or <a href="404/hacker-404/src/App.jsx#2">return to the homepage</a>.
                </p>
                <p className="output">Good luck.</p>
            </div>
        </>
    )
}

export default App;
