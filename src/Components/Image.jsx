const Image = (props) => {

    return (
      <>
        <div className='image_ctn lg:basis-1/3 basis-1/2 lg:py-6 py-2 relative' onClick={props.handleClick}>
            <img id={props.index} src={props.src} alt={props.name} />
            <p className='font-secondary text-white lg:text-xl text-lg absolute lg:bottom-8 bottom-2 left-2/4 -translate-x-2/4'>{props.name}</p>
        </div>
      </>
    )
  }
  
  export default Image
  