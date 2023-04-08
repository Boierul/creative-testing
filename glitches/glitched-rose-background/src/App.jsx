import './App.scss'
import { useEffect } from 'react';

function App() {
    console.clear();

    useEffect(() => {
        const cvs = document.querySelector('canvas'),
            ctx = cvs.getContext('2d'),
            img = document.querySelector('img');

        if (img.complete) processImage(img);
        else img.onload = () => {
            processImage(img)
        };

        function processImage(img) {
            let w = img.width,
                h = img.height;
            img.style.width = '420px';
            cvs.width = w;
            cvs.height = h;
            ctx.drawImage(img, 0, 0);
            let px = w * h,
                data = ctx.getImageData(0, 0, w, h),
                len = data.data.length,
                rate = 0.01;

            animate();

            function animate() {
                requestAnimationFrame(animate);
                let relLen = Math.floor(len / 4);
                for (let i = len - 5; i > 0; i -= 4) {
                    let relI = i * 0.25,
                        y = Math.floor(relI / w),
                        x = Math.random() > 0.1 ? relI + 1 : relI;
                    x = (x % w) + w * y;
                    x *= 4;
                    data.data[x] = data.data[i];
                    data.data[x + 1] = data.data[i + 1];
                    data.data[x + 2] = data.data[i + 2];
                    data.data[x + 3] = data.data[i + 3];
                }
                ctx.putImageData(data, 0, 0);
            }
        }
    }, []);

    return (
        <>
            <img src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/111863/flowers-2.jpg?d=1483661702136"
                 crossOrigin = "anonymous" />
            <canvas></canvas>
        </>
    )
}

export default App
