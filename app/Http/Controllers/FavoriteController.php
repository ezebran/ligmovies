<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;

class FavoriteController extends Controller
{
	//Create
    public function create(Request $request){
        DB::table('favorites')
        ->insert([
            'id' => null,
            'user_id' => $request->user_id,
            'movie_id' => $request->movie_id,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);
    }

    //Read
    public function read($user_id){
    	$favorites = DB::table('favorites')
    	->where('user_id', '=', $user_id)
    	->select('*')
    	->get();

    	return response()->json($favorites, 201);
    }

    //Delete
    public function delete($favorite_id){
    	DB::table('favorites')
    	->where('id', '=', $favorite_id)
    	->delete();
    }
}
