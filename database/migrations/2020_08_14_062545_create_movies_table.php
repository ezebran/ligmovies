<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMoviesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->increments('id');
            $table->string('titulo');
            $table->integer('year');
            $table->string('duracion');
            $table->string('sinopsis');
            $table->string('imagen');
            $table->integer('ActorPrincipalID')->unsigned();
            $table->foreign('ActorPrincipalID')->references('id')->on('actors');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('movies');
    }
}
