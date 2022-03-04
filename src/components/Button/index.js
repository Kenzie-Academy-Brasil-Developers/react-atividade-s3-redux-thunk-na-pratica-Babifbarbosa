import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";

export const Button = ({ comments }) => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(addCommentThunk(comments));
  return <button onClick={() => handleClick()}>new comment</button>;
};
