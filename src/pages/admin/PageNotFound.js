import React from 'react'
import img from '../../assets/404-page.jpg'

const PageNotFound = () => {
    return (
        <div
            style={{ width: "100%", backgroundColor: "white" }}
        >
            <img style={{ width: '100%', height: 'auto' }} alt='' src={img}></img>
        </div>
    )
}

export default PageNotFound