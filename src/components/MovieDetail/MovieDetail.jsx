import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';

// 4
function MovieDetail() {
    const movie = useSelector(store => store.selectedMovie)
    const genres = useSelector(store => store.genres);
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    
    const toHome = () => {
        history.push('/');
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: movieId });
        dispatch({ type: 'FETCH_MOVIE_GENRES', payload: movieId });
    }, [movieId])

    return (
        <div>
                            {/* <main key={genres.id}></main> */}

            <h1>{movieId}</h1>
            <h3> {movie.title} </h3>
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.description}</p>
            {/* <li>genreToDisplay</li> */}
            <ul>
                {
                    genres.map(genreToDisplay => (<li>{genreToDisplay.name}</li>))
                }
            </ul>
            {/* {JSON.stringify(genres)} */}
            <br></br>
            <button onClick={toHome}>Back to List</button>
        </div>
    )
}

export default MovieDetail;