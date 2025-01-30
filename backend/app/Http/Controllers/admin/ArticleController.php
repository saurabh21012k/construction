<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\TempImage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class ArticleController extends Controller
{
    //it will return All Articles
    public function index()
    {

        $articles = Article::orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data' => $articles
        ]);
    }

    //it will insert Articles in DB
    public function store(Request $request)
    {
        $request->merge(['slug' => Str::slug($request->slug)]);
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:articles,slug',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }
        $article = new Article();
        $article->title = $request->title;
        $article->slug = Str::slug($request->slug);
        $article->author = $request->author;
        $article->content = $request->content;
        $article->status = $request->status;
        $article->save();

        if ($request->imageId > 0) {
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {
                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);
                $fileName = strtotime('now') . $article->id . '.' . $ext;


                //Create small thumbnail here
                $sourcePath = public_path(('uploads/temp/' . $tempImage->name));
                $destinationPath = public_path(('uploads/articles/small/' . $fileName));
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(450, 300);
                $image->save($destinationPath);

                //Create large thumbnail here
                $destinationPath = public_path(('uploads/articles/large/' . $fileName));
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($destinationPath);

                $article->image = $fileName;
                $article->save();
            }
        }

        return response()->json([
            'status' => true,
            'message' => "Article added successfully!!"
        ]);
    }

    public function update($id, Request $request)
    {

        $article = Article::find($id);
        if ($article == null) {
            return response()->json([
                'status' => false,
                'message' => "Article not found!"
            ]);
        }

        $request->merge(['slug' => Str::slug($request->slug)]);
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:articles,slug,' . $id . ',id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        $article->title = $request->title;
        $article->slug = Str::slug($request->slug);
        $article->author = $request->author;
        $article->content = $request->content;
        $article->status = $request->status;
        $article->save();

        if ($request->imageId > 0) {
            $oldImage = $article->image;
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {
                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);
                $fileName = strtotime('now') . $article->id . '.' . $ext;


                //Create small thumbnail here
                $sourcePath = public_path(('uploads/temp/' . $tempImage->name));
                $destinationPath = public_path(('uploads/articles/small/' . $fileName));
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(500, 600);
                $image->save($destinationPath);

                //Create large thumbnail here
                $destinationPath = public_path(('uploads/articles/large/' . $fileName));
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->scaleDown(1200);
                $image->save($destinationPath);

                $article->image = $fileName;
                $article->save();
            }
            if ($oldImage != '') {
                File::delete(public_path('uploads/articles/large/') . $oldImage);
                File::delete(public_path('uploads/articles/small/') . $oldImage);
            };
        }

        return response()->json([
            'status' => true,
            'message' => "Article Updated successfully!!"
        ]);
    }

    //it will show single Articles 
    public function show($id)
    {
        $article = Article::find($id);
        if ($article == null) {
            return response()->json([
                'status' => false,
                'message' => "Article not found!"
            ]);
        }
        return response()->json([
            'status' => true,
            'data' => $article
        ]);
    }
    //it will delete single Article 
    public function destroy($id)
    {
        $article = Article::find($id);
        if ($article == null) {
            return response()->json([
                'status' => false,
                'message' => "Article not found!"
            ]);
        }
        File::delete(public_path('uploads/articles/large/') . $article->image);
        File::delete(public_path('uploads/articles/small/') . $article->image);

        $article->delete();

        return response()->json([
            'status' => true,
            'message' => "Article Deleted Successfully"
        ]);
    }
}
