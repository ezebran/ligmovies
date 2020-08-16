import React from 'react';

function Movie(props){
	return(
		<React.Fragment>
			<a href="#" className="fav">
				<span className="icon-star-empty"></span>
			</a>
			<img src={`http://127.0.0.1:8000/storage/${props.movie.imagen}`} />
			<h4>{props.movie.titulo}</h4>
		</React.Fragment>
	)
}

export default Movie;