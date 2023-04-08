import { useState, useEffect } from 'react';

function Mask(props) {
    const [imageWidth, setImageWidth] = useState(null);
    const [imageHeight, setImageHeight] = useState(null);

    useEffect(() => {
        const image = document.querySelector('img');
        const width = image.width;
        const height = image.height;

        setImageWidth(144 * width / height);
        setImageHeight(144);
    }, []);

    const select = () => {
        const image = document.querySelector('.mask-item__img');
        image.classList.add('mask-item__img--selected');
    };

    const unselect = () => {
        const image = document.querySelector('.mask-item__img');
        image.classList.remove('mask-item__img--selected');
    };

    return (
        <div className="mask-item">
            <img className="mask-item__img" src={props.href} width={imageWidth} height={imageHeight} />
        </div>
    );
}

Mask.observedAttributes = ['name', 'href', 'desc'];

export default Mask;
