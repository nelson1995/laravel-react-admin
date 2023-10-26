<?php

namespace App\Http\Controllers\Auth\Api\V1;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ApiController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string',
            'password' => 'required|confirmed'
        ]); 

        if($validator->fails()){
            return response(['errors' => $validator->errors()->all()], 422);
        }

        $user = User::query()->where('email', $request->email)->first();

        if($user){
            if(Hash::check($request->password, $user->password)){
                $token = $user->createToken('Personal Access Client')->accessToken;
                $response = ['user' => $user, 'access_token' => $token];
                return response($response, 200);
            } else {
                $response = ['message' => 'Invalid credentials'];
                return response($response, 401);
            }
        }

        return response(['message' => 'Account doesn\'t exist'], 404);
    }

    public function loginWithApiToken(Request $request)
    {
        $data = decryptApiToken($request['apiToken']);
        $user = User::query()->where('email',$data)->first();

        if(!$user){
            return response(['message' => 'Api key not found.'], 401);
        }

        $token = $user->createToken('Personal Access Client')->accessToken;

        return response(['user' => $user, 'access_token' => $token], 200);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required','confirmed', Rules\Password::defaults()]
        ]); 
        
        if($validator->fails()){
            return response($validator->errors()->all(), 422);
        }

        $request['password'] = Hash::make($request->password);
        $request['remember_token'] = Str::random(10);
        $user = User::create($request->toArray());
        $token = $user->createToken('Personal Access Client')->accessToken;

        $response = ['user' => $user, 'access_token' => $token];

        return response($response, 201);
    }

    public function logOut(Request $request)
    {
        $token = $request->user()->token();
        $token->revoke();

        return response(['message' => 'You\'ve logged out.'], 200);
    }
}
