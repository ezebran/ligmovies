import React from 'react';
import { Link } from 'react-router-dom';
import Movie from './parts/Movie';

const API = 'http://127.0.0.1:8000/api';

class MoviesList extends React.Component {
	

    constructor() {
        super();
        this.state = {
        	movies:[]
        }

    }

    async componentDidMount(){


        const res = await fetch(`${API}/movies/`)
        const resJSON = await res.json()
        console.log(resJSON)
        if (resJSON) {
          this.setState({
            movies: resJSON
          });
        }
    }
 // console.log('this.state' + this.state.movies);

  render() {

  	
    return (
    	<div className="movies-list">
    		<h1>Movies List</h1>
    		<div className="main-content">

    			{
    				this.state.movies.map(movie =>
    					<div className="movie" key={movie.id}>
    						<Movie movie={movie} />
    					</div>
    				)
    			}

    		</div>
    	</div>
    );
  }
}

export default MoviesList;