$('.download-button.on-lower-bp.dl-dropdown-toggle').on('click', function() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      window.location.replace("http://google.com");
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.replace("http://apple.com");
    }

    let isIOS = /iPad|iPhone|iPod/.test(navigator.platform) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

    if (isIOS==true) {
      window.location.replace("http://apple.com");
    } 
  });

  // END OF DOWNLOAD APP ON APPLE/GOOGLE


  //BUTTON CLICKS
  $('.subscribe-button').click(function () {
    $(this).closest('.section').find('.submit-hide').click();
  });

  $('.arrow-next, .next-arrow-n').click(function () {
    $(this).closest('.section').find('.splide__arrow.splide__arrow--next').click();
  });

  $('.arrow-prev, .prev-arrow-n').click(function () {
    $(this).closest('.section').find('.splide__arrow.splide__arrow--prev').click();
  });

  $('.subscribe-button.modal-button').click(function () {
    $(this).closest('.form-container.homepage-form').find('.submit-hide').click();
  });

  $('.search-button-design').click(function () {
    $(this).closest('.section').find('.search-button').click();
  });

  //END OF BUTTON CLICKS


  //NAV ARROW ANIMATIONS

  $('.navlink-holder').on('mouseenter', function() {

    if (window.matchMedia("(min-width: 992px)").matches) {
      $(this).closest('.nav-arrow').siblings().find('.black-arrow').removeClass('hide-black');
      $(this).closest('.nav-arrow').siblings().find('.nav-green-arrow').removeClass('show-green');

      $(this).find('.black-arrow').toggleClass('hide-arrow');
      $(this).find('.nav-green-arrow').toggleClass('show-green');
    } else {
    }

  });

  $('.navlink-holder').on('mouseleave', function() {

    if (window.matchMedia("(min-width: 992px)").matches) {
      $(this).find('.black-arrow').removeClass('hide-arrow');
      $(this).find('.nav-green-arrow').removeClass('show-green');
    } else {
    }

  });

  //$('.navlink-p.navlink-p-mobile').on('click', function() {
  $('.navlink-arrow').on('click', function() {
    $('.dropdown-text').toggleClass('dropdown-show');
    $(this).toggleClass('green-text');
    $(this).find('.black-arrow').toggleClass('hide-arrow');
    $(this).find('.nav-green-arrow').toggleClass('show-green');

    $(this).closest('.navlink-holder.nav-dropdown.navlink-mobile').siblings().find('.dropdown-text').removeClass('dropdown-show');
    $(this).closest('.navlink-holder.nav-dropdown.navlink-mobile').siblings().find('.navlink-p.navlink-p-mobile').removeClass('green-text');
    $(this).closest('.navlink-holder.nav-dropdown.navlink-mobile').siblings().find('.black-arrow').removeClass('hide-arrow');
    $(this).closest('.navlink-holder.nav-dropdown.navlink-mobile').siblings().find('.nav-green-arrow').removeClass('show-green');
  });

  $('.navlink-holder.nav-dropdown').on('mouseenter', function() {
    $('.overlay').css('opacity', '100%');
  });

  $('.navlink-holder.nav-dropdown').on('mouseleave', function() {
    $('.overlay').css('opacity', '0');
  });

  $('.download-button-container').on('mouseenter', function() {
    $('.overlay').css('opacity', '100%');
  });

  $('.download-button-container').on('mouseleave', function() {
    $('.overlay').css('opacity', '0');
  });

  //END OF NAV ARROW ANIMATIONS


  //SCROLL DISABLE ON MOBILE WHEN MENU IS OPENED

  $('.hamburger-holder').on('click', function() { $('body').toggleClass('no-scroll');
                                                });

  //END OF SCROLL DISABLE

//HOMEPAGE CODE
if ($(".this-is-homepage")[0]){

    let splide1 = new Splide('.slider1', {
  perPage: 2,
  perMove: 1,
  speed : 800,
  autoWidth: true,
  updateOnMove : true,
  trimSpace: true,
  autoplay: true,
  interval: 3000,
  type: 'loop',
  pauseOnHover: false,
  pauseOnFocus: false,
}).mount();

let splide2 = new Splide('.slider2', {
  perPage: 1,
  perMove: 1,
  type: 'fade',
  classes: {
    pagination: 'splide__pagination why-pagination',
    page: 'splide__pagination__page why-page',
  },
  speed : 300,
  autoWidth: true,
  updateOnMove : true,
  trimSpace: true,
  /*autoplay: true,
  interval: 6000,
  type: 'fade',
  pauseOnHover: false,
  pauseOnFocus: false,
  rewind: true,*/
}).mount();

// For Slider 1
/* splide1.on('moved', function () {
  let $sliderSection = $('.slider1').closest('.section');
  let totalSlides = splide1.length;
  let currentIndex = splide1.index;

  // Disable prev arrow if on the first slide
  if (currentIndex === 0) {
    $sliderSection.find('.prev-arrow-n').removeClass('active_arrow');
  } else {
    $sliderSection.find('.prev-arrow-n').addClass('active_arrow');
  }

  // Disable next arrow if at the last slide
  if (currentIndex >= totalSlides - splide1.options.perPage) {
    $sliderSection.find('.next-arrow-n').removeClass('active_arrow');
  } else {
    $sliderSection.find('.next-arrow-n').addClass('active_arrow');
  }
});
*/
// For Slider 2
splide2.on('moved', function (newIndex) {
  let $sliderSection = $('.slider2').closest('.section');

  // Enable/Disable prev arrow
  if (newIndex === 0) {
    $sliderSection.find('.prev-arrow-n').removeClass('active_arrow');
  } else {
    $sliderSection.find('.prev-arrow-n').addClass('active_arrow');
  }

  // Enable/Disable next arrow
  if (newIndex === splide2.length - 1) {
    $sliderSection.find('.next-arrow-n').removeClass('active_arrow');
  } else {
    $sliderSection.find('.next-arrow-n').addClass('active_arrow');
  }
});


$('.small-box.open').on('click', function() {
  $(this).closest('.info-container').siblings().find('.small-box.open').removeClass('smallbox-hide');
  $(this).closest('.info-container').siblings().find('.icon-content').removeClass('inside-opacity-100');
  $(this).toggleClass('smallbox-hide');
  $(this).closest('.info-container').find('.icon-content').toggleClass('inside-opacity-100');
});

//App Scroller
$('.first-trigger').on('inview', function (event, isInView) {
  if (isInView) {
    $('.phone-content').css('opacity', '0');
    $('.first-mockup').css('opacity', '1');
    $('.explore-box-c:not(.explore-content1)').fadeOut(0);
    $('.explore-content1').fadeIn(300);
  } else {
  }
});

$('.second-trigger').on('inview', function (event, isInView) {
  if (isInView) {
    $('.phone-content').css('opacity', '0');
    $('.second-mockup').css('opacity', '1');
    $('.explore-box-c').fadeOut(0);
    $('.explore-content2').fadeIn(300);
  } else {
  }
});

$('.third-trigger').on('inview', function (event, isInView) {
  if (isInView) {
    $('.phone-content').css('opacity', '0');
    $('.third-mockup').css('opacity', '1');
    $('.explore-box-c:not(.explore-content3)').fadeOut(0);
    $('.explore-content3').fadeIn(300);
  } else {
  }
});

$(document).ready(function(){
  if (!Cookies.get('alert')) { 
    setTimeout(function(){
      document.getElementById("h-button").click();
      Cookies.set('alert', true, { expires: 30 });
    }, 30000);
  }
});
}

//ABOUT CODE
if ($(".this-is-about")[0]){
     let splide2 = new Splide('.slider2', {
    perPage: 1,
    perMove: 1,
    //type: 'fade',
    classes: {
      pagination: 'splide__pagination why-pagination',
      page: 'splide__pagination__page why-page',
    },
    speed : 600,
    autoWidth: true,
    updateOnMove : true,
    trimSpace: true,
  }).mount();

 /* let splide5 = new Splide('.slider5', {
    perPage: 1,
    perMove: 1,
    type: 'loop',
    gap: '1.32em',
    arrows: 'slider',
    speed : 600,
    dragAngleThreshold: 30,
    autoWidth: true,
    trimSpace: true,
    breakpoints: {
      767: {
        perPage: 2,
        perMove: 1,
      },
      479: {
        perPage: 1,
        perMove: 1,
      }
    }
  }).mount();*/


  //arrows anim
  // For Slider 2
  splide2.on('moved', function (newIndex) {
    let $sliderSection = $('.slider2').closest('.section');

    // Enable/Disable prev arrow
    if (newIndex === 0) {
      $sliderSection.find('.prev-arrow-n').removeClass('active_arrow');
    } else {
      $sliderSection.find('.prev-arrow-n').addClass('active_arrow');
    }

    // Enable/Disable next arrow
    if (newIndex === splide2.length - 1) {
      $sliderSection.find('.next-arrow-n').removeClass('active_arrow');
    } else {
      $sliderSection.find('.next-arrow-n').addClass('active_arrow');
    }
  });
}
