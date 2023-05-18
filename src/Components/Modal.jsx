const Modal = (props) => {

    return (
      <>
        <div className='h-screen w-screen border absolute top-0'>
            <p className='text-black text-lg py-4 pl-6 font-main' onClick={props.handleClick}>&lt;-</p>
            <img src={props.src} alt="" />
        </div>
      </>
    )
  }
  
  export default Modal