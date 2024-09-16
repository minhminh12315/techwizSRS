<?php

namespace App\Http\Controllers;

use App\Models\Health;
use App\Http\Requests\StoreHealthRequest;
use App\Http\Requests\UpdateHealthRequest;

class HealthController extends Controller
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
    public function store(StoreHealthRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Health $health)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Health $health)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateHealthRequest $request, Health $health)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Health $health)
    {
        //
    }
}
