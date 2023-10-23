<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // clear cached permissions
        app()->make(PermissionRegistrar::class)->forgetCachedPermissions();

        // create permissions
        $permissions = [
            "list_permissions","delete_permission","update_permission",
            "create_permission","list_roles","delete_role","update_role",
            "create_role","list_users","create_user",
            "delete_user","update_user","access_settings","edit_profile"
        ];

        foreach($permissions as $permission){
            Permission::create(['name' => $permission ]);
        }

    }
}
