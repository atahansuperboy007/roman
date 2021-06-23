import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

function Movie () {
    const link = 'https://image.tmdb.org/t/p/w500'

    const {id} = useParams ()

    const [movie, setMovie] = useState (null)

    useEffect (() => {
        fetch ('https://api.themoviedb.org/3/movie/'+ id +'?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU')
        .then (res => res.json ())
        .then (data => {
            setMovie (data)
        })
    },[])
    if (!movie) return null

    return (
        <div className="movie">
            <img src={link + movie.poster_path} alt="" />
            <div className="movie-text">
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <h5>Средняя оценка фильма: {movie.vote_average}</h5>
                <h6>Дата релиза: {movie.release_date}</h6>
            </div>
        </div>
    )
}

export default Movie