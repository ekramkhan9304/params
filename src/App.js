import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Header from './component/Header';
import User from './page/User';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
