import { createStore, combineReducers } from "redux";
import postsReducer from "../Reducer/postsReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      posts: postsReducer,
    })
  );
  return store;
};
export default configureStore;
