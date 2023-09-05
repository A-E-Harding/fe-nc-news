import { useState, useEffect} from "react";
import { getCommentsByArticleId } from "../../api";

export default function Comments({article_id}) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((response) => {
        setComments(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  if (comments.length === 0) {
  return <p>Be the first to write a comment...</p>
}
  
  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id} className='comments'>
            <p className="author">{comment.author}</p>
            <p className="date">{comment.created_at}</p>
            <p className="comment-body">{comment.body}</p>
            <p>Votes: {comment.votes}</p>
          </li>
        );
      })}
    </ul>
  );
}
