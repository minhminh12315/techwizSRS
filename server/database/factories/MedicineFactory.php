<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Medicine>
 */
class MedicineFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'ingredient' => $this->faker->words(3, true),
            'type' => $this->faker->randomElement(['tablet', 'capsule', 'liquid', 'injection']),
            'how_to_use' => $this->faker->sentence(),
            'expiration_date' => $this->faker->date(),
            'warning' => $this->faker->sentence(),
            'placeOfProduction' => $this->faker->city(),
        ];
    }
}
