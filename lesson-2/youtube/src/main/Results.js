import React from 'react';
import ResultItem from './ResultItem.js';

const Results = props => {
   
        const { dataApi, action } = props;
        return (
            <ul className="col-md-4">
                {dataApi.map( (elem, index) => {
                    return (

                    <ResultItem 
                        key={ index }
                        title={elem.snippet.title} 
                        img={elem.snippet.thumbnails.default.url}
                          action={ action}
                         id={ index }
                     />
                );
                })}
            </ul>
        );
    
};


export default Results;