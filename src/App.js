import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Header1 from './components/Home/Header1';
import Header2 from './components/Home/Header2';
import Footer from './components/Home/Footer';
import Home from './components/Home/Home'
import CartPage from './components/Cart/CartPage';
import Announcement from './components/Home/Announcement';
import DetailsPage from './components/Product_details/DetailsPage';
import FilterPage from './components/Filter/FilterPage';
import LoginPage from './components/Account/LoginPage';
import CreateAccount from './components/Account/CreateAccount';
import UserAccount from './components/Account/UserAccount';
import Coupon from './components/Home/Coupon';


function App() {
  return (
   <BrowserRouter>
      <Announcement />
      <Header1 />
      <Header2 />
      <Coupon />
      <div className="main_page">
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/productdetails/:id' element={<DetailsPage/>} />
          <Route path='/filterpage' element={<FilterPage/>} />
          <Route path='/loginpage' element={<LoginPage />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path='/UserAccount' element={<UserAccount />} />
      </Routes>
      </div>
      
      <Footer/>
   </BrowserRouter>

  );
}

export default App;
