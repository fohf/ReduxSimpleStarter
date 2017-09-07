import React  from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import API_KEY from './api_key';

import SearchBar from './components/search_bar';
console.log(API_KEY);
YTSearch( {key: API_KEY, term: 'surfboards' }, function(data) {console.log(data);} )

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
