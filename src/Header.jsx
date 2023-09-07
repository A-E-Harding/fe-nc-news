import { Link } from "react-router-dom";

export default function Header({ topics, setTopics }) {
  return (
    <div>
      <h1>Northcoders News</h1>
      <nav className="nav-bar">
        <Link className="nav-bar-item"to="/">Home</Link>
        <Link className="nav-bar-item" to="/all-articles">View all Articles</Link>
        {topics.map((topic) => {
          return (
            <Link className="nav-bar-item"
              key={topic.slug}
              to={`/articles?topic=${topic.slug}`}
            >
              {topic.slug}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
