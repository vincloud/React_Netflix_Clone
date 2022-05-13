import React from 'react'
import instance from '../instance'
import request from '../request'
import { useState, useEffect } from 'react'
import './Banner.css'

const base_url = "https://image.tmdb.org/t/p/original/"
function Banner() {

    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const result = await instance.get(request.fetchTrending);
            setMovie(
                result.data.results[
                Math.floor(Math.random() * result.data.results.length - 1)
                ]
            )
        }
        fetchData()
    }, [])

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "...." : str 
    }
    console.log("My movie", movie);
    return (
        <div>
            <header
                className='banner'
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${base_url}${movie.backdrop_path})`,
                    backgroundPosition: 'center center'
                }}>
                <div className='banner_contents' >
                    <h1 className='banner_title'>
                        {movie.title || movie.name || movie.original_name}
                    </h1>
                     <div className="banner_buttons">
                         <button className="banner_button">Play</button>
                         <button className="banner_button">More Info</button>
                     </div>
                    <h1 className="banner_description">
                        {truncate(movie.overview,150)}
                    </h1>
                </div>
            </header>
        </div>
    )
}

export default Banner
