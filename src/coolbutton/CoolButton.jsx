import React from 'react';
import 'bulma/css/bulma.css';

const CoolButton = (props) => {
    
    let isDanger = props.isDanger ? 'is-danger' : '';
    let isSuccess = props.isSuccess ? 'is-success' : '';
    
    return (
            <button className={`button ${props.className} ${isDanger} ${isSuccess} mr-3`}>
                {props.children}
            </button>
    )
            
    
}

export default CoolButton;

