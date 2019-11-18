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

        @keyframes Pulse {
            0% {
                height: 0px;
            }
            50% {
                height: 25px;
            }
            100% {
                height: 50px;
            }
        }

        body {
            background: white;
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

        @media (min-width: 1200px) {
            .contact-item {
                max-width: 568px;
                margin-left: 260px;
            }
        }
    </style>

</head>
<body>
    <div id="index"></div>
    <script defer src="https://use.fontawesome.com/releases/v5.8.2/js/all.js" integrity="sha384-DJ25uNYET2XCl5ZF++U8eNxPWqcKohUUBUpKGlNLMchM7q4Wjg2CUpjHLaL8yYPH" crossorigin="anonymous"></script>
</body>
</html>