<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ActorController extends Controller
{
    // CRUD to Actors

	//Create
    public function create(Request $request){
        DB::table('actors')
        ->insert([
            'id' => null,
            'nombre' => $request->nombre,
            'FechaNacimiento' => $request->FechaNacimiento,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);
    }

    //Read
    public function read(){
    	$actors = DB::table('actors')
    	->select('*')
    	->get();

    	return response()->json($actors, 201);
    }

    //Update
    public function edit(Request $request){
    	DB::table('actors')
    	->where('id', '=', $request->id_actor)
    	->update([
    		'nombre' => $request->nombre,
    		'FechaNacimiento' => $request->FechaNacimiento
    	]);
    }

    //Delete
    public function delete($actor_id){
    	DB::table('actors')
    	->where('id', '=', $actor_id)
    	->delete();
    }
}
