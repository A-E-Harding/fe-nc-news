import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../../api"
import { Link } from "react-router-dom";
import {useSearchParams } from "react-router-dom";

export default function TopicPage({ articles, setArticles }) {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const topicName = searchParams.get('topic');

  
  getArticlesByTopic(topicName).then((response) => {
        setArticles(response.data)
    })
    return (
        <main className="all-articles">
            <h2 className='topic-header'>{topicName}</h2>
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