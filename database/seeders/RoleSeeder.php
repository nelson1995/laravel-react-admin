<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create Super Admin role
        $sAdminRole = Role::create(['name' => 'Super Admin']);

        // Create Admin role
        $adminRole = Role::create(['name' => 'admin']);

        // Create User role
        $userRole = Role::create(['name' => 'user']);

        // Assign all permissions to 'admin' role
        $permissions = Permission::get();
        $adminRole->syncPermissions($permissions->pluck('id'));
    }
}
