
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    // Scroll down
    header.classList.add('shrink');
  } else {
    // Scroll up
    header.classList.remove('shrink');
  }

  lastScroll = currentScroll;
});
