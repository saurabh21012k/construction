<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    //This method will return all active projects 
    public function allProjects()
    {
        $projects = Project::where('status', 1)->orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data' => $projects
        ]); 
    }

    //This method will return latest active projects 
    public function latestProjects(Request $request)
    {
        $projects = Project::where('status', 1)
            ->take($request->get('limit'))
            ->orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => true,
            'data' => $projects
        ]); 
    }
}
