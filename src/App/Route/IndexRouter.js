import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BrowseOpportunity from "../UI/Pages/BrowseOpportunity/BrowseOpportunity";
import Home from '../UI/Pages/Home/Home'

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path={"/"}></Route>
        <Route Component={BrowseOpportunity} path={"/browse"}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default index;
