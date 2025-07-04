import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./component/pages/Home";
import Login from './component/pages/Login';
import Contact from "./component/pages/Contact";
import About from "./component/pages/About";
import Header from './component/pages/Header';
import Footer from './component/pages/Footer';
import Service from './component/pages/Service';
import Registration from "./component/pages/Registration";
import Product from './component/pages/Product';
import Modular from './component/pages/Services/Modular';
import Pvc from './component/pages/Services/Pvc';
import Metal from './component/pages/Services/Metal';
import Interior from './component/pages/Services/Interior';
import Wooden from './component/pages/Services/Wooden';
import ProtectedRoute from './component/pages/ProtectedRoute'; 

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
        <Route path='/protectedroute' element={<ProtectedRoute />} />
        <Route path='/services/modular' element={<Modular />} />
        <Route path='/services/pvc' element={<Pvc />} />
        <Route path='/services/metal' element={<Metal />} />
        <Route path='/services/wooden' element={<Wooden />} />
        <Route path='/services/interior' element={<Interior />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
