import { useState } from "react";
import { updateVotes, decreaseVotes } from "../../api";

export default function Votes({ currVotes, article_id }) {
  const [votes, setVotes] = useState(currVotes);
  const [error, setError] = useState(null);

  const handleLikes = () => {
    setVotes((votes) => votes + 1);
    updateVotes(article_id).catch((err) => {
      console.log(err, 'err')
      setVotes((votes) => votes - 1);
      setError({ err });
    });
  };
  const handleDislikes = () => {
    setVotes((votes) => votes - 1);
    decreaseVotes(article_id).catch((err) => {
      setVotes((votes) => votes + 1);
      setError({ err });
    });
  };


  return (
    <div className="buttons">
      <button className="like-dislike" onClick={handleLikes}>
        👍
      </button>
      <p>{votes} </p>
      <button className="like-dislike" onClick={handleDislikes}>
        👎
      </button>
      {error ? <p>Server error</p> : null }
    </div>
  );
}
