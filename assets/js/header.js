$( document ).ready(function() {
  $(".notifications-dropdown-menu > .content").overlayScrollbars({});
  $( document ).click(function(e) {
    if (!$(e.target).parents(".search-container").length && !$(e.target).parents(".main-header .search-button").length) {
      $( '.search-container' ).collapse('hide');
      $('.main-header > div').css('visibility', 'visible');
    }
    if (!$(e.target).parents(".notifications-dropdown-menu").length) {
      $( '.notifications-dropdown-menu' ).collapse('hide');
    }
  });
  $('.main-header .search-button').click(function(e) {
    $('.main-header > div').css('visibility', 'hidden');
  })
});
