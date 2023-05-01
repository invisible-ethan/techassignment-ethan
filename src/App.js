import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import "./App.css";
import logo from "./logo.svg";

import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ProfilePic from "./components/ProfilePic";

const App = () => {
  return (
    <BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="content">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profilepic" element={<ProfilePic />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
