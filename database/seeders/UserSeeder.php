<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $super = User::create([
            'name' => 'Super Admin',
            'email' => 'store@serviciospeninsula.xyz',
            'nickname'=>'nickname1',
            'email_verified_at'=>'2021-06-01 19:07:38',
            'password' => Hash::make('serviciospeninsula12'),


        ]);
        //$super->assignRole('Super-Admin');
         $super2 = User::create([
            'name' => 'Carlos Ramirez',
            'email' => 'carlosramirez@mymexicanshop.com',
            'nickname'=>'nickname2',
            'email_verified_at'=>'2021-06-01 19:07:38',
            'password' => Hash::make('Secret12'),


        ]);
        //$super2->assignRole('Admin');

        $super3 = User::create([
            'name' => 'Lulu Martinez',

            'email' => 'lulumartinez@mymexicanshop.com',
            'nickname'=>'nickname3',
            'email_verified_at'=>'2021-06-01 19:07:38',
            'password' => Hash::make('Secret12'),


        ]);
       // $super3->assignRole('Admin');

        $super4 = User::create([
            'name' => 'Uriel Esqueda',

            'email' => 'urielesqueda@mymexicanshop.com',
            'nickname'=>'nickname4',
            'email_verified_at'=>'2021-06-01 19:07:38',
            'password' => Hash::make('Secret12'),


        ]);
     //   $super4->assignRole(
    }
}
