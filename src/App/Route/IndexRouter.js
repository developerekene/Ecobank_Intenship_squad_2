import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BrowseOpportunity from "../UI/Pages/BrowseOpportunity/BrowseOpportunity";
import Home from '../UI/Pages/Home/Home'
import Profile from "../UI/Pages/Profile/Profile";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route Component={Home} path={"/"}></Route> */}
        <Route Component={BrowseOpportunity} path={"/browse"}></Route>
        <Route Component={Profile} path={"/"}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default index;
