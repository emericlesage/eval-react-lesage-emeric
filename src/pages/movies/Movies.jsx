import { useEffect, useState } from 'react';
import './Movies.css';
import { useNavigate } from 'react-router';

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch('https://www.omdbapi.com/?apikey=18508565&s=movie')
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search)
            })
    }, []);

    console.log(movies);

    return (
        <div className="movies-container">
            {movies.map((movie) => (
                <div key={movie.imdbID} className="movie-card" onClick={ }>
                    <img src={movie.Poster} alt={movie.Title} />
                    <div className="movie-title">
                        {movie.Title}
                    </div>
                </div>
            ))}
        </div>

    );
}   