import ComicCard from "./ComicCard";
import comics from "../../comics";
import React from 'react'

function ListComics() {
    return (
        <>
            <ComicCard series={comics[0].series} img={comics[0].thumb} />
            <ComicCard series={comics[1].series} img={comics[1].thumb} />
            <ComicCard series={comics[2].series} img={comics[2].thumb} />
            <ComicCard series={comics[3].series} img={comics[3].thumb} />
            <ComicCard series={comics[4].series} img={comics[5].thumb} />
            <ComicCard series={comics[5].series} img={comics[5].thumb} />
            <ComicCard series={comics[6].series} img={comics[6].thumb} />
            <ComicCard series={comics[7].series} img={comics[7].thumb} />
            <ComicCard series={comics[8].series} img={comics[8].thumb} />
            <ComicCard series={comics[9].series} img={comics[9].thumb} />
            <ComicCard series={comics[10].series} img={comics[10].thumb} />
            <ComicCard series={comics[11].series} img={comics[11].thumb} />
        </>
    )
}

export default ListComics

