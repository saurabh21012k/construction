<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthenticationController extends Controller
{
   public function authenticate(Request $request){
    
    //Apply Validation

     $validator = Validator::make($request->all(),[
        'email'=>'required|email',
        'password'=>'required'
     ]);
     if( $validator->fails()){
        return response()->json([
            'status'=> false,
            'errors'=>$validator->errors()
        ]);

     }else{
        $credientials=[
            'email'=>$request->email,
            'password'=>$request->password
            
        ];
        if(Auth::attempt($credientials)){

          $user = User::find(Auth::user()->id);
          $token = $user->createToken('Token')->plainTextToken;

            return response()->json([
                'status'=>true,
                'token'=>$token,
                'id'=> Auth::user()->id
            ]);

        }else{
            return response()->json([
                'status'=> false,
                'message'=>'Either Email or Password is incorrect'
            ]);
        }
     }
   }

   public function logout(){
    $user = User::find(Auth::user()->id);
    $user -> tokens()->delete();

    return response()->json([
        'status'=> true,
        'message'=>'User logout successfully'
    ]);
   }
}
