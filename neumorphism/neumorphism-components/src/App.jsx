import React from 'react';
import './App.scss';

function App() {
    return (
        <div className="container">
            <div className="embed buttons">
                <h1 className="title">Buttons</h1>
                <div className="content">
                    <button className="button" style={{ background: '#FF77FF' }}>Click me !</button>
                    <button className="button" style={{ background: '#FF7777' }}>Click me !</button>
                    <button className="button">Click me !</button>
                    <button className="button" disabled>Click me !</button>
                </div>
            </div>

            <div className="embed checkboxes">
                <h1 className="title">Checkboxes</h1>
                <div className="content">
                    <input type="checkbox" id="check1" defaultChecked />
                    <input type="checkbox" id="check2" />
                    <input type="checkbox" id="check3" defaultChecked />
                    <input type="checkbox" id="check4" />
                    <input type="checkbox" id="check5" defaultChecked />
                    <input type="checkbox" id="check6" />
                    <input type="checkbox" id="check7" defaultChecked />
                    <input type="checkbox" id="check8" />
                </div>
            </div>

            <div className="embed inputs text">
                <h1 className="title">Text inputs</h1>
                <div className="content">
                    <label htmlFor="username">
                        <p>Username</p>
                        <input type="text" id="username" />
                    </label>
                    <label htmlFor="password">
                        <p>Password</p>
                        <input type="password" id="password" />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default App;
