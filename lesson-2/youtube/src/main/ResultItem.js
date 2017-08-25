import React from 'react';


const ResultItem = props => {

    const { title, img, id, action } = props;

    return (
    <li className="list-group-item" id={id} onClick={action} >
        <div className="video-list media">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={img} alt="" />
                </div>
            </div>
            <div className="media-body">
                <div className="media-heading">{title}</div>
            </div>
        </div>
    </li>

    )
};
export default ResultItem;