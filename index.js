const mq = window.matchMedia('(max-width: 600px)');
const handleMediaQuery = (mq) => {
    if (mq.matches) {
        $(".mobile__screen__hm").show();
        $(".img__hero").attr("src","./assets/images/image-web-3-mobile.jpg")
        $(".menu__btn").click(function(){
            $(".navbar__mobile__menu").show();
            $(".overlay").show();

        });

        $(".close__img").click(function(){
            $(".navbar__mobile__menu").hide();
            $(".overlay").hide();
        });

    } else {
        $(".menu__btn").show();
        $(".mobile__screen__hm").hide();
        $(".navbar__mobile__menu").hide();
        $(".overlay").hide();
    }
  };

document.addEventListener("DOMContentLoaded", function() {
    $(".navbar__mobile__menu").hide();
    $(".overlay").hide();
    const navItems = document.querySelectorAll('.nav__item');
    // Function to add class 'show' to each item after a delay
    function showItems() {
      navItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('show');
        }, index * 100); // Adjusting delay time here (in milliseconds)
      });
    }
  
    // Calling the function after a small delay (to allow the page to render)
    setTimeout(showItems, 400); // Adjusting delay time here (in milliseconds)
    const heading = document.querySelector('.heading');
    heading.style.opacity = '1';

    const slidingDiv = document.querySelector('.new__news__text__cont');
    slidingDiv.style.opacity = '1';
    slidingDiv.classList.add('slide-from-bottom');
});

handleMediaQuery(mq);
mq.addListener(handleMediaQuery);

