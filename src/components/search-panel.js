import React from 'react';
import './search-panel.css'

const SearchPanel = () => {
    const searchText = 'search';
    const searchStyle = {
        fontSize: '2rem'
    }
    return <input className='search-panel'
        style={searchStyle}
        placeholder={searchText}/>;
}

export default SearchPanel;