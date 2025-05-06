import React from 'react'

function ComicCard(props) {
    return (
        <div className='card'>
            <div className='card-body'>
                <img src={props.img} alt="" />
                <div> {props.title}</div>
            </div>
        </div>
    )
}

export default ComicCard