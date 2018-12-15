$(document).ready(function () {
  // ИМПОРТ ПАНЕЛЕЙ
  var link = document.querySelector('link[rel=import]');
  var content = link.import.querySelector('#system-panel_content');
  document.querySelector('#system-panel').appendChild(content.cloneNode(true));

  $(".o-container__title").click(function(){
    var parent = $(this).parent();
    $(".o-container__item").not(parent).removeClass('o-container__item_opened')
    parent.toggleClass('o-container__item_opened')
  });

  $('.o-switcher').click(function(){
    $(this).toggleClass('o-switcher_active')
  });
});


