$(function () {

  $('[data-toggle="tooltip"]').tooltip();

  $('.btn--toggle').click(function () {
    $('.main__details--first').toggle();
    $('.main__content').toggleClass('main__content--fullwidth');
    $(this).toggleClass('btn--show').attr('title', $(this).hasClass('btn--show') ? 'Expand' : 'Collapse');;
  });

});
