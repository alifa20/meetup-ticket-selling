import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let ServerActions = {
  receiveLinks(links) {
    console.log("2. In ServerActions");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_LINKS,
      links
    });
  },
  receiveCategories(cats) {
    console.log("2. In ServerActions");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_CATEGORIES,
      cats
    });
  }
};

export default ServerActions;
