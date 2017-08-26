import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


import Search from './main/Search.js';
import Video from './main/Video.js';
import Results from './main/Results.js';
import YTSearch from 'youtube-api-search';

const API_KEY = `AIzaSyBKFbjgoCW5coTrXhniRE7mOoalHg9NqEE`;

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            searchValue: '',
            itemId: 0
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.chooseItem = this.chooseItem.bind(this);

    }

// Можно ли обойтись и 2 раза не вызывать поиск?

    componentDidMount() {
        YTSearch({key: API_KEY, term: this.state.searchValue}, data => {
            console.log(data);
            return this.setState({data: data})
        });
    }



    handleSearch (e) {
        this.setState({searchValue: e.target.value});
        (debounce( () => {
            return(
            YTSearch({key: API_KEY, term: this.state.searchValue}, data => {
                console.log(data);
                return this.setState({data: data})
            })
            )
        }, 250))();

    }

    chooseItem (e) {
        this.setState({itemId: e.target.closest('li').id});
    }

    render() {
        if (!this.state.data.length) {
            return <div>Loading...</div>;
        }

        return (
            <div className="App">
                <main className="container">
                    <Search 
                        valueInput={this.state.searchValue} 
                        action={this.handleSearch} />
                    <div className="row">
                        <Video dataApi={this.state.data} 
                                id={this.state.itemId} 
                                onChange={this.chooseItem} />
                        <Results dataApi={this.state.data} 
                                    action={this.chooseItem}
                                />
                    </div>
                </main>
                
            </div>
        );
    }
}

export default App;
