<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    //This method will return all active projects 
    public function allArticles()
    {
        $articles = Article::where('status', 1)->orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data' => $articles
        ]); 
    }

    //This method will return latest active projects 
    public function LatestArticles(Request $request)
    {
        $articles = Article::where('status', 1)
            ->take($request->get('limit'))
            ->orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data' => $articles
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
}