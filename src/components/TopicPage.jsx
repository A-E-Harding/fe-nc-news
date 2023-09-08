import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../../api";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function TopicPage({ articles, setArticles }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortedBy, setSortedBy] = useState("created_at");
  const [orderedBy, setOrderedBy] = useState("desc");

  const topicName = searchParams.get("topic");

  const handleSortClick = (sortBy) => {
    setSortedBy(sortBy);
  };

  const handleOrderClick = (orderBy) => {
    setOrderedBy(orderBy);
  };

  getArticlesByTopic(topicName, sortedBy, orderedBy).then((response) => {
    setArticles(response.data);
  });

  return (
    <main className="all-articles">
      <h2 className="topic-header">{topicName}</h2>
      <div className="asc-desc">
        <button className='asc' onClick={() => handleOrderClick("asc")}>ascending</button>
        <button className='desc' onClick={() => handleOrderClick("desc")}>descending</button>
      </div>
      <div className="dropdown">
        <button className="dropbtn">sort by...</button>
        <div className="dropdown-content">
          <button onClick={() => handleSortClick("votes")}>Votes</button>
          <button onClick={() => handleSortClick("comment_count")}>
            Comments
          </button>
          <button onClick={() => handleSortClick("created_at")}>Date</button>
        </div>
      </div>
      {articles.map((article) => {
        return (
          <div className="article-card" key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
              <p>{article.title}</p>
              <p>{article.author}</p>
              <p>{article.created_at}</p>
              <p>votes {article.votes}</p>
              <p>comments {article.comment_count}</p>
            </Link>
          </div>
        );
      })}
    </main>
  );
}
