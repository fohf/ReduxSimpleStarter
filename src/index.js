import React  from 'react';
import ReactDOM from 'react-dom';

import API_KEY from './api_key';
import SearchBar from './components/search_bar';

// create a new component. this will produce some html
const App = () => {
  return (
      <div>
        <SearchBar />
      </div>
  );
}

//create instance referencing div container
const container = document.querySelector(".container")

// take this component's generated html and put it on the page
ReactDOM.render(<App />, container);
