import { useSelector } from "react-redux";
import { useState } from "react";
import { Button } from "../Button";
const Home = () => {
  const [comments, setComments] = useState("");
  const newComment = useSelector((state) => state.user.comments);
  return (
    <div>
      <p>
        {newComment.map((item) => (
          <p> {item} </p>
        ))}
      </p>
      <input
        value={comments}
        onChange={(evt) => setComments(evt.target.value)}
      />
      <Button comments={comments} />
    </div>
  );
};
export default Home;
