import { useState, useEffect } from 'react';
import image1 from "./images/1-1.png";
import image2 from "./images/1-2.png";
import image3 from "./images/1-3.png";
import image4 from "./images/1-4.png";
import image5 from "./images/1-5.png";
import css from './index.css'

const ImageAnimation = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const animationSpeed = 250;

    const imageSources = [
      image1,
      image2,
      image3,
      image4,
      image5
    ];

    const changeImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
    };

    useEffect(() => {
      const animationInterval = setInterval(changeImage, animationSpeed);
      return () => clearInterval(animationInterval);
    }, []);

    return (
        <div className={css.animation}>
      <img 
        id="changing-image"
        src = {imageSources[currentImageIndex]}
        alt="Змінюючеся зображення"
      />
      </div>
    );
};

export default ImageAnimation;
