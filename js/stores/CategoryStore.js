import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";
import {EventEmitter} from "events";

let _categories = [];

class CategoryStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch(action.actionType) {
        case ActionTypes.RECEIVE_CATEGORIES:
          console.log("3. In Store");
          _categories = action.Categories;
          this.emit("change");
          break;
        default:
          // do nothing
      }
    });
  }

  getAll() {
    return _categories;
  }
}

export default new CategoryStore();
