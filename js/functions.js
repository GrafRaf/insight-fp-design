$(document).ready(function () {
  // ИМПОРТ ПАНЕЛЕЙ
  var link = document.querySelector('link[rel=import]');
  var content = link.import.querySelector('#system-panel_content');
  document.querySelector('#system-panel').appendChild(content.cloneNode(true));

  $(".o-container__title").click(function() {
    var parent = $(this).parent();
    $(".o-container__item").not(parent).removeClass('o-container__item_opened')
    parent.toggleClass('o-container__item_opened')
  });

  $('.o-switcher').click(function() {
    $(this).toggleClass('o-switcher_active')
  });

  $('.o-icon_more').click(function() {
    $(this).next('.o-dropdown-list').slideToggle(300);
  });

  $('.o-dropdown-list__item_close').click(function() {
    $(this).parent('.o-dropdown-list').slideUp(300);
    return false;
  });

  $('.o-dialog__close .o-icon_close').click(function(){
    $(this).parents('.o-dialog-wrapper').removeClass('o-dialog-wrapper_visible')
  });

  $(".o-icon_toggle").click(function(){
    $('.o-popup-reports__body').slideToggle()
    $(this).toggleClass('is-rotated');
  });

  initSelect();

  $(".aside").mouseenter(function(){
    $(this).addClass("aside_visible")
  })

  $(".o-menu__item").click(function(){
    var childMenu = $(this).next(".o-menu__fixed");
    var subMenu = $(this).next(".o-menu__submenu");
    childMenu.fadeIn().animate({
      "left": "251px",
      opacity: 1
    }, 300);
    subMenu.fadeIn().animate({
      "top": 0,
      opacity: 1
    }, 300);
  });

  $(".aside-mask").click(function(){
    $(".aside_visible").removeClass("aside_visible");
    $(".o-menu__fixed, .o-menu__submenu").removeAttr("style");
  });

  $('.o-icon_hamburger').click(function(){
    $('.aside').toggleClass('aside_mobile-opened')
  })

  /*$(".o-menu__item").click(function(){
    $("body").addClass("body_aside");
    var childMenu = $(this).parent().children(".o-menu__fixed");
    var subMenu = $(this).parent().children(".o-menu__submenu");
    if (childMenu.length) {
      childMenu.addClass("o-menu__fixed_visible")
    }
    if (subMenu.length) {
      subMenu.addClass("o-menu__submenu_visible")
    }
  })

  $(".aside-mask").click(function(){
    $("body").removeClass("body_aside");
    $(".o-menu__fixed_visible").removeClass("o-menu__fixed_visible");
    $(".o-menu__submenu_visible").removeClass("o-menu__submenu_visible");
  })*/
});

function initSelect() {
  var select = $('.o-select');
  select.each(function () {
    $(this).on("click", function() {
      select.not(this).removeClass('o-select_opened');
      $(this).toggleClass('o-select_opened');
    });
  });
  $('.o-select__item_back').click(function() {
    select.removeClass('o-select_opened');
    return false;
  })
}

function showDialog(el) {
  $('#' + el).addClass('o-dialog-wrapper_visible');
}


