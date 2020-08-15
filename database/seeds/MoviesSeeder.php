<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MoviesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('movies')->insert([
            'id' => null,
            'titulo' => 'Joker',
            'year' => 2019,
            'duracion' => '01:55',
            'sinopsis' => 'Una pelicula basada en la historia del joker',
            'imagen' => 'joker.jpg',
            'ActorPrincipalID' => 1,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);

        DB::table('movies')->insert([
            'id' => null,
            'titulo' => 'El angel',
            'year' => 2018,
            'duracion' => '02:55',
            'sinopsis' => 'Una pelicula situada en los años 70s',
            'imagen' => 'angel.jpg',
            'ActorPrincipalID' => 2,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);

        DB::table('movies')->insert([
            'id' => null,
            'titulo' => 'El lobo de wallstreet',
            'year' => 2018,
            'duracion' => '02:55',
            'sinopsis' => 'Una pelicula basada en wallstreet',
            'imagen' => 'lobo.jpg',
            'ActorPrincipalID' => 3,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);

        DB::table('movies')->insert([
            'id' => null,
            'titulo' => 'Iron Man 2',
            'year' => 2011,
            'duracion' => '02:55',
            'sinopsis' => 'Una pelicula de marvel basado en iron man',
            'imagen' => 'ironman.jpg',
            'ActorPrincipalID' => 4,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);
    }
}
