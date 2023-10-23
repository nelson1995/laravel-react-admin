<?php

namespace App\Http\Requests\Users;

use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::user()->can('create_user');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => [
                'string',
                'max:255',
                'required'
            ],
            'email' => [
                'string',
                'max:255',
                Rule::unique(User::class)->ignore($this->user()->id),
                'required'
            ],
            'password' => [
                'required',
                'min:4'
            ], 
            'roles' => [
                'integer',
                'exists"roles,id'
            ],
            'roles' => [
                'required',
                'array'
            ],
        ];
    }
}
