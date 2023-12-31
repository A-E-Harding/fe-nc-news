import { useState, useEffect } from "react";
import { deleteCommentbyId, getCommentsByArticleId } from "../../api";
import CommentAdder from "./CommentAdder";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [loading, setIsLoading]=useState(true)

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((response) => {
        setIsLoading(false)
        setComments(response.data);    
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  const handleClick = (id) => {
    deleteCommentbyId(id).then(() => {
      setComments((currComments)=>currComments.filter((item)=>item.comment_id!==id))
    }) 
      .catch((err) => {
      console.log(err)
    })
}


  if (loading) {
    return <p>Loading</p>
}

  if (comments.msg) {
    return (
      <>
        <p>Be the first to write a comment...</p>
        <CommentAdder article_id={article_id} setComments={setComments} comments={comments} />
      </>
    );
  }

  else {
    return (
      <>
        <CommentAdder article_id={article_id} setComments={setComments} comments={comments} />
        <ul>
          {comments.map((comment) => {
            return (<div key={comment.comment_id}className="comment-section">
              <li  className="comments">
                <p className="author">{comment.author}</p>
                <p className="date">{comment.created_at}</p>
                <p className="comment-body">{comment.body}</p>
                <p>Votes: {comment.votes}</p>
                </li>
                <button className='delete-button'onClick={() => handleClick(comment.comment_id)}>Delete</button>
                </div>
            );
          })}
        </ul>
      </>
    )
  }
}
