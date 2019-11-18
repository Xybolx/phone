@extends('layouts.app')

@section('content')
    <div class='text-center mt-5'>
        <h1><i class="fas fa-user-plus"></i> Create Contact</h1>
        <h4><span class='text-danger'>*</span> Required field</h4>
        @include('inc.messages')
    </div>
    <div class="col-md-6 offset-md-3 mb-5">
        {!! Form::open(['action' => 'PostsController@store', 'method' => 'POST', 'enctype' => 'multipart/form-data']) !!}
            <div class="form-group text-danger">
                *{{Form::label('FirstName', 'First Name', ['class' => 'text-dark'])}}
                {{Form::text('FirstName', '', ['class' => 'form-control text-dark', 'placeholder' => 'First Name'])}}
            </div>
            <div class="form-group text-danger">
                *{{Form::label('LastName', 'Last Name', ['class' => 'text-dark'])}}
                {{Form::text('LastName', '', ['class' => 'form-control text-dark', 'placeholder' => 'Last Name'])}}
            </div>
            <div class="form-group text-danger">
                *{{Form::label('Title', 'Job Title', ['class' => 'text-dark'])}}
                {{Form::text('Title', '', ['class' => 'form-control text-dark', 'placeholder' => 'Job Title'])}}
            </div>
            <div class="form-group text-danger">
                *{{Form::label('Phone#', 'Phone #', ['class' => 'text-dark'])}}
                {{Form::text('Phone#', '', ['class' => 'form-control text-dark', 'placeholder' => '###-###-####'])}}
            </div>
            <div class="form-group text-danger">
                *{{Form::label('Image', 'Upload Image', ['class' => 'text-dark'])}}
                <div class="text-dark">
                    {{Form::file('Image')}}
                </div>    
            </div>
            <div class="text-center">
                <a href='/posts' class='btn btn-outline-danger mr-5'><i class="fas fa-chevron-left"></i> Back</a>
                <button class="btn btn-outline-success" type="submit"><i class="far fa-save"></i> Save</button>
            </div>
        {!! Form::close() !!}
    </div>
@endsection