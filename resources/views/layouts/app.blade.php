<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" href="./img/fav.png" type="image/x-icon">
    <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.12.1/css/pro.min.css">
    <link rel="stylesheet" type="text/css" href="{{asset('dist/css/style.css')}}">
    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

    <!-- Styles -->

    <script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/bundles/webcomponents-sd-ce.js"></script>
    <script src="https://unpkg.com/twitter-user@latest/dist/twitter-user.min.js"></script>


    {{--@livewireStyles--}}

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="{{asset('dist/js/scripts.js')}}"></script>
    <script src="{{ mix('js/app.js') }}" defer></script>
</head>
<body class="bg-gray-100">

    @include('layouts.navbar')




    <div class="h-screen flex flex-row flex-wrap">
        @include('layouts.sidebar')
        <div class="bg-gray-100 flex-1 p-6 md:mt-16">


            <!-- General Report -->
            <div >
                {{ $slot }}
            </div>
        </div>
    </div>


    {{--@stack('modals')--}}

    {{--@livewireScripts--}}
</body>
</html>
