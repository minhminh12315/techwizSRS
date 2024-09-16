<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicineOfHealth extends Model
{
    use HasFactory;

    protected $fillable = [
        'medicine_id',
        'health_id'
    ];

    public function medicine()
    {
        return $this->belongsTo(Medicine::class);
    }

    public function health()
    {
        return $this->belongsTo(Health::class);
    }
}
