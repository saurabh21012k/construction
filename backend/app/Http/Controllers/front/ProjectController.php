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

    public function show($id)
    {
        $project = Project::find($id);
        if ($project == null) {
            return response()->json([
                'status' => false,
                'message' => "Project not found!"
            ]);
        }
        return response()->json([
            'status' => true,
            'data' => $project
        ]);
    }

    public function filterProject($location)
{
    // Filter projects by location and active status
    $projects = Project::where('location', $location)
                       ->where('status', 1)
                       ->orderBy('created_at', 'DESC')
                       ->get();

    // Check if no projects are found
    if ($projects->isEmpty()) {
        return response()->json([
            'status' => false,
            'message' => "Project not found!"
        ]);
    }

    return response()->json([
        'status' => true,
        'data' => $projects
    ]);
}

public function getProjectLocations()
{
    $locations = Project::whereNotNull('location')->distinct()->pluck('location');
    return response()->json([
        'status' => true,
        'data' => $locations
    ]);
}


public function getfilterProjectType($Construction_type)
{
    // Filter projects by location and active status
    $projects = Project::where('Construction_type', $Construction_type)
                       ->where('status', 1)
                       ->orderBy('created_at', 'DESC')
                       ->get();
                       // Check if no projects are found
    if ($projects->isEmpty()) {
        return response()->json([
            'status' => false,
            'message' => "Project not found!"
        ]);
    }

    return response()->json([
        'status' => true,
        'data' => $projects
    ]);
}

public function getProjectsByServiceId($serviceId)
{
    // Filter projects by location and active status
    $projects = Project::where('service_id', $serviceId)
                       ->get();
                       
    if ($projects->isEmpty()) {
        return response()->json([
            'status' => false,
            'message' => "Project not found!"
        ]);
    }

    return response()->json([
        'status' => true,
        'data' => $projects
    ]);
}

public function getProjectType()
{
    $Construction_type = Project::whereNotNull('Construction_type')->distinct()->pluck('Construction_type');
    return response()->json([
        'status' => true,
        'data' => $Construction_type
    ]);
}


}
