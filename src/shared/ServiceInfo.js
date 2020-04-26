import React from "react";
import './styles/ServiceInfo.css'

const ServiceInfo = (props) => 
    (
        <div className='service'> 
            <button className='close' onClick={props.data.showDescription}>X</button>
            <p className="service-description">{props.data.content}</p>
        </div>
    );

export default ServiceInfo

