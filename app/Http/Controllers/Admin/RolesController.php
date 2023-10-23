<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Permission;
use App\Http\Requests\Roles\StoreRoleRequest;
use App\Http\Requests\Roles\UpdateRoleRequest;

class RolesController extends Controller
{
    public function __construct()
    {
        // $this->middleware('can:role list_roles', ['only' => ['index']]);
        // $this->middleware('can:role create_role', ['only' => ['create', 'store']]);
        // $this->middleware('can:role update_role', ['only' => ['edit','update']]);
        // $this->middleware('can:role delete_role', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roles = Role::with(['permissions'])->get();
        
        return Inertia::render('Admin/Roles/Index', [
            'roles' => $roles
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $permissions = Permission::select('id AS value', 'name AS label')->get();
        
        return Inertia::render('Admin/Roles/Create',[
            'permissions' => $permissions
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRoleRequest $request)
    {
        $permissions = $request->get('permissions');
        $role = Role::create(['name' => $request->get('name')]);
        $role->syncPermissions($permissions);

        return redirect()->route('admin.roles.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Role $role)
    {
        $permissions = Permission::select('id AS value', 'name AS value')->get();
        $role->load('permissions');

        return Inertia::render('Admin/Roles/Edit',[
            'role' => $role,
            'permissions' => $permissions
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRoleRequest $request, Role $role)
    {
        $permissions = $request->get('permissions');
        $role->update([
            'name' => $request->get('name')
        ]);
        $role->syncPermissions($permissions);

        return redirect()->route('admin.roles.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        $user = User::role($role->name)->count();
        if($user > 0){
            return back()->with('error','Cannot delete this role. It is already assigned to user.');
        }
        $role->delete();
        
        return back();
    }
}
