import React from "react";

const ServiceInfo = (props) => 
    (<React.Fragment>
        <strong><p className='service-description'>{props.data.buttonId}</p></strong>
        <br/><br/>
        <p className="service-description">{props.data.content}</p>
        <br/><p>Services included but not limited to:</p><br/>
        {props.data.bulletPoints.split("@, ").map(bullet => (
                <p className="service-description">・{bullet}<br/><br/></p>))}
    </React.Fragment>);

export default ServiceInfo

