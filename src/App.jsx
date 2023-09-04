import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage"
import AllArticlesPage from "../components/AllArticlesPage";
  
export default function App() {
  const [articles, setArticles] = useState([]);

  return (
    <>
      <div>
        <h1>Northcoders News</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-articles" element={<AllArticlesPage setArticles={setArticles} articles={articles}/>}></Route>
        </Routes>
      </div>
    </>
  );
}
