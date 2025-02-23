<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Member;
use Illuminate\Http\Request;

class MemberController extends Controller
{
     //This method will return all active members 
     public function allMembers()
     {
         $members = Member::where('status', 1)->orderBy('created_at', 'DESC')->get();
         return response()->json([
             'status' => true,
             'data' => $members
         ]); 
     }
 
    
}
