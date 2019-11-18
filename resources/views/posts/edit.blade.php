@extends('layouts.app')

@section('content')
    <div class='text-center mt-5'>
        <h1><i class="fas fa-pen fa-fw"></i> Edit Contact</h1>
        <h4><i class="fas fa-user fa-fw"></i> {{$post->fname}} {{$post->lname}}</h4>
        <h4><span class="text-danger">*</span> Required field</h4>
        @include('inc.messages')
    </div>
    <div class="col-md-6 offset-md-3 mb-5">
        {!! Form::open(['action' => ['PostsController@update', $post->id], 'method' => 'POST']) !!}
            <div class="form-group text-danger">
                *{{Form::label('FirstName', 'First Name', ['class' => 'text-dark'])}}
                {{Form::text('FirstName', $post->fname, ['class' => 'form-control text-dark', 'placeholder' => 'First Name'])}}
            </div>
            <div class="form-group text-danger">
                *{{Form::label('LastName', 'Last Name', ['class' => 'text-dark'])}}
                {{Form::text('LastName', $post->lname, ['class' => 'form-control text-dark', 'placeholder' => 'Last Name'])}}
            </div>
            <div class="form-group text-danger">
                *{{Form::label('Title', 'Job Title', ['class' => 'text-dark'])}}
                {{Form::text('Title', $post->title, ['class' => 'form-control text-dark', 'placeholder' => 'Job Title'])}}
            </div>
            <div class="form-group text-danger">
                *{{Form::label('Phone#', 'Phone #', ['class' => 'text-dark'])}}
                {{Form::text('Phone#', $post->phone, ['class' => 'form-control text-dark', 'placeholder' => '###-###-####'])}}
            </div>
            <div class="form-group text-danger">
                {{Form::hidden('Image', $post->src, ['class' => 'form-control text-dark', 'placeholder' => 'Paste Image URL'])}}
            </div>
            <div class="text-center">
                {{Form::hidden('_method', 'PUT')}}
                <a href='/posts' class='btn btn-outline-danger mr-5'><i class="fas fa-chevron-left"></i> Back</a>
                <button class="btn btn-outline-success" type="submit"><i class="far fa-save"></i> Save</button>
            </div>
            {!! Form::close() !!}
    </div>
@endsection