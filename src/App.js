import logo from './logo.svg';
import Signup from './components/sign/Signup'
import Message from './components/message/Message'

import 'bulma/css/bulma.css';
import './App.css';

function App() {
  return (
  <>
    <Signup/>
    <Message isInfo title='Hello World'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
    </Message>
  </>
  );
}

export default App;
