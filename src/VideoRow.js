import React from 'react'
import './VideoRow.css'
const VideoRow = ({ image, title, channel, viewcount, timestamp, subscribers, description }) => {
    return (
        <div className='videorow'>
            <img src={image} alt="" />
            <div className='videorow__text'>
                <h3>{title}</h3>
                <p className='mixedtext'>{channel}. {subscribers}subscribers. {viewcount}views. {timestamp}</p>
                <p className='description'>{description}</p>
            </div>

        </div>
    )
}

export default VideoRow