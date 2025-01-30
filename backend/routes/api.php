<?php

use App\Http\Controllers\admin\ArticleController;
use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\admin\MemberController;
use App\Http\Controllers\admin\ProjectController;
use App\Http\Controllers\admin\ServiceController;
use App\Http\Controllers\admin\TempImageController;
use App\Http\Controllers\admin\TestimonialController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\front\ArticleController as FrontArticleController;
use App\Http\Controllers\front\MemberController as FrontMemberController;
use App\Http\Controllers\front\ProjectController as FrontProjectController;
use App\Http\Controllers\front\ServiceController as FrontServiceController;
use App\Http\Controllers\front\TestimonialController as FrontTestimonialController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('authenticate', [AuthenticationController::class, 'authenticate']);

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
Route::get('get-services', [FrontServiceController::class, 'index']);
Route::get('get-latest-services', [FrontServiceController::class, 'latestServices']);
Route::get('get-projects', [FrontProjectController::class, 'allProjects']);
Route::get('get-latest-projects', [FrontProjectController::class, 'latestProjects']);
Route::get('get-articles', [FrontArticleController::class, 'AllArticles']);
Route::get('get-latest-articles', [FrontArticleController::class, 'LatestArticles']);
Route::get('get-testimonial', [FrontTestimonialController::class, 'AllTestimonial']);
Route::get('get-latest-testimonial', [FrontTestimonialController::class, 'LatestTestimonial']);
Route::get('get-members', [FrontMemberController::class, 'AllMembers']);
Route::get('get-services/{id}', [FrontServiceController::class, 'show']);
Route::get('get-projects/{id}', [FrontProjectController::class, 'show']);
Route::get('get-articles/{id}', [FrontArticleController::class, 'show']);



Route::group(['middleware' => ['auth:sanctum']], function () {
    //Protected Routes

    Route::get('dashboard', [DashboardController::class, 'index']);
    Route::get('logout', [AuthenticationController::class, 'logout']);

    //Service Routes
    Route::post('services', [ServiceController::class, 'store']);
    Route::get('services', [ServiceController::class, 'index']);
    Route::put('services/{id}', [ServiceController::class, 'update']);
    Route::get('services/{id}', [ServiceController::class, 'show']);
    Route::delete('services/{id}', [ServiceController::class, 'destroy']);

    //Projects Routes
    Route::post('projects', [ProjectController::class, 'store']);
    Route::get('projects', [ProjectController::class, 'index']);
    Route::put('projects/{id}', [ProjectController::class, 'update']);
    Route::get('projects/{id}', [ProjectController::class, 'show']);
    Route::delete('projects/{id}', [ProjectController::class, 'destroy']);

    //Articles Routes
    Route::post('articles', [ArticleController::class, 'store']);
    Route::get('articles', [ArticleController::class, 'index']);
    Route::put('articles/{id}', [ArticleController::class, 'update']);
    Route::get('articles/{id}', [ArticleController::class, 'show']);
    Route::delete('articles/{id}', [ArticleController::class, 'destroy']);

    //testimonial Routes
    Route::post('testimonial', [TestimonialController::class, 'store']);
    Route::get('testimonial', [TestimonialController::class, 'index']);
    Route::put('testimonial/{id}', [TestimonialController::class, 'update']);
    Route::get('testimonial/{id}', [TestimonialController::class, 'show']);
    Route::delete('testimonial/{id}', [TestimonialController::class, 'destroy']);

    //Member Routes
    Route::post('members', [MemberController::class, 'store']);
    Route::get('members', [MemberController::class, 'index']);
    Route::put('members/{id}', [MemberController::class, 'update']);
    Route::get('members/{id}', [MemberController::class, 'show']);
    Route::delete('members/{id}', [MemberController::class, 'destroy']);


    //Temp image Route
    Route::post('temp-images', [TempImageController::class, 'store']);
});


