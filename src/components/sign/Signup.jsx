import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';



class Signup extends  React.Component {
    render() {
        return(
        <div className="container pl-5">  
            <Navbar/>
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="*******" />
            <CoolButton isSmall isDanger className="is-rounded my-class mt-4">Login</CoolButton>
        </div>
        )
    }
}

export default Signup;


  