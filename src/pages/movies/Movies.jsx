import { useEffect, useState } from 'react';
import './Movies.css';
import { Outlet } from 'react-router';
import { Link } from 'react-router';

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
        <div className="movies-container">
            {movies.map((movie) => (
                <Link to={`/movies/${movie.imdbID}`} key={movie.imdbID}>
                    <div className="movie-card" >
                        <img src={movie.Poster} alt={movie.Title} />
                        <div className="movie-title movie-button">
                            {movie.Title}
                        </div>
                    </div>
                </Link>
            ))
            }
        </div >

    );
}   