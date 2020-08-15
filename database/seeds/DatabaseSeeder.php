<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(ActorSeeder::class);
        $this->call(MoviesSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(FavoritesSeeder::class);
    }
}
