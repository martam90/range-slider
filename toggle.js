let slider = document.getElementById("slider");
let outputPrice = document.getElementById("output-price");
let outputNumber = document.getElementById("output-number");
let btn = document.querySelector('.billing__toggle');

slider.oninput = function()  {
    let price = 8 + 4 * this.value;
    let views = 50 + 25 * this.value;

    if (btn.classList.contains('active')) {
        price *= 0.75;
    }
    outputPrice.innerHTML = `$ ${price}.00`;
    outputNumber.innerHTML = `${views}K`;

    let sliderProgress = 100 * this.value / 4;

    slider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%) ${sliderProgress}%, hsl(224, 65%, 95%) ${sliderProgress}%)`;
}

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    slider.oninput();
});

slider.oninput();