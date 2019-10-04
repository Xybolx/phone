<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function index () {
        $title = 'This Is The Phone Directory!!!';
        return view('pages.index')->with('title', $title);
    }

    public function about () {
        $title = 'This Is The About Page of The Directory!!!';
        return view('pages.about')->with('title', $title);
    }

    public function services () {
        return view('pages.services', ['pageTitle' => 'Contacts', 'name' => 'Kermit The Frog', 'src' => 'https://www.sccpre.cat/mypng/detail/106-1061839_kermit-the-frog-song-muppets-png.png', 'title' => 'Muppet Puppet', 'phone' => '555-555-5555']);
    }
}
