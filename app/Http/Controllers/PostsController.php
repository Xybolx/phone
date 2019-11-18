<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('posts.create');
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
            'FirstName' => 'required',
            'LastName' => 'required',
            'Title' => 'required',
            'Phone#' => 'required',
            'Image' => 'image|max:1999|required'
        ]);

        // handle file upload
        if ($request->hasFile('Image')) {
            // get filename with ext
            $filenameWithExt = $request->file('Image')->getClientOriginalName();
            // get just filename
            $filename = pathInfo($filenameWithExt, PATHINFO_FILENAME);
            // get just ext
            $extension = $request->file('Image')->getClientOriginalExtension();
            // filename to store
            $filenameToStore = $filename.'_'.time().'.'.$extension;
            // upload image
            $path = $request->file('Image')->storeAs('public/Images', $filenameToStore);
        } else {
            $filenameToStore = 'noimage.png';
        }

        // create post
        $post = new Post;
        $post->fname = $request->input('FirstName');
        $post->lname = $request->input('LastName');
        $post->title = $request->input('Title');
        $post->phone = $request->input('Phone#');
        $post->src = $filenameToStore;
        $post->save();

        return redirect('/posts')->with('success', 'Contact Created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $title = 'Search Results';
        $search = $request->input('search');
        $posts = POST::where('fname', 'LIKE', $search)
                    ->orWhere('lname', 'LIKE', $search)
                    ->orWhere('title', 'LIKE', $search)
                    ->paginate(10);
        return view('posts.show', ['posts' => $posts, 'title' => $title]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $post = Post::find($id);
        return view('posts.edit')->with('post', $post);
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
            'FirstName' => 'required',
            'LastName' => 'required',
            'Title' => 'required',
            'Phone#' => 'required',
            'Image' => 'required'
        ]);

        // create post
        $post = Post::find($id);
        $post->fname = $request->input('FirstName');
        $post->lname = $request->input('LastName');
        $post->title = $request->input('Title');
        $post->phone = $request->input('Phone#');
        $post->src = $request->input('Image');
        $post->save();

        return redirect('/posts')->with('success', 'Contact Updated');
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
        $post->delete();         
        return redirect('/posts')->with('success', 'Contact Deleted');
    }
}
