<?php

use App\Models\User;
use Illuminate\Support\Facades\Hash;

test('user can register', function(){
    $this->artisan('passport:install');

    $response = $this->post('api/v1/register', [
        'name' => 'Nelson',
        'email' => 'nelson@mail.com',
        'password' => 'nelson246',
        'password_confirmation' => 'nelson246',
    ]);

    $response->assertStatus(201);
});

test('user failed to register with missing details', function(){
    $this->artisan('passport:install');

    $response = $this->post('api/v1/register', [
        'name' => 'Nelson',
        'password' => 'nelson246',
        'password_confirmation' => 'nelson246',
    ]);

    $response->assertStatus(422);
});
