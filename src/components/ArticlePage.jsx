import { useParams } from "react-router-dom";
import { getArticleById } from "../../api";
import { useState, useEffect } from "react";
import Comments from "./Comments";
import Votes from "./Votes";


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
      <h2 className="topic-header">{article.topic}</h2>
      <h3 className="article-title">{article.title}</h3>
      <div className="details"><p>{article.author}</p>
      <p>{article.created_at}</p></div>
      <img src={article.article_img_url} />
      <p className="article-body">{article.body}</p>
      <Votes currVotes={article.votes} article_id={article_id} />
      <h4>Comments</h4>
     
      <Comments article_id={article_id} />  
      <p>{article.comment_count} comments</p>
    </main>
  );
}

