<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class ApiController extends Controller
{
    public function getData()
    {
        return response()->json([
            'message' => 'Hello from Laravel!',
            'data' => [1, 2, 3, 4, 5]
        ]);
    }
    public function docterList()
    {
        $doctors = User::where('role', 'doctor')->get();
        Log::info($doctors);
        return response()->json([
            'data' => $doctors
        ]);
    }
    public function userData()
    {
        if(Auth::user())
        {
            if(Auth::user()->role == 'doctor') {
                return response()->json([
                    'data' => 'doctor'
                ]);
            } elseif(Auth::user()->role == 'customer') {
                return response()->json([
                    'data' => 'customer'
                ]);
            }
        }
    }
}
