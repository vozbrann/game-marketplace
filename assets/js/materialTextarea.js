// material textarea //
$('.material-textarea textarea').on('input', function() {
  $(this).parent().addClass('active');
});
$('.material-textarea textarea').focusout(function() {
  if ($(this).val() === '') {
    $(this).parent().removeClass('active');
  }
});
// material textarea //
