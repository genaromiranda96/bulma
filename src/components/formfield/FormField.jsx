import React from 'react';
import 'bulma/css/bulma.css';

const Navbar = (props) => {
      
    return (
        <div class='container'>
                <div class="field">
                    <label class="label">{props.label}</label>
                    <div>
                        <input style={{width: '260px'}} class="input"   type={props.type} placeholder={props.placeholder} />
                    </div>
                </div>          
         </div> 
    )
            
    

}

export default Navbar;

