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


