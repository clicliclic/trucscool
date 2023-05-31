import React from "react";

const Image = (props) => {

    return (
    <>
        <div className='lg:basis-1/3 basis-1/2 lg:py-6 pb-4 relative' onClick={() => props.openModal(props.index)}>
            <img src={props.src} />
        </div>
    </>
    )
}
  
export default Image