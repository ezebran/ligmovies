import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button ,Modal, Form, Col } from 'react-bootstrap';
import MovieCrud from './parts/MovieCrud';

const API = 'http://127.0.0.1:8000/api';

class Movies extends React.Component {

    constructor() {
        super();
        this.state = {
        	moviesCrud:[],
        	show:false,
            movieSelect:{},
            actores:[]
        }
        this.handleModal = this.handleModal.bind(this);
        this.handleDeleteMovie = this.handleDeleteMovie.bind(this);
        this.editMovie = this.editMovie.bind(this);
    }

    editMovie(){
        console.log(this._titulo.value)
    }

    handleModal(movieId){

        var movieSel = {}

        this.state.moviesCrud.map(movie => {
            if(movie.id == movieId){
                movieSel = {...movie}
            }
        })

    	this.setState({show:!this.state.show, movieSelect: {...movieSel}})
    }

    handleDeleteMovie(movieId){

	    //Delete movie from state
    	let newMovies = []
    	this.state.moviesCrud.map(movie => {
	        if(movie.id != movieId){
	        	newMovies.push(movie)
	        }
    	})
	    this.setState({
	    	moviesCrud: newMovies
	    });

        axios.delete(`${API}/movie/delete/${movieId}`)

    }

    async componentDidMount(){


        const res = await fetch(`${API}/movies/`)
        const resJSON = await res.json()
        if (resJSON) {
          this.setState({
            moviesCrud: resJSON
          });
        }

        const resActors = await fetch(`${API}/actores/`)
        const resJSONactors = await resActors.json()
        if (resJSONactors) {
          this.setState({
            actores: resJSONactors
          });
        }
    }

  render() {
    return (
    	<React.Fragment>

    		<Modal show={this.state.show} onHide={()=>{this.handleModal()}}>
    			<Modal.Header closeButton>Editar informacion de {this.state.movieSelect.titulo}</Modal.Header>
    			<Modal.Body>




    				<Form onSubmit={this.editMovie}>

                        <Form.Group>
                          <Form.Control type="text" ref={input => (this._titulo = input)} placeholder="Titulo"  />
                          <br />
                          <Form.Row>
                            <Col>
                              <Form.Control ref={input => (this._year = input)} placeholder="Año"  />
                            </Col>
                            <Col>
                              <Form.Control ref={input => (this._duracion = input)} placeholder="Duracion" />
                            </Col>
                          </Form.Row>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Example select</Form.Label>
                            <Form.Control as="select" ref={input => (this._idActor = input)}>
                                {
                                    this.state.actores.map(actor => 
                                        <option value={actor.id}>{actor.nombre}</option>
                                    )
                                }

                            </Form.Control>
                          </Form.Group>

                          <Form.Group>
                            <Form.Label >Sinopsis de la pelicula..</Form.Label>
                            <Form.Control as="textarea" rows="3" ref={input => (this._sinopsis = input)} />
                          </Form.Group>

                        </Form.Group>


                      <Button variant="primary" type="submit">
                        Enviar
                      </Button>
                        <Button onClick={()=>{this.handleModal()}} variant="dark">
                            Cancelar
                        </Button>
                    </Form>
    			</Modal.Body>
    		</Modal>


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
						    	<th scope="row">{movie.id}</th>
						    	<td>{movie.titulo}</td>
						    	<td>{movie.nombre}</td>
						    	<td>
						    		<button type="button" onClick={()=>{this.handleDeleteMovie(movie.id)}} className="btn btn-danger">Eliminar</button>
						      		<Button onClick={()=>{this.handleModal(movie.id)}}>Editar</Button>
						    	</td>
	    					</tr>
	    				)
	    			}

					  </tbody>
					</table>
	    		</div>
	    	</div>
    	</React.Fragment>
    );
  }
}

export default Movies;