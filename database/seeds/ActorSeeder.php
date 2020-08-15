<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ActorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('actors')->insert([
          	'id' => null,
            'nombre' => 'Joaquin Phoenix',
            'FechaNacimiento' => '1979-05-09',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);

        DB::table('actors')->insert([
          	'id' => null,
            'nombre' => 'Lorenzo Ferro',
            'FechaNacimiento' => '1999-06-19',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);

        DB::table('actors')->insert([
          	'id' => null,
            'nombre' => 'Leonardo DiCaprio',
            'FechaNacimiento' => '1974-06-19',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);

        DB::table('actors')->insert([
          	'id' => null,
            'nombre' => 'Robert Downey Jr',
            'FechaNacimiento' => '1965-01-12',
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ]);
	}
}
