<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->count(5)->create([
            'role' => 'doctor',
        ]);

        // Tạo 10 users với vai trò 'customer'
        User::factory()->count(10)->create([
            'role' => 'customer',
        ]);
    }
}
