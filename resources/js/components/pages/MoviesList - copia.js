import React from 'react';
import { Link } from 'react-router-dom';

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






  render() {
    return (
    	<div className="movies-list">
    		<h1>Movies List</h1>
    		<div className="main-content">
    			<div className="movie">
    				<a href="#" className="fav">
    					<span className="icon-star-empty"></span>
    				</a>
    				<img src="https://dmitryvolkov.me/demo/hotflix2.0/main/img/covers/cover2.jpg" />
    				<h4>The Joker</h4>
    			</div>

    			<div className="movie">
    				<a href="#" className="fav">
    					<span className="icon-star-empty"></span>
    				</a>
    				<img src="https://dmitryvolkov.me/demo/hotflix2.0/main/img/covers/cover3.jpg" />
    				<h4>El angel</h4>
    			</div>

    			<div className="movie">
    				<a href="#" className="fav">
    					<span className="icon-star-empty"></span>
    				</a>
    				<img src="https://dmitryvolkov.me/demo/hotflix2.0/main/img/covers/cover4.jpg" />
    				<h4>Lobo wallstreet</h4>
    			</div>

    			<div className="movie">
    				<a href="#" className="fav">
    					<span className="icon-star-empty"></span>
    				</a>
    				<img src="https://dmitryvolkov.me/demo/hotflix2.0/main/img/covers/cover5.jpg" />
    				<h4>Iron man 2</h4>
    			</div>
    		</div>
    	</div>
    );
  }
}

export default MoviesList;