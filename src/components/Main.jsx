import React from 'react'
import ListComics from './ListComics'

const Main = () => {
    return (
        <>
            <div className='jumbotron'></div>
            <div className='main-black'>
                <div className='container-card'>
                    <ListComics />
                </div>
            </div>
        </>
    )
}

export default Main