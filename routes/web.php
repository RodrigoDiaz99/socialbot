<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');
//Route::get('twiter/dashboard', 'TwitterController@index')->name('twitter.index');
Route::get('/twitter/dashboard','TwitterController@index')->name('twitter.index');
//Route::get('index/twitter', 'TwitterController@index')->name('index.twitter');
Route::get('/twitter','TwitterController@login')->name('login.twitter');
Route::get('/twitter/cbk','TwitterController@cbk')->name('cbk');
Route::post('/twitter/post','TwitterController@twitter_post')->name('twitter.post');
