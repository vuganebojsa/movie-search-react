import React from "react";

const MovieCard = ({movie}) =>{
    return (<>
    <div className='text-center pb-5 pt-3 border border-secondary'>
          <p>{movie.Year}</p>
          <p>{movie.Title}</p>
          <p>{movie.Type}</p>
          <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} 
          alt={movie.Title}/>
        </div>
        
    </>);

}

export default  MovieCard;