<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
            // How many users you need, defaulting to 10
            $count = (int)$this->command->ask('How many users do you need ?', 10);

            $this->command->info("Creating {$count} users.");

            // Create the Product
            $users = factory(App\User::class, $count)->create();

            $user = App\User::create([
                'name' => 'admin',
                'email' => 'admin@me.com',
                'email_verified_at' => Carbon::now()->subDays(1),
                'password' => Hash::make('123123123'),
                'remember_token' => Str::random(10),
            ]);

            $this->command->info('Users Created!');
    }
}
