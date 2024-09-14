<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getData()
    {
        return response()->json([
            'message' => 'Hello from Laravel!',
            'data' => [1, 2, 3, 4, 5]
        ]);
    }
}
