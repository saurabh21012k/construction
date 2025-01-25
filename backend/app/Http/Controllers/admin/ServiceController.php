<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       
        $services = Service::orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status'=> true,
            'data'=>$services
        ]);

    }

 


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'title'=> 'required',
            'slug'=>'required|unique:services,slug'
        ]);
        if($validator->fails()) {
            return response()->json([
                'status'=> false,
                'errors'=>$validator->errors()
            ]);
        }

        $model = new Service();
        $model-> title = $request->title;
        $model-> short_desc = $request->short_desc;
        $model-> slug = Str::slug($request->slug);
        $model-> content = $request->content ;
        $model-> status = $request->status;
        $model->save();

        return response()->json([
            'status'=> true,
            'message'=>'Service added successfully'
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(Service $service)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Service $service)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        //
    }
}
