let slide = document.querySelector('.slide-pannel');
let prev_btn = document.querySelector('.left-btn');
let next_btn = document.querySelector('.right-btn');

let slide_arr = ['000%', '-100%', '-200%', '-100%'];
let current = 0;

prev_btn.addEventListener('click', (e) => {
    console.log("12123");
    current++;
    slide.style.left = slide_arr[Math.abs(current % 4)];
    console.log(current);
});

next_btn.addEventListener('click', (e) => {
    console.log("321");
    current--;
    slide.style.left = slide_arr[Math.abs(current % 4)];
    console.log(current);
});


$(".house-img").hover(function() {
    $(this).children(".after").stop().animate({ 'left' : '0' });
}, function() {
    $(this).children(".after").stop().animate({ 'left' : '400px' });
});

$(".hamburger").on("click", function() {
    this.classList.toggle("change");
    document.querySelector(".mobile-header").classList.toggle("click");
});




