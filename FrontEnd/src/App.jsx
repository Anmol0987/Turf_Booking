import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminTurf from './Components/AdminTurf';
import Profile from './Components/Profile';
import Booking from './Components/Booking';
import Register from './Components/Register';
import Login from './Components/Login';
import TurfList from './Components/TurfList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TurfList/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/book" element={<Booking/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/admin/turfs" element={<AdminTurf/>}/>
      </Routes>
    </BrowserRouter>

  );
};

export default App;
