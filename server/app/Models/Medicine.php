<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medicine extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
    ];

    public function healths()
    {
        return $this->belongsToMany(Health::class, 'medicine_of_healths');
    }
}
