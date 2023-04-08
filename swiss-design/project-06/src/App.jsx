import './App.scss'

function App() {
  // console.clear();
  //
  // select = e => document.querySelector(e);
  // selectAll = e => document.querySelectorAll(e);
  //
  // const container = select('.poster-wrap');
  //
  // function resize() {
  //   let vh = window.innerHeight;
  //   // let sh = container.offsetHeight;
  //   let sh = 800;
  //   let scaleFactor = vh/sh;
  //   if(scaleFactor<1) {
  //     gsap.set(container, { scale: scaleFactor });
  //   }
  //   else {
  //     gsap.set(container, { scale: 1 });
  //   }
  // }
  //
  // window.onresize = resize;

  return (
    <>
      <div className="poster-wrap">

        <div className="main-typo clipmask">
          <svg xmlns="http://www.w3.org/2000/svg" width="300.9" height="820" viewBox="0 0 300.9 820">
            <clipPath id="clipmask">
              <path className="typo-01"
                    d="M91,809.63a59.23,59.23,0,0,0,17-23.29A294.67,294.67,0,0,0,118.69,752q4.08-18.36,8.16-27t12.24-8.67a12.48,12.48,0,0,1,10.71,5.44q3.9,5.43,3.91,15.64,0,11.89-5.78,19.21a23.12,23.12,0,0,1-15.64,8.67V819q29.24-3.06,46.92-23.63t17.68-56.28q0-24.15-7.82-41.65t-21.25-26.53a55.73,55.73,0,0,0-5.74-3.36,66.66,66.66,0,0,0,17.13-14.32q17.68-20.57,17.68-56.27,0-24.15-7.82-41.66-7.6-17-20.52-26h25.62v-101l-135-26.52,135-32.3V307.91L58.5,276l135.67-26.87V190.94l-58.1,15.82a87.2,87.2,0,0,0,23-28.69q8.79-17.79,18.42-46.24,9.2-28.47,17.15-41.85t22.19-13.39q13,0,19.87,8t6.91,20.92q0,15.08-8.16,24.69T213,140.62V218q41.43-2.1,64.66-31.81T300.9,108q0-47.7-23.22-77.42T213.44.84q-27.63,0-44.78,13a85.73,85.73,0,0,0-25.95,31q-8.79,18-17.58,46.45-5.86,19.67-10.46,30.35a59.16,59.16,0,0,1-11.72,18,24,24,0,0,1-18,7.33q-13,0-20.3-9.21t-7.32-25.11q0-15.49,8.58-25.11t24.9-11.3V0Q61.93.84,41.43,16.11t-31,40.81Q0,82.44,0,114.67,0,147.73,12.14,172t32.64,37a83.46,83.46,0,0,0,37.41,12.4L4.43,242.62v63.93l123.1,30.94L4.43,367.42v64.26l145.76,39.45H4.43v58.14H29.77Q17.61,540,10.21,556.81,1.72,576.21,1.71,601q0,23.12,7.48,40.63t20.58,26.87c.62.44,1.25.87,1.89,1.28Q18.18,680.8,10.21,699q-8.49,19.38-8.5,44.2,0,23.13,7.48,40.64t20.58,26.86A49.92,49.92,0,0,0,59.52,820Q79.23,819.66,91,809.63ZM48.81,617.17q-4.26-6-4.25-16.83,0-11.91,6.12-20.06a22.08,22.08,0,0,1,16-9.18V529.27h41.05l-.42.34a58.77,58.77,0,0,0-16.66,23.46,258.91,258.91,0,0,0-10,34q-4.77,19-8.67,27.54t-12.07,8.5Q53.05,623.12,48.81,617.17Zm0,142.13q-4.26-6-4.25-16.83,0-11.91,6.12-20.06a22.08,22.08,0,0,1,16-9.18V677.39Q81.45,675.64,91,667.5a59.26,59.26,0,0,0,17-23.3,295,295,0,0,0,10.72-34.34q4.08-18.36,8.16-27t12.24-8.67a12.48,12.48,0,0,1,10.71,5.44q3.9,5.43,3.91,15.64,0,11.89-5.78,19.21a23.2,23.2,0,0,1-15.64,8.67v39q-15.36,1.27-25,9.61a58.8,58.8,0,0,0-16.66,23.47,258.25,258.25,0,0,0-10,34q-4.77,19-8.67,27.54t-12.07,8.5A13,13,0,0,1,48.81,759.3Z"/>
              <circle className="typo-02" cx="244.96" cy="500.07" r="33"/>
            </clipPath>
          </svg>

          <p className="sub-typo">Swiss<br/>design</p>
        </div>

        <div className="unit-wrap">
          <h1>The Principles</h1>
          <p>Cleanliness. Readability. Objectivity.</p>
          <p>Just a few key words that describe the driving force behind Swiss Style. The 19th century marked the
            separation of design from fine art, and with it, the birth of grid-based design.</p>
          <p>Philip B. Meggs‘ History of Graphic Design explains that International Typographic Design begins with a
            mathematical grid. These grids are considered to be the “most legible and harmonious means for structuring
            information.” Using a grid for design makes creating a hierarchy for the content much easier—think web
            design. Why are so many websites broken into grids? Grids are flexible, consistent and easy to follow. They
            are clear-cut and work well with ratios (Rule of Thirds, Golden Ratio, etc.). In addition to the grid, Swiss
            Style usually involves an asymmetrical layout, sans serif typefaces and the favoring of photography over
            illustrations.</p>
          <p className="link-text"><a href="https://www.printmag.com/post/swiss-style-principles-typefaces-designers"
                                      target="_blank">more
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
              <path d="M5,5V3H3V2H6V5Z"/>
              <polygon points="0 0 0 4 1 4 1 1 7 1 7 7 4 7 4 8 8 8 8 0 0 0"/>
              <line x1="5" y1="3" x2="1" y2="7" fill="none" stroke="#000" stroke-miterlimit="10"/>
            </svg>
          </a></p>
        </div>
      </div>
    </>
  )
}

export default App
