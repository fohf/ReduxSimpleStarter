import React  from 'react';
import ReactDOM from 'react-dom';
import API_KEY from './keys'


// create a new component. this will produce some html
const App = () => {
  return <div>Hi over here!</div>;
}

//create instance referencing div container
const container = document.querySelector(".container")

// take this component's generated html and put it on the page
ReactDOM.render(<App />, container);
