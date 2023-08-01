import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BrowseOpportunity from "../UI/Pages/BrowseOpportunity/BrowseOpportunity";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={BrowseOpportunity} path={"/"}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default index;
