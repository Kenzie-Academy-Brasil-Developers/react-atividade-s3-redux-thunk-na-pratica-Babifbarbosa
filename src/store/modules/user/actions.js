import { ADD_COMMENT } from "../user/actionsTypes";

export const addComment = (updatedUser) => ({
  type: ADD_COMMENT,
  updatedUser,
});
