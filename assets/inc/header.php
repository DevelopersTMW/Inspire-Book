<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php echo("<title>$page_title</title>");?>
		<meta name="keywords" content="<?php echo(" $meta_keywords ")?>">
		<meta name="description" content="<?php echo(" $meta_content ")?>">
		 <link rel="canonical" href="<?php echo ("$canonical") ?>" />
    <link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.1/dist/flowbite.min.css" rel="stylesheet" />
    <link rel="icon" href="./assets/FavIcon.png" type="image/png">
    <link href="./src/output.css" rel="stylesheet">
    <link href="./src/style.css" rel="stylesheet">
    <!-- FONT -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
        rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">

    <link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.1/dist/flowbite.min.css" rel="stylesheet" />

    <!-- SLICKY SLIDER  -->
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css" />
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css" />

</head>

<body>



    <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="./assets/Logo.png" class="h-16" alt="Logo" />
            </a>
            <button data-collapse-toggle="navbar-dropdown" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-dropdown" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                <ul
                    class="flex flex-col items-center  font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="home.php"
                            class="block py-2 px-3 font-semibold text-black bg-blue-700 rounded-sm md:bg-transparent  md:p-0 md:dark:text-blue-500 dark:bg-blue-600 hover:text-orange-400 md:dark:bg-transparent"
                            aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="AboutUs.php"
                            class="block py-2 px-3 font-semibold text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About
                            Us</a>
                    </li>
                    <li>
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                            class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 font-semibold dark:hover:bg-gray-700 md:dark:hover:bg-transparent"><a
                                href="Services.php">Services</a>
                            <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg></button>
                        <!-- Dropdown menu -->
                        <div id="dropdownNavbar"
                            class="z-50 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-48 dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-400"
                                aria-labelledby="dropdownLargeButton">
                                <li class="z-[70] relative">
                                    <a href="book-formatting.php"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-b-[1px] border-black flex flex-col z-50"><span
                                            class="text-[16px] font-bold">Book Formatting</span>
                                        <span class="text-[12px]">he perfect layout keeps readers immersed
                                        </span></a>
                                </li>
                                <li class="z-[70] relative">
                                    <a href="book-publishing.php"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-b-[1px] border-black flex flex-col z-50"><span
                                            class="text-[16px] font-bold">Book Publishing</span>
                                        <span class="text-[12px]">Your Gateway to Publishing Success
                                        </span></a>
                                </li>
                                <li class="z-[999999] relative">
                                    <a href="ghost-writing.php"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-b-[1px] border-black flex flex-col z-50"><span
                                            class="text-[16px] font-bold">Ghost Writing</span>
                                        <span class="text-[12px]">Your Story, Written to Leave a Legacy
                                        </span></a>
                                </li>
                                <li class="z-[70] relative">
                                    <a href="coverdesign&illustrations.php"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-b-[1px] border-black flex flex-col z-50">
                                        <span class="text-[16px] font-bold">Cover Design & Illustrations</span>
                                        <span class="text-[12px]">Captivate Readers with Stunning 
                                        </span></a>
                                </li>
                                <li class="z-[70] relative">
                                    <a href="editing&proofreading.php"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-b-[1px] border-black flex flex-col z-50"><span
                                            class="text-[16px] font-bold">Editing & Proof rewarding </span>
                                        <span class="text-[12px]">Professional Editing & Proofreading at Inkspire
                                        </span></a>
                                </li>
                                <li class="z-[70] relative">
                                    <a href="marketing&pt.php"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex flex-col z-50"><span
                                            class="text-[16px] font-bold">Marketing & PT</span>
                                        <span class="text-[12px]"> Turn Your Book  Into a Bestselling Brand
                                        </span></a>
                                </li>
                            </ul>
                            <!-- <div class="py-1">
                                <a href="BookGhostwriting.php"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Book Ghost Writing
                                </a>
                            </div> -->
                        </div>
                    </li>
                    <li>
                        <a href="Testimonials.php"
                            class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-semibold">Testimonial</a>
                    </li>
                    <li class="bg-[#ED6629] text-white text-[15px] font-[700] px-5 py-3" id="HoverButton">
                        <a href="contact-us.php"
                            class="z-50 relative block text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent bg-transparent    text-white text-[15px] font-[700] px-5 py-3 font-bold">Contact
                            Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>







    
