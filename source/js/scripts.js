$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('.btn--toggle-filters').click(function () {
    $('.main__filters').toggle();
    $('.main__content').toggleClass('main__content--fullwidth');
    $(this).toggleClass('btn--show').attr('title', $(this).hasClass('btn--show') ? 'Show filters' : 'Hide filters');;
  });
});
