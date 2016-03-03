import {get} from "jquery";
import ServerActions from "./actions/ServerActions";

let API = {
  fetchLinks() {
    console.log("1. In API");
    // Ajax request to read /data/links
    get("/data/links").done(resp => {
      ServerActions.receiveLinks(resp);
    });
  },
  fetchCategories() {
    console.log("1. In API");
    // Ajax request to read /data/links
    get("https://api.meetup.com/2/categories").done(resp => {
      ServerActions.receiveCategories(resp);
    });
  }
};

export default API;
