import { Avatar } from '@mui/material'
import React from 'react'
import './VideoCard.css'


const VideoCard = ({ image, title, channel, viewcount, timestamp, channelImage }) => {
    return (
        <div className='videocard'>
            <img className='videocard__img' src={image} alt="image" />
            <div className='videocard__info'>
                <Avatar
                    className='avatar' alt='' src={channelImage}
                />

                <div className='videocard__text'>
                    <h4>{title}</h4>
                    <p>{channel}</p>

                    <p className='lastpara'>{viewcount} Views . {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard