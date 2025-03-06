

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



