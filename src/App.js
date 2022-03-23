import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import './App.css';
import LoginForm from './Component/LoginForm';
import AddMenuForm from './Component/menu/AddMenuForm';
import MerchantHome from './Component/merchant/MerchantHome';
import MerchantLoginForm from './Component/merchant/MerchantLoginForm';
import RegisterForm from './Component/RegisterForm';
import UserHome from './Component/user/UserHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />}/>
          <Route path="/user/register" element={<RegisterForm/>}/>
          <Route path="/user" element={<UserHome/>}/>
          <Route path="/merchant" element={<MerchantHome/>}/>
          <Route path="/merchant/login" element={<MerchantLoginForm/>}/>
          <Route path="/merchant/menu/create" element={<AddMenuForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
