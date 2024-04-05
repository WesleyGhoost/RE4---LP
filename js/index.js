window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY
    let aboutElement = document.getElementById('about')

    if(scrollPosition >= aboutElement.offsetTop) {
        document.body.style.backgroundImage = "url('./imgs/body_bg-2.jpg')"
    } else {
        document.body.style.backgroundImage = "url('./imgs/body_bg-1.png')"
    }
})

document.addEventListener("DOMContentLoaded", function() {
    const thumbs = document.querySelectorAll('.character_thumbs div');
    
    thumbs.forEach((thumb, index) => {
      thumb.addEventListener('click', function() {
        thumbs.forEach(thumb => {
          thumb.style.filter = 'grayscale(100%)'
        })
        
        thumb.style.filter = 'grayscale(0%)'

        document.getElementById('character_info-carousel').classList.add('slide');
        document.getElementById('character_info-carousel').querySelector('.carousel-item.active').classList.remove('active');
        document.getElementById('character_info-carousel').querySelectorAll('.carousel-item')[index].classList.add('active');
      });
    });
  });