<x-guest-layout>

    <main>
        <section class="relative w-full h-full py-40 min-h-screen">
            <div class="absolute top-0 w-full h-full bg-blueGray-800 bg-full bg-no-repeat"
                style="background-image: url(img/register_bg_2.png)"></div>
            <div class="container mx-auto px-4 h-full">
                <div class="flex content-center items-center justify-center h-full">
                    <div class="w-full lg:w-4/12 px-4">
                        <div
                            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">

                            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div class="text-blueGray-400 text-center mb-3 font-bold">
                                    <small>Ingresa tus credenciales</small>
                                </div>
                                @if (session('status'))
        <div class="mb-4 font-medium text-sm text-green-600">
            {{ session('status') }}
        </div>
    @endif
                                <form method="POST" action="{{ route('login') }}">
                                    @csrf
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            for="grid-password">Email</label><input type="email" name="email" :value="old('email')" required autofocus id="email"
                                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Email" />
                                    </div>
                                    <div class="relative w-full mb-3">
                                        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            for="grid-password">Contraseña</label><input type="password" id="password"
                                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Password" name="password" required autocomplete="current-password" />
                                    </div>


                                    <div class="text-center mt-6">
                                        <button
                                            class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="submit">
                                            Acceder
                                        </button>
                                    </div>
                                </form>


                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </section>

</x-guest-layout>
