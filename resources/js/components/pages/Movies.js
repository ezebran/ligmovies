import React from 'react';
import { Link } from 'react-router-dom';

import MovieCrud from './parts/MovieCrud';

const API = 'http://127.0.0.1:8000/api';

class Movies extends React.Component {

    constructor() {
        super();
        this.state = {
        	moviesCrud:[]
        }

    }

    async componentDidMount(){


        const res = await fetch(`${API}/movies/`)
        const resJSON = await res.json()
        console.log(resJSON)
        if (resJSON) {
          this.setState({
            moviesCrud: resJSON
          });
        }
    }

  render() {
    return (
     	<div className="movies-crud">
    		<h1>Movies List</h1>
    		<div className="main-content">

				<table className="table table-striped">
				  <thead>
				    <tr>
				      <th scope="col">ID</th>
				      <th scope="col">Titulo</th>
				      <th scope="col">Actor Principal</th>
				      <th scope="col">Accion</th>
				    </tr>
				  </thead>
				  <tbody>


				    
    			{
    				this.state.moviesCrud.map(movie =>
    					<tr key={movie.id}>
    						<MovieCrud movie={movie} />
    					</tr>
    				)
    			}

				  </tbody>
				</table>
    		</div>
    	</div>
    );
  }
}

export default Movies;