$('.menu-fixed-toggle').click(function() {
  $('body').toggleClass('collapsed');
});

$(document).click(function(e) {
  if ($(window).width() < 992 && !$(e.target).closest('.main-menu').length &&
    !$(e.target).closest('.menu-fixed-toggle').length) {
    $('body').removeClass('collapsed');
  }
});

$('.main-menu .collapse').on('show.bs.collapse', function(e) {
  $(this).parent().toggleClass('expanded');
});
$('.main-menu .collapse').on('hide.bs.collapse', function(e) {
  $(this).parent().toggleClass('expanded');
});

$('.menu-accordion-collapse-toggle').click(function() {
  $(this).siblings('.collapse').collapse('toggle');
});
