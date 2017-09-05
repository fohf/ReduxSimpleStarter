import React, {Component} from 'react';

//class component
class SearchBar extends Component {

  //initialize state within class based componenet
  //automatically called within class when instance is rendered
  constructor(props) {
  //super is part of Component that this extends
    super(props);

    //initialize variable term within a new object
    this.state = {term: ''};

    //bind
    this.onInputChange = this.onInputChange.bind(this);
  }

    render() {
      return (
        <div>
          <input onChange={this.onInputChange} />
            Value of the input: {this.state.term}
        </div>
      );
      //alt way of doing this
      //return <input onChange={event => this.setState({ term: event.target.value })} />;
    }

  //do this code whenever something changes within input
    onInputChange(event){
      //console.log(event.target.value)
      this.setState({ term: event.target.value })
    }
  }

export default SearchBar;

/* //functional component
const SearchBar = () =>{
  return <input />;
};
*/
