import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { useState } from "react";
import { useEffect } from "react";

export default function ArticlePage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((response) => {
        setIsLoading(false);
          setArticle(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  if (loading) return <p>Loading...</p>;

  return (
    <main className="article-page">
          <h2 class='topic-header'>{article.topic}</h2>
          <h3 class = 'article-title'>{article.title}</h3>
          <p>{article.author}</p>
          <p>{article.created_at}</p>
          <img src={article.article_img_url} />
          <body>{article.body}</body>
          <p>Votes: {article.votes}</p>
          <p>Comments: {article.comment_count}</p>
    </main>
  );
}
