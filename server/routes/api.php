<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MedicineController;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\FeedbackController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/protected-route', function (Request $request) {
    return response()->json(['message' => 'You are authenticated']);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('medicines', MedicineController::class);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::post('/check-username', [AuthController::class, 'checkUsername']);


Route::get('/data', [ApiController::class, 'getData']);
Route::get('/userData', [ApiController::class, 'userData']);
Route::get('/docterList', [ApiController::class, 'docterList']);

Route::post('/appointments', [AppointmentController::class, 'store']);
Route::get('/patientList', [AppointmentController::class, 'patientList']);

Route::post('/feedback', [FeedbackController::class, 'store']);

Route::get('/medicines', [MedicineController::class, 'index']);

Route::get('/profile', [AuthController::class, 'profile']);
