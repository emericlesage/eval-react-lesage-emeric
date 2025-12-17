import { useEffect, useState } from 'react';
import './Movies.css';

export default function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://www.omdbapi.com/?apikey=18508565&s=movie')
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search)
            })
    }, []);

    console.log(movies);

    return (
        <div className="movie-container">
            {movies.map((movie) => (
                <div className="movie-card">
                    <img src={movie.Poster} alt={movie.Title} />
                    <div className="movie-title">
                        {movie.Title}
                    </div>
                </div>
            ))}
        </div>

    );
}   