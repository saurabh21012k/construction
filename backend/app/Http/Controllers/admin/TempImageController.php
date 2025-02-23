<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

use function Laravel\Prompts\error;

class TempImageController extends Controller
{
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'image' => 'required |mimes:png,jpg,jpeg,gif'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors('image')
            ]);
        }

        $image = $request->image;

        $ext = $image->getClientOriginalExtension();
        $imageName = strtotime('now') . '.' . $ext;

        //save data in tempimages table
        $model = new TempImage();
        $model->name = $imageName;
        $model->save();

        //save data in upload/temp directory
        $image->move(public_path('uploads/temp'), $imageName);

        //Create small thumbnail here

        $sourcePath = public_path(('uploads/temp/'.$imageName));
        $destinationPath = public_path(('uploads/temp/thumbnail/'.$imageName));
        $manager = new ImageManager(Driver::class);
        $image = $manager->read($sourcePath);
        $image->coverDown(300, 300);
        $image->save($destinationPath);

        return response()->json([
            'status' => true,
            'data' => $model,
            'message' => 'image upload successfully'
        ]);
    }
}
