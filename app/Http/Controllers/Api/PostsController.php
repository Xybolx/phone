<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Post;

class PostsController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::orderBy('lname', 'asc')->get();
        return response()->json($posts);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'fname' => 'required',
            'lname' => 'required',
            'title' => 'required',
            'phone' => 'required',
            'src' => 'required | image'
        ]);

        // handle file upload
        if ($request->hasFile('src')) {
            // get filename with ext
            $filenameWithExt = $request->file('src')->getClientOriginalName();
            // get just filename
            $filename = pathInfo($filenameWithExt, PATHINFO_FILENAME);
            // get just ext
            $extension = $request->file('src')->getClientOriginalExtension();
            // filename to store
            $filenameToStore = $filename.'_'.time().'.'.$extension;
            // upload image
            $path = $request->file('src')->storeAs('public/Images', $filenameToStore);
        } else {
            $filenameToStore = 'noimage.png';
        }


        // create post
        $post = new Post;
        $post->fname = $request->get('fname');
        $post->lname = $request->get('lname');
        $post->title = $request->get('title');
        $post->phone = $request->get('phone');
        $post->src = $filenameToStore;
        $post->save();

        $posts = Post::orderBy('lname', 'asc')->get();
        return response()->json($posts);
    }

    /**
     * Display the specified resource.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'fname' => 'required',
            'lname' => 'required',
            'title' => 'required',
            'phone' => 'required',
        ]);

        // handle file upload
        if ($request->hasFile('src')) {
            // get filename with ext
            $filenameWithExt = $request->file('src')->getClientOriginalName();
            // get just filename
            $filename = pathInfo($filenameWithExt, PATHINFO_FILENAME);
            // get just ext
            $extension = $request->file('src')->getClientOriginalExtension();
            // filename to store
            $filenameToStore = $filename.'_'.time().'.'.$extension;
            // upload image
            $path = $request->file('src')->storeAs('public/Images', $filenameToStore);
            // delete if file exists
            Storage::delete('public/Images/'.$post->src);
        }

        // create post
        $post = Post::find($id);
        $post->fname = $request->get('fname');
        $post->lname = $request->get('lname');
        $post->title = $request->get('title');
        $post->phone = $request->get('phone');
        if ($request->hasFile('src')) {
            $post->src = $filenameToStore;
        }
        $post->save();

        $posts = Post::orderBy('lname', 'asc')->get();
        return response()->json($posts);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::find($id);
        if ($post->src != 'noimage.png') {
            Storage::delete('public/Images/'.$post->src);
        }
        $post->delete();
        $posts = Post::orderBy('lname', 'asc')->get();
        return response()->json($posts);
    }
}
