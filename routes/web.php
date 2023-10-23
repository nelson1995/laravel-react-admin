<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
   // dd(Auth::user()->getPermissionsViaRoles()->groupBy('name'));
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified','password.confirm'])->name('dashboard');

Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => ['auth','verified']], function () {
    // roles
    Route::resource('roles', \App\Http\Controllers\Admin\RolesController::class);

    // users
    Route::resource('users', \App\Http\Controllers\Admin\UsersController::class);

    // settings
    Route::resource('settings', \App\Http\Controllers\Admin\SettingsController::class);

    // profile
    Route::group(['prefix' => 'profile'], function(){
        Route::get('/edit', [\App\Http\Controllers\Admin\ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/update', [\App\Http\Controllers\Admin\ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/delete', [\App\Http\Controllers\Admin\ProfileController::class, 'destroy'])->name('profile.destroy');
    });
});


require __DIR__.'/auth.php';

