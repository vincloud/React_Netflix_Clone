import React from 'react'
import instance from '../instance'
import { useState, useEffect } from 'react'
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original/"
function Row({ title, fetchUrl, isLarge }) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchUrl)
            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchUrl])
    console.log(movies);
    return (
        <div className="row" >
            <h2>{title}</h2>
            <div className="row_posters" >
                {movies.map((movie) => (
                    <img className={`row_poster ${isLarge && "row_posterLarge"}`}
                        key={movie.id}
                        alt={movie.name}
                        src={`${base_url}${isLarge?movie.poster_path:movie.backdrop_path}`} />
                ))}
            </div>
        </div>
    )
}

export default Row
