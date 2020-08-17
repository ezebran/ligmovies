import React from 'react';

function MovieCrud(props){
	return(
		<React.Fragment>

		    	<th scope="row">{props.movie.id}</th>
		    	<td>{props.movie.titulo}</td>
		    	<td>{props.movie.nombre}</td>
		    	<td>
		      		<button type="button" class="btn btn-danger">Eliminar</button>
		      		<button type="button" class="btn btn-info">Editar</button>
		    	</td>

		</React.Fragment>
	)
}

export default MovieCrud;