import { useState, useEffect } from 'react'

const Modal = (props) => {

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(null);

    useEffect(() => {
      setCurrentPhotoIndex(props.imageIndex);
    }, [props.imageIndex]);

    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    const minSwipeDistance = 50 

    const onTouchStart = (e) => {
      setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
      setTouchStart(e.targetTouches[0].clientX)
    }
    
    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

    const onTouchEnd = () => {
      if (!touchStart || !touchEnd) return
      const distance = touchStart - touchEnd
      const isLeftSwipe = distance > minSwipeDistance
      const isRightSwipe = distance < -minSwipeDistance
      if (isLeftSwipe && currentPhotoIndex < props.photos.length - 1)
        setCurrentPhotoIndex(currentPhotoIndex + 1);
      else if (isRightSwipe && currentPhotoIndex > 0)
        setCurrentPhotoIndex(currentPhotoIndex - 1);
    }

    if(!props.isOpen) {
      return null;
    }
    return (
      <>
        <div className='h-screen w-screen absolute top-[28px]' onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <img src={props.photos[currentPhotoIndex]} alt="" />
        </div>
      </>
    )
  }
  
  export default Modal