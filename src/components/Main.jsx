import React from 'react'
import ComicCard from './ComicCard'

const Main = () => {
    return (
        <>
            <div className='jumbotron'></div>
            <div className='main-black'>
                <div className='container'>
                    <ComicCard />
                </div>
            </div>
        </>
    )
}

export default Main