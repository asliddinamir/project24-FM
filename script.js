const bars = document.querySelectorAll('.bar');

bars.forEach((bar, index) => {
    bar.addEventListener('mouseenter', () => {
        bar.style.opacity = '0.8'
    });

    bar.addEventListener('mouseleave', () => {
        bar.style.opacity = '1'
    });
});
