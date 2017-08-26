import React from 'react';


const Video = props => {

    const { dataApi, id } = props;

    let srcVideo = `https://www.youtube.com/embed/${dataApi[id].id.videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                    title="random"
                    src={srcVideo} 
                />
            </div>

            <div className="details">
                <div>{dataApi[id].snippet.title}</div>
                <div>{dataApi[id].snippet.description}</div>
            </div>
        </div>
    )
};
export default Video;