let slide = document.querySelector('.slide-panel');
let prev_btn = document.querySelector('.btn-left');
let next_btn = document.querySelector('.btn-right');

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