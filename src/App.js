import React from "react";
import { Home, Blogs, ReadFullBlog } from "./pages";
import "./App.css";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/"/>
        <Route element={<Blogs />} path="/blogs"/>
        <Route element={<ReadFullBlog />}  path="/readblog"/>
      </Routes>
    </>
  );
}
