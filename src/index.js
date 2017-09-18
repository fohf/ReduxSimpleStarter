import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import API_KEY from './api_key';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

// create a new component. this will produce some html
class App extends Component {

constructor(props){
    super(props);

    this.state ={ videos: [] }

    YTSearch( {key: API_KEY, term: 'smurfboards' }, (videos) => {
      this.setState({ videos });
      //this.setState({ videos: videos });  //only works when key and variable name are the same
    } );
}

  render(){
    return (
        <div>
          <SearchBar />
          <VideoList videos={ this.state.videos} />
        </div>
    );
  }
}

//create instance referencing div container
const container = document.querySelector(".container")

// take this component's generated html and put it on the page
ReactDOM.render(<App />, container);
