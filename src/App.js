import logo from './logo.svg';
import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';

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
  </>
  );
}

export default App;
