import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import HomePage from './component/HomePage/HomePage'
import ProductPage from './component/ProductPage/ProductPage'
import SortedPage from './component/SortedPage/SortedPage'
import OrderStatus from './component/HelpComponent/OrderStatus'
import UnderConstruction from './component/UnderConstruction/UnderConstruction'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/orderStatus' component={OrderStatus} />
      <Route exact path='/product' component={ProductPage} />
      <Route exact path='/sorted' component={SortedPage} />
      <Route exact path='/underConstruction' component={UnderConstruction} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
