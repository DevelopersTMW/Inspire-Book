<?php $page_title = "Contact Us "; ?>
<?php $meta_content = ""; ?>
<?php $thisPage = 'Contact Us '; ?>
<?php $canonical= "" ?>
<?php include './assets/inc/header.php'; ?>



    <!-- BANNER  -->
    <header id="ServiceHeaderBgImage" class="py-[80px]">
        <div>
            <h1 id="InnerPagesHeader" class="text-[65px] font-bold text-white  text-start px-28 z-50 relative">Contact Us</h1>
        </div>
    </header>


    <!-- CONTACT US DETALS AND FORM  -->
    <section class="py-16">
        <div class="flex justify-evenly">
            <div class=" flex flex-col gap-3 items-center">
                <span class="bg-linear-to-t from-[#BE280A] to-[#ED6629] text-white px-7 py-6 rounded-full text-4xl">
                    <i class="fa-solid fa-phone"></i>
                </span>
                <h1 class="text-black font-bold text-2xl">123-456-789</h1>
            </div>
            <div class=" flex flex-col gap-3 items-center">
                <span class="bg-linear-to-t from-[#BE280A] to-[#ED6629] text-white px-8 py-6 rounded-full text-4xl">
                    <i class="fa-solid fa-location-dot"></i>
                </span>
                <h1 class="text-black font-bold text-2xl">Your Address</h1>
            </div>
            <div class=" flex flex-col gap-3 items-center">
                <span class="bg-linear-to-t from-[#BE280A] to-[#ED6629] text-white px-7 py-6 rounded-full text-4xl">
                    <i class="fa-solid fa-envelope"></i>
                </span>
                <h1 class="text-black font-bold text-2xl">info@gmail.com</h1>
            </div>
        </div>

        <div class="px-28 py-20 flex justify-center items-center ">
            <div class="flex flex-col gap-3">
                <h1 class="text-5xl font-bold">Get A Quote</h1>
                <p class="text-black mt-2 text-[15px] font-semibold w-[70%]">Ebook writing experts company teams up with you to take your vision forward to craft top-notch quality ebooks that can engage your readers and achieve your goals</p>

                <span class="">
                    <h1 class="text-[22px] font-bold">Phone:</h1>
                    <p class="font-semibold text-[18px]">123-456-789</p>
                </span>
                <span>
                    <h1 class="text-[22px] font-bold">Address:</h1>
                    <p class="font-semibold text-[18px]">Your Address</p>
                </span>
                <span>
                    <h1 class="text-[22px] font-bold">Mail:</h1>
                    <p class="font-semibold text-[18px]">Info@gmail.com</p>
                </span>

            </div>
            <div class="mt-3">
                <form action="" class="">
                    <input class="w-[100%] text-[#555555] text-[15px] font-semibold outline-none px-4 h-[50px] bg-[#fbfbfb] border-solid border-[1px] border-[#cccccc]" type="text" placeholder="Name">
                    <input class="w-[100%] outline-none text-[15px] font-semibold mt-5 px-4 h-[50px] bg-[#fbfbfb] border-solid border-[1px] border-[#cccccc]" type="email" placeholder="Email">
                    <input class="w-[100%] outline-none text-[15px] font-semibold mt-5 px-4 h-[50px] bg-[#fbfbfb] border-solid border-[1px] border-[#cccccc]" type="number" placeholder="Phone Number">
                    <textarea class="w-[100%] text-[15px] font-semibold outline-none mt-5 py-3 px-4  bg-[#fbfbfb] border-solid border-[1px] border-[#cccccc]" placeholder="Message" name="" rows="5"  id=""></textarea>
                    <button  style="font-family: Inter;"
                    class=" bg-linear-to-t from-[#BE280A] to-[#ED6629]  w-[100%] mt-5 text-white text-[19px] font-[700] px-5 py-3">Submit</button>
                </form>

            </div>
        </div>
    </section>

<?php include './assets/inc/footer.php'; ?>
