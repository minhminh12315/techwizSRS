<?php

namespace App\Http\Controllers;

use App\Models\Medicine;
use App\Http\Requests\StoreMedicineRequest;
use App\Http\Requests\UpdateMedicineRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MedicineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $medicines = Medicine::all();
        Log::info($medicines);
        return response()->json([
            'data' => $medicines
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(StoreMedicineRequest $request)
    // {
    //     //
    // }

    public function store(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'description' => 'nullable|string',
        ]);

        $medicine = Medicine::create($fields);

        return $medicine;
    }

    /**
     * Display the specified resource.
     */
    public function show(Medicine $medicine)
    {
        return $medicine;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Medicine $medicine)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'description' => 'nullable|string',
        ]);

        $medicine->update($fields);

        return $medicine;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Medicine $medicine)
    {
        $medicine->delete();

        return ['message' => 'Medicine deleted'];
    }
}
