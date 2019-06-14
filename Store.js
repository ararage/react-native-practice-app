import { createStore } from "redux";
import reducer from "./reducers/Videos";

const store = createStore(reducer, {
  suggestionList: [],
  categoryList: []
});

export default store;
