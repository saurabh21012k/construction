<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Member;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class MemberController extends Controller
{
    //it will return All Articles
    public function index()
    {

        $member = Member::orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data' => $member
        ]);
    }

    //it will insert Articles in DB
    public function store(Request $request)
    {
        
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'job_title' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }
        $member = new Member();
        $member->name = $request->name;
        $member->job_title = $request->job_title;
        $member->linkedin_url = $request->linkedin_url;
        $member->status = $request->status;
        $member->save();

        if ($request->imageId > 0) {
           
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {
                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);
                $fileName = strtotime('now') . $member->id . '.' . $ext;

                
                //Create small thumbnail here
                $sourcePath = public_path(('uploads/temp/' . $tempImage->name));
                $destinationPath = public_path(('uploads/members/' . $fileName));
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(400, 400);
                $image->save($destinationPath);


                 $member->image = $fileName;
                 $member->save();

                
            }
        }

        return response()->json([
            'status' => true,
            'message' => "Member added successfully!!"
        ]);
    }

    public function update($id, Request $request)
    {

        $member = Member::find($id);
        if ($member == null) {
            return response()->json([
                'status' => false,
                'message' => "Member not found!"
            ]);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'job_title' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        $member->name = $request->name;
        $member->job_title = $request->job_title;
        $member->linkedin_url = $request->linkedin_url;
        $member->status = $request->status;
        $member->save();

        if ($request->imageId > 0) {
            $oldImage=$member->image;
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {
                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);
                $fileName = strtotime('now') . $member->id . '.' . $ext;

                
                //Create small thumbnail here
                $sourcePath = public_path(('uploads/temp/' . $tempImage->name));
                $destinationPath = public_path(('uploads/members/' . $fileName));
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(400, 400);
                $image->save($destinationPath);


                 $member->image = $fileName;
                 $member->save();

                
            }
        }
        if($oldImage!=''){
            File::delete(public_path('uploads/members/').$oldImage);
        
         };

        return response()->json([
            'status' => true,
            'message' => "Member Updated successfully!!"
        ]);
    }

  //it will show single Articles 
    public function show($id)
    {
        $member = Member::find($id);
        if ($member == null) {
            return response()->json([
                'status' => false,
                'message' => "Member not found!"
            ]);
        }
        return response()->json([
            'status' => true,
            'data' => $member
        ]);
    }
//it will delete single Article 
    public function destroy($id)
    {
        $member = Member::find($id);
        if ($member == null) {
            return response()->json([
                'status' => false,
                'message' => "Member not found!"
            ]);
        }
        File::delete(public_path('uploads/members/') . $member->image);
        

        $member -> delete();   

        return response()->json([
            'status' => true,
            'message'=>"Member Deleted Successfully"
        ]);
    }
}
