<?php

use App\Models\User;

test('authenticated user can get a list of all users', function(){
    $user = User::factory()->create();
    $this->artisan('passport:install');

    $response = $this->actingAs($user)->get('api/v1/users');

    $response->assertStatus(200);
});

test('unauthenticated user can get a list of all users', function(){
    $user = User::factory()->create();
    $this->artisan('passport:install');

    $response = $this->actingAs($user)->get('api/v1/users');

    $response->assertStatus(401);
});