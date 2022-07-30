import React from 'react'
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/CheckCircleOutline';
import "./ChannelRow.css"
import { useParams } from 'react-router-dom';


const ChannelRow = ({ image, videos, verified, subscribers, description }) => {

    const { searchTerm } = useParams()


    return (
        <div className='channelrow'>

            <Avatar src={image} className="channelrow__logo" />

            <div className="channelrow__text">
                <h4 >{searchTerm} {verified && <VerifiedIcon style={{
                    backgroundColor: "lightblue", borderRadius: "28px", width
                        : "15px", height: "15px"

                }} />}</h4>
                <p>{subscribers} subscribers. {videos} Videos</p>
                <p> {description}</p>


            </div>

        </div>
    )
}

export default ChannelRow