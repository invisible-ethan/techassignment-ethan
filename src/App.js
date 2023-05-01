import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import "./App.css";
import logo from "./logo.svg";

import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ProfilePic from "./components/ProfilePic";
import Profile from "./components/Profile";
import PublicRoute from "./util/PublicRoute";
import PrivateRoute from "./util/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="content">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route element={<PublicRoute />}>
            <Route index element={<Login />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profilepic" element={<ProfilePic />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
