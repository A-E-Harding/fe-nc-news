import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getAllTopics } from "../../api";

export default function HomePage({topics, setTopics}) {
 


  return (
    <main>
      <Link className="home-link" to="/all-articles">View all Articles</Link>
      {topics.map((topic) => {
        return <Link key={topic.slug} className="home-link" to={`/articles?topic=${topic.slug}`}>{topic.slug}</Link>;
      })}
    </main>
  );
}
