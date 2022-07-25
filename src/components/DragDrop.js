import React, { useState } from 'react'
import '../App.css'
import Pictures from './Pictures'
import { useDrop } from 'react-dnd'

const picture = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 2,
        url: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/aloe-girl-hd-Best-Dp-Profile-Images-For-Instagram-pics.gif"
    },
    {
        id: 3,
        url: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/aloe-girl-hd-Best-Dp-Profile-Images-For-Instagram-pics.gif"

    }
]

const DragDrop = () => {
    const [board, setBoard] = useState([])

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => setImage(item.id),
        collect: (monitor) => (
            {
                isOver: !!monitor.isOver()
            }
        ),

    }))


    const setImage = (id) => {

        const newList = picture.filter((pc) => id == pc.id)
        // console.log(newList)
        // console.log(newList[0])

        setBoard((board) => [...board, newList[0]])

        // console.log(newList[0].url)

    }
    return (
        <>
            <div className='picture'>Hi</div>

            <div style={{ display: 'flex' }}>


                {picture.map((pic) => { return <Pictures id={pic.id} image={pic.url} /> })}
            </div>

            <div className='board' ref={drop}>
                {board.map((pic) => { return <Pictures id={pic.id} image={pic.url} /> })}

            </div>

        </>
    )
}

export default DragDrop