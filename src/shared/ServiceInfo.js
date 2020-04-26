import React from "react";


const ServiceInfo = (props) => {
   
    return(
        <div className='service'> 
      <button className='close' onClick={props.data.showDescription}>X</button>
            
                <p className={"description"}>{props.data.content}</p>
        </div>
    )};

export default ServiceInfo

