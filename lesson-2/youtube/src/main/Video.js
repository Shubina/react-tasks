import React from 'react';


const Video = props => {

    const { videoId, title, description } = props;


    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title="random" name={videoId} src="https://www.youtube.com/embed/-Qwxw11-"></iframe>
            </div>

            <div className="details">
                <div>{title}</div>
                <div>{description}</div>
            </div>
        </div>
    )
};
export default Video;