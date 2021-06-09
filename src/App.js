import logo from './logo.svg';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import CoolButton from './coolbutton/CoolButton';


import 'bulma/css/bulma.css';

import './App.css';

function App() {
  return (
  <>
    <header className="App">
        <Navbar/>
    </header>
    <div>
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    </div>
    
    <div className="container pt-4">
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
    </div>
  </>
  );
}

export default App;
