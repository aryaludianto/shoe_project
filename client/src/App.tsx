// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './component/Header/Header'

//this is test
import Test from './component/test'
import OrderStatus from './component/HelpComponent/OrderStatus'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/' component={Test} />
      <Route exact path='/orderstatus' component={OrderStatus} />
    </BrowserRouter>
  );
}

export default App;
