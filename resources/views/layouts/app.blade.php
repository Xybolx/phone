<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('/js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet">

    <style>

        @keyframes Loading {
            /* 0% {
                background: linear-gradient(dodgerblue, black, white);
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            } */
            0% {
                background: linear-gradient(dodgerblue, black, white);
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }
            50% {
                background: linear-gradient(white, dodgerblue, black);
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }
            100% {
                background: linear-gradient(white, black, dodgerblue);
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }
        }

        body {
            background: whitesmoke;
        }

        a:hover {
            cursor: pointer;
        }

        .jumbotron {
            background: transparent;
        }

        .input-error {
            height: 5px;
        }

        .bg-dark {
            background: url("storage/Images/phone-wide.png"), linear-gradient(dodgerblue, black, white);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }

        .btn-dark {
            background: linear-gradient(dodgerblue, black, white);
        }

        .btn-dark:hover {
            background: linear-gradient(white, black, dodgerblue);
        }

        .load {
            background: url("http://www.mpsaz.org/phonebook/images/site-head-bg-522e280da4eb7.png"), transparent;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            background-blend-mode: color;
        }

        .under-load {
            background: linear-gradient(dodgerblue, black, white);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            animation: Loading 2s infinite linear;
            background: linear-gradient(whitesmoke, black, dodgerblue);
        }

        .close {
            line-height: unset;
        }

        @media (min-width: 1200px) {
            .contact-item,
            .alert {
                max-width: 568px;
                margin-left: 260px;
            }
        }
    </style>

</head>
<body>
    {{-- <div id="app">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
    </div> --}}
    <div id="index"></div>
    <script defer src="https://use.fontawesome.com/releases/v5.8.2/js/all.js" integrity="sha384-DJ25uNYET2XCl5ZF++U8eNxPWqcKohUUBUpKGlNLMchM7q4Wjg2CUpjHLaL8yYPH" crossorigin="anonymous"></script>
</body>
</html>
