@extends('layouts.app')

@section('content')
    <div class="text-center mt-5">
        <h1><i class="fas fa-users"></i> {{$title}}</h1>
        @include('inc.messages')
    </div>
    <div class="container">
        <div class='text-left'>
            @if(count($posts) > 0)
                <ul class='list-group list-group-flush list-unstyled'>
                    @foreach($posts as $post)
                        <li style='background: transparent;' class='list-group-item border-bottom shadow-lg'>
                            <div class="card" style="background: transparent; height: 125px; border-bottom: unset; border-top: unset; border-right: unset; border-left: unset; border-radius: 0%; margin-top: 40px">
                                <div class="row">
                                    <div style="width: 90px; height: 90px" class="col-md-6-sm-4 text-left">
                                        <img style="height: 90px; width: 90px;" src="/storage/Images/{{$post->src}}" class="img-fluid card-img" alt={{$post->fname}}>
                                    </div>
                                    <div class="col-md-6-sm-4 ml-1">
                                        <strong class="font-weight-bold h6">{{$post->fname}} {{$post->lname}}</strong>
                                        <p class="font-weight-bold text-muted">{{$post->title}}</p>
                                        <p class="font-weight-bold h6">{{$post->phone}}</p>
                                    </div>
                                    <div class="text-right col">
                                        <a href="/posts/{{$post->id}}/edit" class="btn btn-outline-primary btn-sm mb-3">Edit</a>
                                        <button data-toggle="modal" data-target="#exampleModalCenter{{$post->id}}" class="btn btn-outline-danger btn-sm mb-3">Delete</button>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="exampleModalCenter{{$post->id}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content border border-dark">
                                        <div class="modal-header bg-dark">
                                            <h5 class="modal-title text-light font-weight-bold" id="exampleModalCenterTitle"><i class="fas fa-exclamation-triangle text-warning"></i> Confirm Delete</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span style="color: whitesmoke" aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body text-center">
                                            <div class="font-weight-bold">
                                                Are you sure you want to delete
                                                <br>
                                                {{$post->fname}} {{$post->lname}}?
                                            </div>
                                        </div>
                                        <div style="border-top: unset" class="modal-footer">
                                            {!! Form::open(['action' => ['PostsController@destroy', $post->id], 'method' => 'POST', 'class' => 'pull-right']) !!}
                                                {{Form::hidden('_method', 'DELETE')}}
                                                <button type="submit" class="btn btn-outline-success"><i class="fas fa-check fa-fw"></i></button>                                                                
                                                <button type="button" class="btn btn-outline-danger" data-dismiss="modal"><i class="fas fa-times fa-fw"></i></button>
                                            {!! Form::close() !!}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    @endforeach
                </ul>
                <div class="text-center">
                    {{$posts->links()}}
                </div>
            @else
            <div class="text-center">
                <h2>No Results...</h2>
            </div>
         @endif
    </div>
@endsection