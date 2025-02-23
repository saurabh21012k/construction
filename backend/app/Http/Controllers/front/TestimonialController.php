<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
      //This method will return all active projects 
      public function allTestimonial()
      {
          $testimonial = Testimonial::where('status', 1)->orderBy('created_at', 'DESC')->get();
          return response()->json([
              'status' => true,
              'data' => $testimonial
          ]); 
      }
  
      //This method will return latest active projects 
      public function LatestTestimonial(Request $request)
      {
          $testimonial = Testimonial::where('status', 1)
              ->take($request->get('limit'))
              ->orderBy('created_at', 'DESC')->get();
          return response()->json([
              'status' => true,
              'data' => $testimonial
          ]); 
      }
}
