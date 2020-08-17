<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MovieController extends Controller
{
    // CRUD to Actors

	//Create
    public function create(Request $request){
        DB::table('movies')
        ->insert([
            'id' => null,
            'titulo' => $request->titulo,
            'year' => $request->year,
            'duracion' => $request->duracion,
            'sinopsis' => $request->sinopsis,
            'imagen' => $request->imagen,
            'ActorPrincipalID' => $request->ActorPrincipalID,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);
    }

    //Read
    public function read(){
    	$movies = DB::table('movies')
        ->join('actors', 'movies.ActorPrincipalID', '=', 'actors.id')
    	->select('movies.*','actors.nombre')
    	->get();

    	return response()->json($movies, 201);
    }

    // //Update
    public function edit(Request $request){
    	DB::table('movies')
    	->where('id', '=', $request->id_movie)
    	->update([
            'titulo' => $request->titulo,
            'year' => $request->year,
            'duracion' => $request->duracion,
            'sinopsis' => $request->sinopsis,
            'imagen' => $request->imagen,
            'ActorPrincipalID' => $request->ActorPrincipalID
    	]);
    }

    //Delete
    public function delete($movie_id){
    	DB::table('movies')
    	->where('id', '=', $movie_id)
    	->delete();
    }
}
