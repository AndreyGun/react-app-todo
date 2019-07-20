import React from 'react';
import './search-panel.css'

const SearchPanel = () => {
    const searchText = 'search';
    
    return <input className='search-panel'
        placeholder={searchText}/>;
}

export default SearchPanel;