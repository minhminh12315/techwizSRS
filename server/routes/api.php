<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MedicineController;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\FeedbackController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('medicines', MedicineController::class);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

Route::get('/data', [ApiController::class, 'getData']);
Route::get('/docterList', [ApiController::class, 'docterList']);

Route::post('/appointments', [AppointmentController::class, 'store']);

Route::post('/feedback', [FeedbackController::class, 'store']);
