import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'
const RecommendedVideos = () => {
    return (
        <div className='recommended-videos'>
            <h2>Recommended</h2>
            <div className="recommended__videos">
                <VideoCard image="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                    channel="Books" title="Reading a book" channelImage="https://www.philanthropy.org.au/images/site/misc/About_Us/Initiatives/2016/The+Channel+Logo.png"
                    viewcount="2M" timestamp="1 day ago"
                />
                <VideoCard image="https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=600"
                    channel="Programming" title="Coding and stuff" channelImage="https://assets.entrepreneur.com/content/3x2/2000/20160628101609-Coding.jpeg"
                    viewcount="5M" timestamp="19 days ago"



                />
                <VideoCard image="https://thumbs.dreamstime.com/b/picturesque-autumn-scenery-santa-maddalena-village-church-road-colorful-trees-meadows-foreground-mountain-peaks-159426189.jpg"
                    title="Nature"
                    channel="Scenery"
                    channelImage="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/03/acj-2003-beautiful-landscapes-around-the-world.jpg"
                    viewcount="640K" timestamp="1 month ago"
                />
                <VideoCard image="https://images.pexels.com/photos/5483075/pexels-photo-5483075.jpeg?auto=compress&cs=tinysrgb&w=600"
                    channel="Technology" title="All about tech" channelImage="https://www.philanthropy.org.au/images/site/misc/About_Us/Initiatives/2016/The+Channel+Logo.png"
                    viewcount="2M" timestamp="2 days ago"
                />
                <VideoCard image="https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=600"
                    channel="Business" title="Financing"
                    channelImage="https://www.loyensloeff.com/contentassets/7ca5076ac555499c84ceedf4553233de/money-2.jpg?width=580&height=387"
                    viewcount="22K" timestamp="10 days ago"
                />
                <VideoCard image="https://images.pexels.com/photos/5952708/pexels-photo-5952708.jpeg?auto=compress&cs=tinysrgb&w=600"
                    channel="Dark web" title="Hacking"
                    channelImage="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png"
                    viewcount="8K" timestamp="15 days ago"
                />
                <VideoCard
                    image="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
                    channel="Sports" title="CR7"
                    channelImage="https://image.shutterstock.com/image-vector/portugal-flag-vector-graphic-rectangle-260nw-1799832268.jpg"
                    viewcount="10K" timestamp="13 days ago"
                />
                <VideoCard
                    image="https://i.dawn.com/primary/2018/08/5b714c634708c.jpg"
                    channel="Handsome athelete" title="Imran Khan"
                    channelImage="https://www.icc-cricket.com/resources/ver/i/elements/default-thumbnail.jpg"
                    viewcount="11K" timestamp="12 days ago"
                />

            </div>
        </div>
    )
}

export default RecommendedVideos