<x-app-layout>
    <!-- strat content -->
    <div class="bg-gray-100 flex-1 p-6 md:mt-16">

        <!-- start numbers -->
        <div class="grid grid-cols-3 gap-6 xl:grid-cols-2">

            <!-- card -->
            <div class="card mt-6">
                <div class="card-body flex items-center">

                    <div class="px-3 py-2 rounded bg-indigo-600 text-white mr-3">
                        <i class="fad fa-wallet"></i>
                    </div>

                    <div class="flex flex-col">
                        <h1 class="font-semibold"><span class="num-2"></span> Siguiendo</h1>

                    </div>

                </div>
            </div>
            <!-- end card -->

            <!-- card -->
            <div class="card mt-6">
                <div class="card-body flex items-center">

                    <div class="px-3 py-2 rounded bg-green-600 text-white mr-3">
                        <i class="fad fa-shopping-cart"></i>
                    </div>

                    <div class="flex flex-col">
                        <h1 class="font-semibold"><span class="num-2"></span> Seguidores</h1>
                        <p class="text-xs"><span class="num-2"></span> items</p>
                    </div>

                </div>
            </div>
            <!-- end card -->

            <!-- card -->
            <div class="card mt-6 xl:mt-1">
                <div class="card-body flex items-center">

                    <div class="px-3 py-2 rounded bg-yellow-600 text-white mr-3">
                        <i class="fad fa-blog"></i>
                    </div>

                    <div class="flex flex-col">
                        <h1 class="font-semibold"><span class="num-2"></span> posts</h1>
                        <p class="text-xs"><span class="num-2"></span> active</p>
                    </div>

                </div>
            </div>
            <!-- end card -->


        </div>
        <!-- end nmbers -->

        <!-- strat Analytics -->
        <div class="mt-6 grid grid-cols-2 gap-6 xl:grid-cols-1">

            <!-- update section -->
            <div class="card bg-teal-400 border-teal-400 shadow-md text-white">
                <div class="card-body flex flex-row">

                    <!-- image -->
                    <div class="img-wrapper w-40 h-40 flex justify-center items-center">
                        <img src="./img/happy.svg" alt="img title">
                    </div>
                    <!-- end image -->

                    <!-- info -->
                    <div class="py-2 ml-10">
                        <h1 class="h6">Bienvenido, {{ Auth::user()->name }}!</h1>
                        <p class="text-white text-xs">Que tengas excelente dia</p>


                    </div>
                    <!-- end info -->

                </div>
            </div>
            <!-- end update section -->




        </div>
        <!-- end Analytics -->

        <!-- Sales Overview -->
        <div class="card mt-6">

            <!-- header -->
            <div class="card-header flex flex-row justify-between">
                <h1 class="h6">Sales Overview</h1>

                <div class="flex flex-row justify-center items-center">

                    <a href="">
                        <i class="fad fa-chevron-double-down mr-6"></i>
                    </a>

                    <a href="">
                        <i class="fad fa-ellipsis-v"></i>
                    </a>

                </div>

            </div>
            <!-- end header -->

            <!-- body -->
            <div class="card-body grid grid-cols-2 gap-6 lg:grid-cols-1">

                <div class="p-8">
                    <h1 class="h2">5,337</h1>
                    <p class="text-black font-medium">Sales this month</p>

                    <div class="mt-20 mb-2 flex items-center">
                        <div class="py-1 px-3 rounded bg-green-200 text-green-900 mr-3">
                            <i class="fa fa-caret-up"></i>
                        </div>
                        <p class="text-black"><span class="num-2 text-green-400"></span><span class="text-green-400">% more sales</span> in comparison to last month.</p>
                    </div>

                    <div class="flex items-center">
                        <div class="py-1 px-3 rounded bg-red-200 text-red-900 mr-3">
                            <i class="fa fa-caret-down"></i>
                        </div>
                        <p class="text-black"><span class="num-2 text-red-400"></span><span class="text-red-400">% revenue per sale</span> in comparison to last month.</p>
                    </div>

                    <a href="#" class="btn-shadow mt-6">view details</a>

                </div>

                <div class="">
                    <div id="sealsOverview"></div>
                </div>

            </div>
            <!-- end body -->

        </div>
        <!-- end Sales Overview -->





    </div>
    <!-- end content -->
</x-app-layout>
