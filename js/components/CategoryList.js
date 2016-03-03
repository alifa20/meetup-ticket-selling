import React from "react";
import API from "../API";
import CategoryStore from "../stores/CategoryStore";

let _getAppState = () => {
  return { cats: CategoryStore.getAll() };
};

export default class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = _getAppState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    API.fetchCategories();
    CategoryStore.on("change", this.onChange)
  }
  componentWillUnmount() {
    CategoryStore.removeListener("change", this.onChange);
  }
  onChange() {
    console.log("4. In the View");
    this.setState(_getAppState());
  }
  render() {
    let content = null;
    if (this.state.cats.results) {
    	content = this.state.cats.results.map(cat => {
		      return <li key={cat.id}>
		               <a href='#'>{cat.name}</a>
		             </li>;
             });
    }
    
    
    return (
      <div>
        <h3>Cats</h3>
        <ul>
          {content}
        </ul>
      </div>
    );
  }
}
