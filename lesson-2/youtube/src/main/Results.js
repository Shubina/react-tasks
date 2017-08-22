import React, { Component } from 'react';
import ResultItem from './ResultItem.js';

class Results extends Component {


    render() {
    	const { dataApi, chooseItem } = this.props;
        return (
            <ul>
            	this.props.dataApi.map( (item, index) => {
            	return (
            		<ResultItem 
            			title={item.snippet.title} 
            			descr={item.snippet.description}
            			img={item.snippet.thumbnails.default}
            			onClick={chooseItem}
    				 />
        			)
    			})
            </ul>
        )
    }
};
export default Results;