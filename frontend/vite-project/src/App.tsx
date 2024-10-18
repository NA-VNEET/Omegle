import { useState } from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' component={<Landing/>}></Route>
      <Route path='/' component={Landing/}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
