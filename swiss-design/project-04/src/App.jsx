import './App.scss'

function App() {

    return (
        <>
            <main className="grid">
                <div className="lg-triangle"></div>

                <header><span>Ausstellung<br/>im Stadthaus<br/>Zürich</span></header>

                <div className="heading">Die Stadt Zürich gibt Auskunft</div>
                <div className="content">
                    <div className="left">
                        <p>Aus der Arbeit<br/>der<br/>stadtischen<br/>Verwaltung<br/>im Jahr 1969</p>
                    </div>
                    <div className="right">
                        <p>22 Mai<br/>bis Mitte Juli 1970<br/>geöffnet<br/>9-12, 14-17<br/>Samstag, Sonntag<br/>geschlossen
                        </p>
                    </div>
                </div>
            </main>
        </>
)
}

export default App
