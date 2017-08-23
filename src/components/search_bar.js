import React, {Component} from 'react';

//class component
class SearchBar extends Component {

  //initialize state within class based componenet
  //automatically called within class when rendered
  constructor(props) {
  //part of Component that this extends
    super(props);

    //initialize variable term within a new object
    this.state = {term: ''};
  }

    render() {
      return <input onChange={this.onInputChange} />;
    }

  //do this code whenever something changes within input
    onInputChange(event){
      console.log(event.target.value)
    }
  }

export default SearchBar;

/* //functional component
const SearchBar = () =>{
  return <input />;
};
*/
