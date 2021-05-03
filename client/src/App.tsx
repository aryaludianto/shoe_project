// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './component/Header/Header'

//this is test
import Test from './component/test'
import TestSecond from './component/TestSecond'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/' component={Test} />
      <Route exact path='/second' component={TestSecond} />
    </BrowserRouter>
  );
}

export default App;
