<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => ['cors', 'json.response']], function(){
    // dd("Hello world!");
    Route::post('/register', [\App\Http\Controllers\Auth\Api\V1\ApiController::class, 'register'])->name('register.api');
    Route::post('/login', [\App\Http\Controllers\Auth\Api\V1\ApiController::class, 'login'])->name('login.api');
    Route::post('/login-with-api-token', [\App\Http\Controllers\Auth\Api\V1\ApiController::class, 'loginWithApiToken']);
});

Route::middleware('auth:api')->group(function(){
    // dd("Hello world!");
    Route::apiResource('users', \App\Http\Controllers\Api\V1\UsersController::class);
    Route::post('/logout', [\App\Http\Controllers\Auth\Api\V1\ApiController::class, 'logout'])->name('logout.api');
});
