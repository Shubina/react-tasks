import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


import Search from './main/Search.js';
import Video from './main/Video.js';
import Results from './main/Results.js';
import YTSearch from 'youtube-api-search';

const API_KEY = `AIzaSyBKFbjgoCW5coTrXhniRE7mOoalHg9NqEE`;

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            searchValue: ''
        };
        this.handleSearch = this.handleSearch.bind(this);

    }

    handleSearch (e) {
        this.setState({searchValue: e.target.value});
        YTSearch({key: API_KEY, term: this.state.searchValue}, data => {
            console.log(data);
            return this.setState({data: data})
        });

    }

    render() {
        console.log (this.state);
        return (
            <div className="App">
                <main className="container">
                    <Search valueInput={this.state.searchValue} action={this.handleSearch} />
                    <div className="row">
                        <Video title={} descriptions={} videoId={} />
                        <Results dataApi={this.state.data} />
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
