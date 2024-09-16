<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Http\Requests\StoreAppointmentRequest;
use App\Http\Requests\UpdateAppointmentRequest;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(StoreAppointmentRequest $request)
    // {
    //     //
    // }

    public function store(Request $request)
    {
        Log::info($request->all());

        try{
            $fields = $request->validate([
                'name' => 'required|string',
                'email' => 'required|email',
                'phone' => 'required|string',
                'date' => 'required',
                'time' => 'required',
                'doctor_id' => 'required|exists:users,id',
            ]);

            $appointment = Appointment::create($fields);

            return response([
                'appointment' => $appointment,
            ], 201);
        } catch (\Exception $e) {
            Log::error('Error creating appointment: ' . $e->getMessage());

            return response([
                'error' => 'An error occurred while creating the appointment.',
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Appointment $appointment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Appointment $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAppointmentRequest $request, Appointment $appointment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Appointment $appointment)
    {
        //
    }
}
