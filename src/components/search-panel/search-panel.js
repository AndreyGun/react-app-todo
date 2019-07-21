import React, { Component } from 'react';
import './search-panel.css'

export default class SearchPanel extends Component {

    state = {
        term: ''
    }

    onSearchItem = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchItem(term);
    };

    render() {
        return <input className='search-panel'
                    placeholder="search"
                    value={this.state.term}
                    onChange={ this.onSearchItem }/>;
    }
}