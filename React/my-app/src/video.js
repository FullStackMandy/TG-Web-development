import React from 'react'
//import ReactPlayer from 'react-player'
import video from '../src/fluid.mp4';
import './shared.css';
import './video.css';

function Video() {
    return (
        <div className='container player-wrapper'>
            <video className='background' src={video} autoPlay muted loop></video>
            <header class="viewport-header">
                <h6>Mandy Tentij</h6>
                <h1>Jr. Frontend</h1>
                <h1>Developer</h1>
                <h6>Portfolio 2020</h6>
            </header>


            {/* {<ReactPlayer
                    className='react-player fixed-bottom'
                    url={video}
                    width='100%'
                    height='100%'
                    controls={true}

                />} */}
        </div >
    )
}


export default Video;