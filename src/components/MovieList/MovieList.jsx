import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);
// 3
const displayMovie = (movieToDisplay) => {
    console.log(movieToDisplay);
    // dispatch is how we get data 
    // in to (redux) & in to (sagas)
    dispatch({ type: 'SET_MOVIE_DETAILS', payload: movieToDisplay })
    // 7 moves to next page
    history.push('/detail');
}

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {/* Movies is an Array */}
                {movies.map(movie => {
                    // for each movie in the array,
                    // display it on the DOM
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            {/* 2  */}
                            <img onClick={(event) => displayMovie(movie)} src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;