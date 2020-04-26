import React from "react";

const ServiceInfo = (props) => 
    (<React.Fragment>
        <strong><p className='service-description'>{props.data.buttonId}</p></strong>
        <br></br><br></br>
        <p className="service-description">{props.data.content}</p>
    </React.Fragment>);

export default ServiceInfo

