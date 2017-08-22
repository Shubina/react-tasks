import React from 'react';

const Search = props => {

    const { valueInput, action } = props;


        return (
            <div className="search-bar navbar">
                <input type="text" placeholder="Search" value={valueInput} onChange={action} />
            </div>
        )

};
export default Search;
