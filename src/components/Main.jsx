import React from 'react'
import ListComics from './ListComics'

const Main = () => {
    return (
        <>
            <div className='jumbotron'>
                <h3 className='series-btn'>
                    CURRENT SERIES
                </h3>
            </div>
            <div className='main-black'>
                <div className='display'>
                    <div className='container-card'>
                        <ListComics />
                    </div>
                </div>
                <div className='display-load'>
                    <h3><a className='load-btn' href="">LOAD MORE</a></h3>
                </div>
            </div>
        </>
    )
}

export default Main