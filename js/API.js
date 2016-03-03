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
    // Ajax request to read /2/categories
    get({
    	url:"https://api.meetup.com/2/categories",
    	dataType: 'jsonp',
    	data: {key:'27547c311f512717577a20243e541435'}
    }).done(resp => {
      ServerActions.receiveCategories(resp);
    });
  }
};

export default API;
