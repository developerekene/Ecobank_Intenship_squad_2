import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BrowseOpportunity from "../UI/Pages/BrowseOpportunity/BrowseOpportunity";
import Home from '../UI/Pages/Home/Home'
import Profile from "../UI/Pages/Profile/Profile";
import LoginAndSignup from "../UI/Pages/LoginAndSignup/LoginAndSignup";
import Faqs from "../UI/Pages/faqs/Faqs";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={LoginAndSignup} path={"/"}></Route>
        <Route Component={Home} path={"/home"}></Route>
        <Route Component={BrowseOpportunity} path={"/opportunity"}></Route>
        <Route Component={Profile} path={"/profile"}></Route>
        <Route Component={Faqs} path={"/faqs"}></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default index;
