import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

// 4
function MovieDetail() {
    const movie = useSelector(store => store.selectedMovie)
    const genres = useSelector(store => store.genres);
    const { movieId } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: movieId });
    }, [movieId])

    return (
        <div>
            <h1>{movieId}</h1>
            <h3> {movie.title} </h3>
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.description}</p>
            <ul>
                {
                    genres.map(genreToDisplay => <li>{genreToDisplay.name}</li>)
                }
            </ul>
        </div>
    )
}

export default MovieDetail;