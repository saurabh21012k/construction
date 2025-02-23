<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        // Create the 'services' table
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->string('short_desc')->nullable();
            $table->text('content')->nullable();
            $table->string('image')->nullable();
            $table->integer('status')->default(1);
            $table->timestamps();
        });
    
        // Create the 'projects' table with a foreign key to the 'services' table
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->string('short_desc')->nullable();
            $table->text('content')->nullable();
            $table->string('construction_type')->nullable();
            $table->string('sector')->nullable();
            $table->string('location')->nullable();
            $table->string('image')->nullable();
            $table->integer('status')->default(1);
            $table->unsignedBigInteger('service_id')->nullable(); // Foreign key to 'services'
            $table->foreign('service_id')->references('id')->on('services')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
