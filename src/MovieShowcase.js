import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((item, index) => <MovieCard key={index} title={item.title} genres={item.genres} IMDBRating={item.IMDBRating} poster={item.poster}/>)
  }

  render() {
    
    return (
      <div id="movie-showcase">

        {this.generateMovieCards()}
        
      </div>
    )
  }
}
