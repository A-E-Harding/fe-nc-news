import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ArticlePage  from "./components/ArticlePage";
import AllArticlesPage from "./components/AllArticlesPage"
import HomePage from "./components/HomePage"
import TopicPage from "./components/TopicPage";
  
export default function App() {
  const [articles, setArticles] = useState([]);

  return (
    <>
      <div>
        <h1>Northcoders News</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-articles" element={<AllArticlesPage setArticles={setArticles} articles={articles} />}></Route>
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path="/articles" element={<TopicPage setArticles={setArticles} articles={articles}/>} />
        </Routes>
      </div>
    </>
  );
}
