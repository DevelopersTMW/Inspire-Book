

window.onload = function() {
    // Get the current page URL or pathname
    const currentPage = window.location.pathname.split("/").pop();

    // Create a mapping of the pages to their corresponding menu items
    const pages = {
        "home": "home",
        "about": "about",
        "service": "service",
        "packages": "packages",
        "contact": "contact"
    };

    // Loop through the pages and add the 'active' class to the matching page
    for (let page in pages) {
        if (currentPage.includes(page)) {
            document.getElementById(pages[page]).classList.add('active');
        }
    }
};


// FAQS START
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const arrow = item.querySelector('.arrow');

    question.addEventListener('click', () => {
        const isOpen = answer.classList.contains('open');

        // Close all open answers
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
        document.querySelectorAll('.arrow').forEach(a => a.classList.remove('open'));

        // Toggle current item
        if (!isOpen) {
            answer.classList.add('open');
            arrow.classList.add('open');
        }
    });
});
// FAQS END


// SLICK SLIDER 
function Slidersss(){
    $('.responsive').slick({
        dots: true,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
}
Slidersss()


// TABS 
const b1 = document.querySelector('#b111')
const b2 = document.querySelector('#b222')

function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("eg_big_tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    if(tabName === 'b1'){
        b1.style.borderBottom = '3px solid #ED6629'
    }else{
         b1.style.border = 'none'
    }
    if(tabName === 'b2'){
        b2.style.borderBottom = '3px solid #ED6629'
    }else{
         b2.style.border = 'none'
    }
  }
  

//   document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll("ul a");
//     const currentPage = window.location.pathname.split("/").pop(); // Get the current page file name

//     navLinks.forEach(link => {
//         if (link.getAttribute("href") === currentPage) {
//             link.classList.add("border-b-[4px]", "border-[#ED6629]"); // Add underline style
//         }
//     });
// });


