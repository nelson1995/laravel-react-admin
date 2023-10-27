<?php

use App\Models\User;
use Illuminate\Support\Facades\Artisan;

test('user can authenticate with the right email and password', function(){
    $user = User::factory()->create();
    $this->artisan('passport:install');

    $response = $this->post('api/v1/login', [
      'email' => $user->email,
      'password' => 'password'
    ]);

    $response->assertStatus(200);
});

test('user cannot authenticate with wrong password', function(){
    $user = User::factory()->create();
    $this->artisan('passport:install');

    $response = $this->post('api/v1/login', [
      'email' => $user->email,
      'password' => 'wrong-password'
    ]);

    $response->assertStatus(401);
});

test('user can authenticate with api token', function(){
    $user = User::factory()->create();
    $user->api_token = generateApiToken($user->email);
    $user->save();
    
    $this->artisan('passport:install');
    
    $response = $this->post('api/v1/login-with-api-token', [
      'apiToken' => $user->api_token,
    ]);

    $response->assertStatus(200);
});

test('user fail to authenticate with api token', function(){
  $user = User::factory()->create();
  $user->api_token = generateApiToken($user->email);
  $user->save();
  
  $this->artisan('passport:install');
  
  $response = $this->post('api/v1/login-with-api-token', [
    'apiToken' => 'wrong-api-token',
  ]);

  $response->assertStatus(401);
});
