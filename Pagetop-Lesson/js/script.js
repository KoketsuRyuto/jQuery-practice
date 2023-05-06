$(function () {
  $('#back a').on('click', function (e) {
    $('body, html').animate({
      scrollTop: 0
    }, 2000);
    e.preventDefault();
  });
});
