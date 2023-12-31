import {lazy,Suspense} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Header1 from './components/Home/Header1';
import Header2 from './components/Home/Header2';
import Footer from './components/Home/Footer';
import Home from './components/Home/Home'
import Announcement from './components/Home/Announcement';
import Coupon from './components/Home/Coupon';

const CartPage = lazy(()=>import('./components/Cart/CartPage'));
// import CartPage from './components/Cart/CartPage';
const DetailsPage = lazy(()=>import('./components/Product_details/DetailsPage'));
// import DetailsPage from './components/Product_details/DetailsPage';
const FilterPage = lazy(()=>import('./components/Filter/FilterPage'));
// import FilterPage from './components/Filter/FilterPage';
const LoginPage = lazy(()=>import('./components/Account/LoginPage'));
// import LoginPage from './components/Account/LoginPage';
const CreateAccount = lazy(()=>import('./components/Account/CreateAccount'));
// import CreateAccount from './components/Account/CreateAccount';
const UserAccount = lazy(()=>import('./components/Account/UserAccount'));
// import UserAccount from './components/Account/UserAccount';


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
          <Route path='/cart' element={
                    <Suspense fallback={<div style={{display: "flex", justifyContent: "center", alignContent: "center", marginTop: "50vh"}}>Loading...</div>}>
                         <CartPage/> 
                    </Suspense>} />
          <Route path='/productdetails/:id' element={
                    <Suspense fallback={<div style={{display: "flex", justifyContent: "center", alignContent: "center", marginTop: "50vh"}}>Loading...</div>}>
                         <DetailsPage/>
                    </Suspense>} />
          <Route path='/filterpage' element={
                    <Suspense fallback={<div style={{display: "flex", justifyContent: "center", alignContent: "center", marginTop: "50vh"}}>Loading...</div>}>
                              <FilterPage/>
                    </Suspense>} />
          <Route path='/loginpage' element={
                    <Suspense fallback={<div style={{display: "flex", justifyContent: "center", alignContent: "center", marginTop: "50vh"}}>Loading...</div>}>
                               <LoginPage />
                    </Suspense>} />
          <Route path="/createAccount" element={
                    <Suspense fallback={<div style={{display: "flex", justifyContent: "center", alignContent: "center", marginTop: "50vh"}}>Loading...</div>}>
                              <CreateAccount />
                    </Suspense>} />
          <Route path='/UserAccount' element={
                     <Suspense fallback={<div style={{display: "flex", justifyContent: "center", alignContent: "center", marginTop: "50vh"}}>Loading...</div>}>
                              <UserAccount />
                     </Suspense>} />
      </Routes>
      </div>
      
      <Footer/>
   </BrowserRouter>

  );
}

export default App;
