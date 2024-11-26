import React, { useState, useEffect } from 'react';
import specialList from '../../../public/specialList/specialListObject';
import { Link } from 'react-router-dom';

const specialListArray = specialList;

function Header() {
  const size = specialListArray.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in'); // To control fade class
  const [slideClass, setSlideClass] = useState('slide-in'); // Control slide-in class
  // To handle image change interval
  useEffect(() => {
    if (size === 0) return;

    const interval = setInterval(() => {
      // Start fade-out and change the index
      setFadeClass('fade-out'); // Trigger fade-out first
      setSlideClass('slide-out'); // Start with slide-out effect
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % size); // Update index after fade-out
        setFadeClass('fade-in'); // Trigger fade-in after index change
        setSlideClass('slide-in'); // Trigger slide-in for the new image
      }, 1000); // After 1 second (duration of fade-out), change the image

    }, 10000); // Change the image every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [size]);

  return (
    <Link to="/weekend">
    <div className="header">
      <div className={`foodMatedata ${slideClass}`}>
        <h1 className='topic'>Weekend Special</h1>
        <h2 className='foodName'>{specialListArray[currentIndex].name}</h2>
        <h2>Price:{specialListArray[currentIndex].price}</h2>
      </div>
     
      {specialListArray.length > 0 && (
        <img
          src={specialListArray[currentIndex].image}
          alt="slider"
          className={`slider-image ${fadeClass}`}
        />
      )}
    </div>
    </Link>
  );
}

export default Header;
