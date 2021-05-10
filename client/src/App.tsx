// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import HomePage from './component/HomePage/HomePage'
import ProductPage from './component/ProductPage/ProductPage'
//this is test
import Test from './component/test'
import OrderStatus from './component/HelpComponent/OrderStatus'

// const location = useLocation();

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/orderstatus' component={OrderStatus} />
      <Route exact path='/product' component={ProductPage} />
      <Route exact path='/test' component={Test} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
