import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ArticlePage  from "./components/ArticlePage";
import AllArticlesPage from "./components/AllArticlesPage"
import HomePage from "./components/HomePage"
import TopicPage from "./components/TopicPage";
import Header from "./Header";
import { getAllTopics } from "../api";
  
export default function App() {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getAllTopics().then((response) => {
      setTopics(response.data);
    });
  }, []);
  return (
    <>
      <div>
        <Header topics={topics} setTopics={setTopics}/>
        <Routes>
          <Route path="/" element={<HomePage topics={topics} setTopics={setTopics} />} />
          <Route path="/all-articles" element={<AllArticlesPage setArticles={setArticles} articles={articles} />}></Route>
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path="/articles" element={<TopicPage setArticles={setArticles} articles={articles}/>} />
        </Routes>
      </div>
    </>
  );
}
