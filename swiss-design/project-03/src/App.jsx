import './App.css'

function App() {
    // This is a reproduction of a poster created by
    // Josef Mueller Brockman in the Swiss Style. View the poster here:
    // https://jamesbrook.files.wordpress.com/2010/12/josefmuellerbrockman2.jpg

    // I used CSS Grid to create this example of what Grid can do and
    // what will be possible with websites once the Grid spec becomes
    // a stadard. Learn more about CSS Grid:
    // http://gridbyexample.com/

    // Initial link: https://codepen.io/brianhaferkamp/pen/RGYepX

    return (
        <div>
            <div className="first-container">
                <div className="heading">
                    <h1>Opernhouas<br/>Zurich</h1>
                </div>
                <div className="subheading">
                    <h2>Eroffnunb<br/> der Spielzeit<br/> 1968 / 69</h2>
                </div>
            </div>

            <div className="second-container">
                <div className="section__text--middle-left middle">
                    <div className="credits__middle--left middle">
                        <h3>Musikalische Leitung:</h3>
                        <h3>Inszenierung:</h3>
                        <h3>Buhnenbild/Kostume:</h3>
                        <h3>Chore:</h3>
                    </div>
                </div>

                <div className="section__text--middle-right middle">
                    <h2 className="section-heading">Palestrina</h2>
                    <h3>Musikalische Legende von Hans Pfitzner</h3>
                    <h3>Erstauffuhrung<br/>Samstag, 7.September, 19.00 Uhr</h3>
                    <div className="credits__middle--right middle">
                        <h3>Alberto Erede</h3>
                        <h3>Herbert Graf</h3>
                        <h3>Max Rothlisberger</h3>
                        <h3>Hans Erismann</h3>
                    </div>
                </div>
            </div>

            <div className="section__text--bottom-left bottom">
                <div className="credits__bottom--left bottom">
                    <h3>Musikalische Leitung:</h3>
                    <h3>Inszenierung:</h3>
                    <h3>Buhnenbild/Kostume:</h3>
                    <h3>Chore:</h3>
                </div>
            </div>
            <div className="section__text--bottom-right bottom">
                <h2 className="section-heading">Der Wildschutz</h2>
                <h3>Komische Oper von Albert Lorzing</h3>
                <h3>Neuinszenierung<br/>Samstag, 14.Septermber, 20.00 Uhr</h3>
                <div className="credits__bottom--right bottom">
                    <h3>Matthias Aeschbacher</h3>
                    <h3>Martin Markun</h3>
                    <h3>Monika von Zallinger</h3>
                    <h3>Hans Erismann</h3>
                </div>
            </div>
        </div>
    )
}

export default App
