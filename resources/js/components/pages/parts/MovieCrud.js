import React from 'react';
import { Button ,Modal } from 'react-bootstrap';

function MovieCrud(props){


	return(
		<React.Fragment>

		    	<th scope="row">{props.movie.id}</th>
		    	<td>{props.movie.titulo}</td>
		    	<td>{props.movie.nombre}</td>
		    	<td>
		      		<Button onClick={()=>{this.props.handleModal()}}>Eliminar</Button>
		      		<button type="button" className="btn btn-info">Editar</button>
		    	</td>

		</React.Fragment>
	)
}

export default MovieCrud;