import React, { Component } from 'react';
import SearchResults from './containers/search_results';
import SearchPanel from './containers/search_panel';
import './search.css';

class SearchPage extends Component {
    render(){
        return (
            <div className="container-fluid mt-2 m-3">
                <SearchPanel />
                <div className="celeb-list">
                <SearchResults/>
                </div>
            </div>
        );
    }
}

export default SearchPage;
