import './App.scss'

function App() {

    return (
        <>
            <div className="icon">
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M7 10h-4.083l1.271-1.396.812.396.676-.862 1.324 1.862zm.88 3h-7.88v-8h9.204c.739 1.612 2.024 1.696 3.796 2.509v4.648c-1.638-.182-3.985-.26-5.12.843zm.12-6h-6v4h6v-4zm9.17-1.833c-.806-1.165-5.031-1.924-6.742-2.167-.169.727.111 1.643.859 2.076.729.422 2.847 1.078 3.473 1.702.812.808 2.026 4.668.028 7.282-2.076-.589-4.24-.527-5.415-.048-1.153.47-1.013 1.908.189 2.045 3.42.39 7.587 1.161 10.322 4.943 0 0 1.821-1.885 4.115-4.426-3.668-3.053-4.198-7.606-6.829-11.407zm-13.92 2.833c-.138 0-.25.112-.25.25s.112.25.25.25c.139 0 .25-.112.25-.25s-.111-.25-.25-.25z"/>
                    </svg>
                </i>
                <p>XYZ</p>
            </div>

            <div className="window window--normal window--opened draggable">
                <div className="window__caption">
                    <p>Lorem ipsum dolor</p>
                    <div className="window__caption--button"></div>
                </div>
                <div className="window__content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nemo possimus animi itaque
                        tenetur culpa voluptates quam neque, vel aliquid minus tempore adipisci enim doloremque
                        explicabo ad iure omnis earum.</p>
                </div>
            </div>

            <div className="window window--gif window--opened draggable">
                <div className="window__caption">
                    <p>404</p>
                    <div className="window__caption--button"></div>
                </div>
                <img src="https://i.postimg.cc/6Q11Q3vn/1.gif"/>
            </div>

            <div className="window window--color window--opened draggable">
                <div className="window__content">
                    <p>Brutalism Brutalism Brutalism Brutalism Brutalism</p>
                </div>
            </div>


            <div className="overlay overlay--top"></div>
            <div className="overlay overlay--bottom"></div>
            <div className="overlay overlay--left"></div>
            <div className="overlay overlay--right"></div>
        </>
    )
}

export default App;
