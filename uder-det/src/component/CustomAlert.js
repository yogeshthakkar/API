import React from 'react';
import { Alert } from 'reactstrap';


/**
 * 
 * @param {*} props (alertMessage,myColor)
 * created custom Dynamic Alert Box based On myColor props
 *  it will display alertBox
 */
export default function CustomAlert(props) {
    return (
        <Alert color={props.myColor} style ={{width : '500px' , marginLeft: '370px'}}>
            {props.alertMessage}
        </Alert>
    )
}
