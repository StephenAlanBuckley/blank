$(".title a").prop('target', '_blank');
$(".mode-night a").css('color', '#ddd');
$(".mode-night a").css('text-decoration', 'none');

if (window.location.href.indexOf("ycombinator") > -1) {
  $($("a").get().reverse()).each(function() {
    if ($(this).text() === "More") {
      $(this).prop('target', '');
      return false;
    }
  });
}
