import React from "react";

const ServiceInfo = (props) => 
    (<React.Fragment>
        <p className='service-description'>{props.data.buttonId}</p>
        <p className="service-description">{props.data.content}</p>
    </React.Fragment>);

export default ServiceInfo

