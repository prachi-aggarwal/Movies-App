import { movies } from "./getMovies";
import React, { Component } from 'react'

export default class Movies extends Component {
  render() {
      let movie=movies.results
       
    return (
        <>
        {
            movie.length==0?
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>:
            <div>
                <h3 className="text-center"><strong>Trending</strong></h3>
            <div>
            {
                movie.map((movieObj)=>{
                    <div className="card movies-card">
             <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}   alt={movieObj.title} className="card-img-top banner-img"/>
      
          <h1 className="card-title banner-title">{movieObj.original_title}</h1>
          <p class="card-text banner-text">{movieObj.overview}</p>
        
      </div>
                })
            }
         </div></div>   

         }
        </>
      
    )
  }
}
