import { Link, useParams } from 'react-router';
import './Movie.css';
import { useEffect, useState } from 'react';
import { ArrowBigLeft } from 'lucide-react';

export default function Movie() {
    const [movie, setMovie] = useState({ Title: "" });
    const { imdbID } = useParams();

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=18508565&i=${imdbID}`)
            .then(response => response.json())
            .then(data => {
                setMovie(data)
            });
    }, [imdbID]);


    return (
        <>
            <Link to="/movies"><ArrowBigLeft />Retour</Link>
            <div className="movie-card">
                <div className="movie-title">
                    <h1>{movie.Title}</h1>
                    <img src={movie.Poster} alt={movie.Tilte} />
                </div>
            </div>
        </>
    );
}