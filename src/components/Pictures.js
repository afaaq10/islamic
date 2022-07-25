import React from 'react'
import { useDrag } from 'react-dnd'
const Pictures = ({ id, image }) => {
    const [{ isDragging }, drag] = useDrag(() => (
        {
            item: { id: id },
            type: "image",
            collect: (monitor) => (
                {
                    isDragging: !!monitor.isDragging()
                }
            ),

        }
    ))
    return (
        <>
            {/* <div>{id}</div> */}

            <img ref={drag} src={image} alt="user image" style={{ border: isDragging ? "5px dotted pink" : "0px", width: "80px", height: "90px", margin: "8px" }} />


        </>
    )
}

export default Pictures

