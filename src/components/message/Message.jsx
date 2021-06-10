import React from 'react';
import 'bulma/css/bulma.css';


const Message = (props) => {

    let isInfo = props.isInfo ? 'message is-info' : '';
    
        return(
           <section className={`container ${isInfo} mt-5 mx-6`}>  
                <div className="message-header">
                        <p>{props.title}</p>  
                        <button class="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                         {props.children}
                </div>
            </section>
        )

}

export default Message;


  