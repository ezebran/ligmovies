<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Actors CRUD
//Create
Route::post('/actor/create','ActorController@create');

//Read
Route::get('/actores','ActorController@read');

//Update
Route::post('/actor/edit','ActorController@edit');

//Delete
Route::delete('/actor/delete/{actor_id}','ActorController@delete');


//Movies CRUD
//Create
Route::post('/movie/create','MovieController@create');

//Read
Route::get('/movies','MovieController@read');

//Update
Route::post('/movie/edit','MovieController@edit');

//Delete
Route::delete('/movie/delete/{movie_id}','MovieController@delete');


//Favorites
//Create
Route::post('/favorite/create','FavoriteController@create');

//Read
Route::get('/favorites/{user_id}','FavoriteController@read');

//Delete
Route::delete('/favorite/delete/{favorite_id}','FavoriteController@delete');