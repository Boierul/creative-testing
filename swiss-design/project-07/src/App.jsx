import './App.scss'

function App() {

  return (
    <>
      <div className="container">
        <div className="main-grid">
          <div className="main-grid__legend">
            <div className="text">
              <p>Benoît;</p>
            </div>
            <div className="text">
              <p>exposition</p>
            </div>
          </div>
          <div className="main-grid__rectangle"></div>
          <div className="main-grid__separator"></div>
          <div className="main-grid__rectangle main-grid__rectangle--form">
            <div className="name">
              <h2>Henri Émile Benoît art;</h2>
            </div>
            <div className="title">
              <h1>Mattise</h1>
            </div>
            <div className="input__name">
              <input type="text" placeholder="Your name"/>
            </div>
            <div className="input__phone-number">
              <input type="text" placeholder="Your phone number"/>
            </div>
            <div className="input__email">
              <input type="email" placeholder="Your email"/>
            </div>

            <div className="input__amount">
              <input type="text" placeholder="Amount"/>
            </div>

            <div className="input__submit">
              <span className="text"> Enter </span>
              <i className="icon material-icons">keyboard_return</i>
            </div>
          </div>
          <div className="main-grid__legend main-grid__legend--text-left">
            <div className="text">
              <p>Henri</p>
            </div>
            <div className="text">
              <p>Émile</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
