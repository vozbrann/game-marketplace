$( document ).ready(function() {
  $(".notifications-dropdown-menu > .content").overlayScrollbars({});
  $('.main-header .search-button').click(function(e) {
    $('.main-header > .search-container').fadeIn();
    $('.main-header > .search-container .material-input input').focus();
  });
  $('.main-header .notifications-button').click(function(e) {
    $('.main-header .notifications-dropdown-menu').fadeIn();
  });
  $('.main-header .search-container .material-input .close-button').click(function(e) {
    $('.main-header > .search-container').fadeOut();
    $('.main-header > .search-container .material-input input').val('');
  });
  $( document ).click(function(e) {
    if (!$(e.target).parents(".search-container").length && !$(e.target).parents(".main-header .search-button").length) {
      $('.main-header > .search-container').fadeOut();
    }
    if (!$(e.target).parents(".notifications-dropdown-menu").length && !$(e.target).parents(".main-header .notifications-button").length) {
      $('.main-header .notifications-dropdown-menu').fadeOut();
    }
  });
});
