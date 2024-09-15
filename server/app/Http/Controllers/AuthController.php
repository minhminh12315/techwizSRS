<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {
            $fields = $request->validate([
                'name' => 'required|string',
                'email' => 'required|email',
                'password' => 'required|string',
                'password_confirmation' => 'required|string',
                'phone' => 'required|string',
                'address' => 'required|string',
            ]);
        
            Log::info($fields);
        
            $user = User::create($fields);
        
            $token = $user->createToken($request->name);
        
            return response([
                'user' => $user,
                'token' => $token->plainTextToken,
            ], 201);
        } catch (\Exception $e) {
            Log::error('Error creating user: ' . $e->getMessage());
        
            return response([
                'error' => 'An error occurred while creating the user.',
            ], 500);
        }
    }

    public function login(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = User::where('name', $fields['name'])->first();

        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'Bad credentials',
            ], 401);
        } else {
            $token = $user->createToken($request->name);

            return response([
                'user' => $user,
                'token' => $token->plainTextToken,
            ], 201);
        }
    }

    public function logout(Request $request)
    {
        return 'logout';
    }
}
