// material select //
$( document ).ready(function() {
  let materialSelect = $('.material-select');
  materialSelect.each(function() {
    $( this ).removeClass('material-select');
    let classes = $( this ).attr('class');
    let options = $( this ).find('option');
    let placeholder = $( this ).attr('data-placeholder');
    $( this ).addClass('d-none');
    $( this ).wrap( `<div class="material-select-wrapper ${classes}">`);
    let optionList = options.map(function() {
      let value = $(this).attr('value');
      let text = $(this).text();
      return `<li data-id="${value}">${text}</li>`;
    }).get().join("");
    $( this ).after(`
    <div class="material-select-body">
        <span class="expand-toggle material-icons">expand_more</span>
        <span class="clear-button material-icons">close</span>
        <span class="placeholder">${placeholder}</span>
        <span class="selected"></span>
        <ul class="select-list collapse list-unstyled">
            ${optionList}
        </ul>
    </div>
    `);
  });


  $('.material-select-body').click(function() {
    let selectList = $(this).find('.select-list');
    selectList.collapse('toggle');
    $(window).click(function() {
      selectList.collapse('hide')
    });
  });
  $('.select-list').on('show.bs.collapse', function () {
    $(this).parent().addClass('active');
    $(this).parent().addClass('expanded');
  });
  $('.select-list').on('hide.bs.collapse', function () {
    $(this).parent().removeClass('expanded');
    if (!$(this).siblings('.selected').html()) {
      $(this).parent().removeClass('active');
    }
  });
  $('.select-list li').click(function() {
    let selectedValue = $(this).attr("data-id");
    $(this).parents('.material-select-wrapper').find('select').val(selectedValue);
    $(this).parent().siblings('.selected').text($(this).text());
  });

  // material select clear button
  $('.material-select-body .clear-button').click(function() {
    $(this).parent().find('.selected').html('');
    $(this).parent().find('.select-list').collapse('hide');
  });
});
// material select //
