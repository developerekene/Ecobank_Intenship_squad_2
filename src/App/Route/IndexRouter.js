import React, { useState } from "react";
import { Routes,Route, BrowserRouter } from "react-router-dom";
import BrowseOpportunity from "../UI/Pages/BrowseOpportunity/BrowseOpportunity";
import Home from '../UI/Pages/Home/Home'
import Profile from "../UI/Pages/Profile/Profile";
import LoginAndSignup from "../UI/Pages/LoginAndSignup/LoginAndSignup";
import Faqs from "../UI/Pages/faqs/Faqs";
import About from "../UI/Pages/About/About";
import Post from "../UI/Pages/Post/Post";
import ProtectedRoutes from "../Route/ProtectedRoutes"
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from "../utils/redux/AuthSlice";
import ProtectedLogin from "./ProtectedLogin";
import PageNotFound from "../UI/Pages/pagenotfound/PageNotFound";


const Index = () => {
  const token = localStorage.getItem("token");
  console.log(token)
    return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route element={<Home />} path={"/"}></Route>
          <Route element={<BrowseOpportunity/>} path={"/companies"}></Route>
          <Route element={<Profile/>} path={"/profile"}></Route>
          <Route element={<Faqs/>} path={"/faqs"}></Route>
          <Route element={<About/>} path={"/about"}></Route>
          <Route element={<Post/>} path={"/interns"}></Route>
        </Route>
        <Route element={<ProtectedLogin/>}>
          <Route element={<LoginAndSignup/>} path={"/login"}></Route>
        </Route>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
    )
    
}
export default Index;
