window.addEventListener('scroll', function () {
  let scrollPosition = window.scrollY
  let aboutElement = document.getElementById('about')

  if (scrollPosition >= aboutElement.offsetTop) {
    document.body.style.backgroundImage = "url('./imgs/body_bg-2.jpg')"
  } else {
    document.body.style.backgroundImage = "url('./imgs/body_bg-1.png')"
  }
})

const thumbs = document.querySelectorAll('.character_thumbs div');
const carousel = document.getElementById('character_info-carousel')
const carouselItems = carousel.querySelectorAll('.carousel-item')

carousel.addEventListener('slid.bs.carousel', function () {
  const activeIndex = Array.from(carouselItems).findIndex(item => item.classList.contains('active'));

  thumbs.forEach((thumb, index) => {
    if (index !== activeIndex) {
      thumb.style.filter = 'grayscale(100%)';
    } else {
      thumb.style.filter = 'grayscale(0%)';
    }
  });
});

thumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', function () {
    thumbs.forEach(thumb => {
      thumb.style.filter = 'grayscale(100%)'
    })

    thumb.style.filter = 'grayscale(0%)'

    carousel.classList.add('slide');
    carousel.querySelector('.carousel-item.active').classList.remove('active');
    carouselItems[index].classList.add('active');
  });
});