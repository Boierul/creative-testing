import './App.css'
import { useRef, useEffect } from 'react';

function App() {
        const canvasRef = useRef(null);
        let baseAngle = 0;
        const rps = 0.05;

        function draw(dt) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            baseAngle += dt * rps;

            ctx.strokeStyle = 'black';
            ctx.font = '16pt Helvetica';

            const x = (canvas.width / 3) - 27;
            const y = (3 * (canvas.height / 4)) - 22;

            ctx.fillText('beethoven', x - 94.5, y - 38, 91);
            ctx.fillText('and swiss', x - 94.5, y - 20, 91);
            ctx.fillText('design are', x - 94.5, y - 2, 91);
            ctx.fillText('beautiful ♥', x - 94.5, y + 16, 91);

            function arc(w, r, start, delta, rate) {
                ctx.lineWidth = w;
                ctx.beginPath();
                const s = (((baseAngle * rate) + start) * Math.PI) % (2 * Math.PI);
                ctx.arc(x, y, r, s, s + (delta * Math.PI), false);
                ctx.stroke();
            }

            arc(6, 150.5, 1.873, 0.315, 13);
            arc(6, 150.5, 2.750, 0.315, 13);
            arc(12, 161, 1.750, 0.375, 11);
            arc(12, 161, 2.500, 0.375, 11);
            arc(22, 179.5, 1.565, 0.435, 7);
            arc(22, 179.5, 2.250, 0.740, 7);
            arc(45, 214.5, 1.500, 1.200, 5);
            arc(92, 284.5, 1.750, 1.150, 3);
            arc(183, 423.5, 1.439, 1.261, 2);
            arc(190, 612, 1.000, 1.500, 1);
        }

        let lastTime = 0;

        function mainLoop(t) {
            const dt = (t - lastTime) / 1000;
            lastTime = t;
            draw(dt);
            window.requestAnimationFrame(mainLoop);
        }

        useEffect(() => {
            const canvas = canvasRef.current;
            canvas.width = 427;
            canvas.height = 613;

            let lastTime = 0;
            function startAnimationLoop() {
                lastTime = new Date().getTime();
                window.requestAnimationFrame(mainLoop);
            }
            startAnimationLoop();
        }, []);

  return (
    <>
      <canvas id="c" ref={canvasRef}></canvas>
      <img src='http://farm4.staticflickr.com/3023/2522909336_907650917f_z.jpg?zz=1' />
    </>
  )
}

export default App
