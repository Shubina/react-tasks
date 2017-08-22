import React, { Component } from 'react';


class ResultItem extends Component {
    render() {
        return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src="https://randomuser.me/api/portraits/thumb/men/7.jpg" />
                    </div>
                </div>
                <div className="media-body">
                    <div className="media-heading">SOME VIDEO</div>
                </div>
            </div>
        </li>

        )
    }
};
export default ResultItem;