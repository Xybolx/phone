@extends('layouts.app')

@section('content')
<div class="text-center">
        <h1>Posts</h1>
</div>
<div class="container">
<div class='text-left'>
        @if(count($posts) > 0)
            <ul class='list-unstyled'>
                @foreach($posts as $post)
                    <li class='container'>
                        <div class="card" style="height: 150px; border-bottom: solid; border-right: unset; border-top: unset; border-left: unset; border-radius: 0%">
                            <div style="padding: 0px; background: transparent" class="row jumbotron jumbotron-fluid">
                                <div style="max-width: 15%; height: 100%" class="col-md-6-sm-4 text-left">
                                    <img src={{$post}} class="card-img" alt={{$post}}>
                                </div>
                                    <div class="col-md-6-sm-4">
                                        <strong class="card-title h5">{{$post}}</strong>
                                        <p class="card-title font-weight-bold text-muted">{{$post}}</p>
                                        <p class="card-text font-weight-bold">{{$post}}</p>
                                    </div>
                                    <div class="text-right col">
                                    <button class="btn btn-outline-primary btn-sm mb-3">✏Edit</button>
                                    <button class="btn btn-outline-danger btn-sm mb-3">❌Del&nbsp;</button>
                                </div>
                            </div>
                        </div>
                    </li>
                @endforeach
            </ul>
        @endif
    </div>
@endsection
