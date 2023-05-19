import { useState } from 'react'
import './App.css'

import Image from './Components/Image'
import Modal from './Components/Modal'

import image2 from './assets/images/2.jpg';
import image3 from './assets/images/3.jpg';
import image4 from './assets/images/4.jpg';
import image5 from './assets/images/5.jpg';
import image6 from './assets/images/bangbang.jpg';
import image7 from './assets/images/6.jpg';
import image8 from './assets/images/7.jpg';
import image9 from './assets/images/8.jpg';
import image10 from './assets/images/9.jpg';
import image11 from './assets/images/10.jpg';
import image1 from './assets/images/1.jpg';
import image12 from './assets/images/11.jpg';
import image13 from './assets/images/12.jpg';


function App() {
  const img = [image3, image6, image2, image8, image4, image1, image13,  image10, image11,  image12, image9, image7, image5];

  const [active, setActive] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);


  const openModal = (index) => {
    setActive(true);
    setImageIndex(index)
    console.log(index);
  };

  const closeModal = () => {
    setActive(false);
    setImageIndex(null)
  };

  return (
    <>
      <div className='relative'>
          <h1 className='text-black text-lg py-4 font-main text-center'>pariscoolnoldstuff</h1>
          <div className={active ? 'columns-2 opacity-5' : 'columns-2'}>
              {img.map((image, index) => {
                const uri = image.split('assets/').pop();
                const startIndex = uri.lastIndexOf('-');
                const endIndex = uri.lastIndexOf('.');
                const imageName = uri.split(uri.substring(startIndex, endIndex + 1)).join('.');
                return <Image key={index} index={index} src={image} name={imageName} openModal={openModal} />
              })}
          </div>
          <Modal isOpen={active} closeModal={closeModal} photos={img} imageIndex={imageIndex} />
      </div>
    </>
  )
}

export default App
