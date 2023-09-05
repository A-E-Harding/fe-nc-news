import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllArticles } from "../../api";

export default function AllArticlesPage({ articles, setArticles }) {
  useEffect(() => {
      getAllArticles().then((response) => setArticles(response.data));
  }, []);
  return (
    <main className="all-articles">
      {articles.map((article) => {
        return (
          <div key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
              <p >{article.title}</p>
              <p>{article.author}</p>
            </Link>
          </div>
        );
      })}
    </main>
  );
}
