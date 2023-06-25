import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/defaultlayout";
import BlogDetail from "./component/BlogDetail";
import BlogList from "./component/BlogList";
import Blog from "./component/blog";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
            <Route index element={<Blog/>}/>
            <Route path="blog-detail" element={<BlogDetail/>}/>
            <Route path="BlogList" element={<BlogList/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
