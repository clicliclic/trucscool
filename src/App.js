import React from "react";
import { useState } from 'react'

import Image from './Components/Image.jsx'
import Modal from './Components/Modal.jsx'

const App = () => {
  console.log('Coucou petit coquinou');
  const [active, setActive] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const importAll = (r) => {
    return r.keys().map(r)
  }

  const images = importAll(require.context('./images', false, /\.(png|jpe?g|gif|svg)$/));

  const openModal = (index) => {
    setImageIndex(index);
    setActive(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };

  const closeModal = () => {
    setActive(false);
    setImageIndex(0);
  };

  const changePhoto = (direction) => {
    if (direction === 'left')
      setImageIndex(imageIndex + 1)
    else
      setImageIndex(imageIndex - 1)
  }
  
  return (
    <>
      <div className='relative'>
        <div className='flex justify-between px-1 pt-4'>
          <h1 className='text-black text-[8px] font-main italic'>pariscoolnoldstuff</h1>
          {active && <p className='text-black text-[8px] text-right font-main italic' onClick={closeModal}>&lt;-</p>}
        </div>
        <div className={active ? 'columns-2 opacity-5' : 'columns-2'}>
            {images.map((image, index) => (
              <Image key={index} index={index} src={image.default} openModal={openModal} />
            ))}
        </div>

        <Modal isOpen={active} closeModal={closeModal} changePhoto={changePhoto} photos={images} imageIndex={imageIndex} />
      </div>
    </>
  );
};

export default App;