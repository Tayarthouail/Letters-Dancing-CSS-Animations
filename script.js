const spans = document.querySelectorAll('.letter span');

spans.forEach((span, index) => {
    span.addEventListener('click', (e) => {
        e.target.classList.add('active');
    });
    
    span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
    });

    setTimeout(() => {
      span.classList.add('active');
    },750 * (index+1))
    
});

