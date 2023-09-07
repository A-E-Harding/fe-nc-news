import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../../api"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function TopicPage({articles, setArticles}) {
    const topic = useLocation();
    let searchParam = topic.search
    getArticlesByTopic(searchParam).then((response) => {
        setArticles(response.data)
    })
    return (
        <main className="all-articles">
            <h2 className='topic-header'>{searchParam.slice(7)}</h2>
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
    )
}