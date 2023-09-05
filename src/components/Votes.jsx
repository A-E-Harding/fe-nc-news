import { useState } from "react";
import { updateVotes, decreaseVotes } from "../../api";

export default function Votes({ currVotes, article_id }) {
    const [votes, setVotes] = useState(currVotes);
    const [error, setError]=useState(null)

    const handleLikes = () => {
    updateVotes(article_id)
      .then((response) => {
        setVotes(response.data[0].votes);
      })
      .catch((err) => {
          setError({err})
      });
  };
  const handleDislikes = () => {
    decreaseVotes(article_id)
      .then((response) => {
        setVotes(response.data[0].votes);
      })
      .catch((err) => {
          setError({err})
      });
  };
    
    if (error) {
        return <>
            <p>server error</p>
            <button onClick={handleLikes}>Like 👍</button>
          <button onClick={handleDislikes}>Dislike 👎</button>
      <p>Votes: {votes} </p>
      </>
    }

  return (
    <div className='buttons'>
          <button className='like-dislike' onClick={handleLikes}>Like 👍</button>
          <button className='like-dislike' onClick={handleDislikes}>Dislike 👎</button>
      
    </div>
  );
}
