import { useState } from "react";
import { addComment } from "../../api";

export default function CommentAdder({ article_id, setComments, comments }) {
  const [comment, setComment] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(comment, article_id)
      .then((response) => {
        setComments([response.data, ...comments]);
        setComment("");
      })
      .catch((err) => {
        console.log(err)
        setError(err.response.data.msg);
      });
  };


  return (
    <form>
      <label>Add a new comment</label>
      <input
        value={comment}
        onChange={(e) => {
          {
            setComment(e.target.value);
          }
        }}
      />
      <button className='submit' onClick={handleSubmit}>Submit</button>
      {error ? <p>Server error</p> : null }
    </form>
  );
}
