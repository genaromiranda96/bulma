import React from 'react';
import 'bulma/css/bulma.css';

const Navbar = (props) => {
      
    return (
        <nav class='navbar is-transparent container is-flex is-justify-content-space-between my-2'>
                <div class='is-flex is-align-items-center'>
                    <img height='60' width='100' src='../bulma-logo.png'/>
                    <a className='ml-5' href="/">Home</a>
                </div> 

                <div class='is-flex is-align-items-center'>
                    <a className="button is-medium is-info mr-2" href='#'>Login</a>
                    <a className="button is-medium is-primary mr-2" href='#'>Signup</a>
                </div>
        
         </nav> 
    )
            
    

}

export default Navbar;