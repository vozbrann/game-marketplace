// material textarea //
$('.material-textarea-wrapper textarea').on('input', function() {
  $(this).parent().addClass('active');
});
$('.material-textarea-wrapper textarea').focusout(function() {
  if ($(this).val() === '') {
    $(this).parent().removeClass('active');
  }
});
// material textarea //
