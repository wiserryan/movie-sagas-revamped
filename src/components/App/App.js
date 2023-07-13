import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
// 5
import MovieDetail from '../MovieDetail/MovieDetail';


function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      {/* history is not available here */}
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
      {/* 6 */}
      <Route exact path="/detail">
        <MovieDetail />
      </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
