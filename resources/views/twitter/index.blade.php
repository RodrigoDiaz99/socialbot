<x-app-layout>
    <div class="py-6">
        <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="w-1/3 bg-cover" style="background-image: url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')">
            </div>
            <div class="w-2/3 p-4">
                <h1 class="text-gray-900 font-bold text-2xl">Accede</h1>
                <p class="mt-2 text-gray-600 text-sm">Para poder usar las funciones del bot para twitter es necesario acceder.</p>

                <div class="flex item-center justify-between mt-3">
                    <a href="{{ route('login.twitter') }}" class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Acceder a twitter</a>
                    <a href="{{ route('twitter.post') }}" class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">{{$twitter ? 'Post a Messages': 'pending'}}</a>
                </div>
            </div>
        </div>
    </div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    {{-- <form method="post">
        <textarea id="mytextarea" class="w-full text-xl resize-none outline-none h-32"></textarea>
    </form>
    <script>
        tinymce.init({
            selector: "#mytextarea"
            , plugins: "emoticons"
            , toolbar: "emoticons"
            , toolbar_location: "bottom"
            , menubar: false
        });

    </script>
<div class="flex items-center justify-center p-3 hover:bg-blue-100 rounded-full cursor-pointer">
    <i class="fas fa-image"></i>
</div>--}}
    {{--formulario bonito --}}
    <!-- component -->




    {{--
        @if($twitter)
        <div class="bg-green-200 min-h-screen py-32 px-10">
            <div class="bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto">
                <form method="post" action="{{route('twitter.post')}}">
    @csrf
    <div class="flex items-center mb-10">
        <label for="twitter" class="w-20 inline-block text-right mr-6 text-gray-500">Twitter</label>
        <input type="text" name="message" id="message" placeholder="@web_smasher" class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400">
    </div>
    <div class="text-right">
        <button class="py-3 px-8 bg-green-500 text-green-100 font-bold">Submit</button>
    </div>
    </form>
    </div>
    </div>
    @endif--}}


    <hr class="border-gray-800">
    <!--middle creat tweet-->
    @if($twitter)
    <form method="post" action="{{route('twitter.post')}}" enctype="multipart/form-data">
        @csrf
        <div class="flex">
            <div class="m-2 w-10 py-1">
                <img class="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt="">
            </div>
            <div class="flex-1 px-2 pt-2 mt-2">
                <textarea class=" bg-transparent text-gray-400 font-medium text-lg w-full" rows="2" cols="50" placeholder="What's happening?" name="message" id="message"></textarea>
                <div id="preview"></div>
            </div>
        </div>

        <!--middle creat tweet below icons-->
        <div class="flex">
            <div class="w-10"></div>

            <div class="w-64 px-2">

                <div class="flex items-center">
                    <div class="flex-1 text-center px-1 py-1 m-2">

                        {{--<label for="attachment">
                            <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                                </path>
                            </svg>

                            <span id="attachmentrecive"> </span>
                            <input name="attachment" id="attachment" type="file" accept="image/*" hidden>
                        </label>--}}
                        <input name="attachment"  type="file" accept="image/*">
                    </div>

                    <div class="flex-1 text-center py-2 m-2">
                        <a href="#" class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                            <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z">
                                </path>
                                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </a>
                    </div>

                    <div class="flex-1 text-center py-2 m-2">
                        <a href="#" class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                            <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                                </path>
                            </svg>
                        </a>
                    </div>

                    <div class="flex-1 text-center py-2 m-2">
                        <a href="#" class="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-800 hover:text-blue-300">
                            <svg class="text-center h-7 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="flex-1">
                <button class="bg-blue-400 hover:bg-blue-500 mt-5 text-white font-bold py-2 px-8 rounded-full mr-8 float-right">
                    Tweet
                </button>
            </div>
        </div>
    </form>
    <hr class="border-gray-800">
    @endif
    <script>

                        document.getElementById('book_file').onchange = function () {
                console.log(this.value);
                document.getElementById('attachmentrecive').innerHTML = document.getElementById('attachment').files[0].name;
            }

    </script>
    <script>
        function mayus(e) {
            e.value = e.value.toUpperCase();
        }

    </script>
<script>
    document.getElementById("attachment").onchange = function(e) {
  // Creamos el objeto de la clase FileReader
  let reader = new FileReader();

  // Leemos el archivo subido y se lo pasamos a nuestro fileReader
  reader.readAsDataURL(e.target.files[0]);

  // Le decimos que cuando este listo ejecute el código interno
  reader.onload = function(){
    let preview = document.getElementById('preview'),
            image = document.createElement('img');

    image.src = reader.result;

    preview.innerHTML = '';
    preview.append(image);
  };
}
</script>
</x-app-layout>
