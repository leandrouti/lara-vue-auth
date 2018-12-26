<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $v = Validator::make($request->all(), [
            'name' => 'required|max:100',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:3|confirmed'
        ]);

        if($v->fails())
        {
            return response()->json([
                'status' => 'error',
                'errors' => $v->errors()
            ], 422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        return response()->json(['status' => 'success', 'data' => $user], 200);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        
        if(! $token = JWTAuth::attempt($credentials)){
            return response()
            ->json([
                'status' => 'error',
                'error' => 'invalid.credentials',
                'msg' => 'Invalid Credentials.'
            ], 400);
        }

        return response()->json(['status'], 200)->header('Authorization', $token);
    }

    public function refresh(Request $request)
    {
        return response()
            ->json(['status' => 'success'], 200);
    }

    public function user(Request $request)
    {
        $user = User::find(Auth::user()->id);
        return response()->json([
            'status' => 'success',
            'data' => $user
        ]);
    }
    
    public function logout(Request $request)
    {
        JWTAuth::invalidate();

        return response()
            ->json([
                'status' => 'success',
                'msg' => 'Logged out Successfully.'
            ], 200);
    }
}
