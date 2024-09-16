<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Appointment>
 */
class AppointmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'doctor_id' => $this->faker->numberBetween(1, 5), // Giả sử bạn có ít nhất 5 bác sĩ trong bảng users
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'phone' => $this->faker->phoneNumber,
            'date' => $this->faker->date,
            'time' => $this->faker->time('H:i:s'),
            'status' => $this->faker->randomElement(['pending', 'confirmed', 'canceled']),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
