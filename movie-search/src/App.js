import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=c30ee8ab';
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() =>{
    searchMovies('Superman');
  }, []);
  return (
    <>
    <div>
      <h1 className='text-center my-2'>Movie Search</h1>
      <div className='text-center mt-3'>
        <input type='text' placeholder='Search for movies'
          value = {searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type='button'
          onClick={() => searchMovies(searchTerm)}
        >Search</button>
      </div>
      { movies?.length > 0 ?
        (
        <div className='container p-3'>
          {
            movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))
          }
        </div>
        ) : 
        (
          <div><h2>No Movies found</h2></div>
        )
      }
    </div>
    </>
  );
}

export default App;
