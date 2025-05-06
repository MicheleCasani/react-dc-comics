import React from 'react'

function ComicCard(props) {
    return (
        <div className='card'>
            <div className='card-body'>
                <img className='img-card' src={props.img} alt="" />
                <div className='color-white'> {props.series}</div>
            </div>
        </div>
    )
}

export default ComicCard