<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $apiToken = 
        $users = [
            [
                'id' => 1,
                'name' => 'Super Admin',
                'email' => 's_admin@mail.com',
                'password' => Hash::make('1234'),
                'api_token' => generateApiToken("s_admin@mail.com")
            ],
            [
                'id' => 2,
                'name' => 'Admin',
                'email' => 'admin@mail.com',
                'password' => Hash::make('1234'),
                'api_token' => generateApiToken("admin@mail.com")
            ],
            [
                'id' => 3,
                'name' => 'Nelson',
                'email' => 'nelson@mail.com',
                'password' => Hash::make('1234'),
                'api_token' => generateApiToken("nelson@mail.com")
            ]
        ];
        
        User::insert($users);

        $sAdminRole = Role::where('name','Super admin')->first();
        $adminRole = Role::where('name','admin')->first();
        $userRole = Role::where('name','user')->first();

        // Assign super admin, admin and user their respective roles
        User::findOrFail(1)->assignRole($sAdminRole);
        User::findOrFail(2)->assignRole($adminRole);
        User::findOrFail(3)->assignRole($userRole);
    }
}
