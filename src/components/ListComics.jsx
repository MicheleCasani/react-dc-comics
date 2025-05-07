import ComicCard from "./ComicCard";
import comics from "../../comics";
import React from 'react'

let comicsList = comics

function ListComics() {

    return (
        <>
            {comicsList.map((product) => (
                <ComicCard key={product.id} img={product.thumb}
                    series={product.series} />
            ))}
        </>
    )
}

export default ListComics

