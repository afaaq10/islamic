import React from 'react'
import TuneIcon from '@mui/icons-material/Tune';

import './Search.css'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

const Search = () => {
    return (
        <div className='search__page'>

            <div className="search__filter">
                <h2>Filter</h2>
                <TuneIcon className="search__filtericon" />

            </div>
            <hr />
            <ChannelRow
                image="https://extension.harvard.edu/wp-content/uploads/sites/8/2020/10/computer-programming.jpg"
                videos={20}
                channel="Afaaq"
                verified
                subscribers="240k"
                description="Welcome to my youtube channel. Explore the field of science and tech here. Happy to see you!"

            />
            <hr />




            <VideoRow
                image="https://i.dawn.com/primary/2018/08/5b714c634708c.jpg"
                channel="Handsome athelete"
                title="Imran Khan"
                subscribers="240k"
                viewcount="11k "
                timestamp="12 days ago"
                description="A great athelete and a handsome hunk!"
            />
            <VideoRow
                image="https://thehackernews.com/images/-Pw_fH3ZPYqw/XQ0txmhMiwI/AAAAAAAA0Qc/BDmyKl70kyEAeVJdxL3PHT8941274A5swCLcBGAs/w0/vlc-media-player-hacking.png"
                channel="Media"
                title="Media players"
                subscribers="240k"
                viewcount="1k "
                timestamp="15 days ago"
                description="Let the music play!"
            />
            <VideoRow
                image="https://images.pexels.com/videos/6964235/adult-antivirus-attack-binary-6964235.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                channel="Tech"
                title="Science and Tech"
                subscribers="240k"
                viewcount="11k "
                timestamp="19 days ago"
                description="Hackers and bakers"
            />
            <VideoRow
                image="https://video-images.vice.com/videos/62/1c/621cf86739e63909fb7a8b11/621cf86739e63909fb7a8b11-1648215961966.jpg?crop=1xw%3A1xh%3Bcenter%2Ccenter&resize=650%3A*&output-quality=50"
                channel="Russians"
                title="WarLords"
                subscribers="40k"
                viewcount="11k "
                timestamp="1 month ago"
                description="War and friends"
            />
            <VideoRow
                image="https://ichef.bbci.co.uk/news/1024/branded_news/32EE/production/_103283031_mediaitem103283029.jpg"
                channel="Daredevil"
                title="Haqqani and co"
                subscribers="24k"
                viewcount="11k "
                timestamp="10 years ago"
                description="Taliban and beyond"
            />
        </div>

    )
}

export default Search