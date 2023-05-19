const Image = (props) => {

    return (
      <>
        <div className='image_ctn lg:basis-1/3 basis-1/2 lg:py-6 pb-4 relative' onClick={() => props.openModal(props.index)}>
            <img id={props.index} src={props.src} alt={props.name} />
        </div>
      </>
    )
  }
  
  export default Image
  