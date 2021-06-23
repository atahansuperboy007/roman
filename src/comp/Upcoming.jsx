import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
function Upcoming(props) {
    const [movies, setMovie] = useState([])

    useEffect(() => {
      fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1")
        .then(res => res.json())
        .then(data => {
          console.log(data.results)
          setMovie(data.results)
        })}, [] )
  
    return (
      <div className="upc-list">
        {movies.map((item) => (
          <MovieItem data={item} />
        ))
        }
      </div>
    );
  }
  
  
  export default Upcoming;