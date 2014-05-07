$(".title a").prop('target', '_blank');
$(".mode-night a").css('color', '#ddd');
$(".mode-night a").css('text-decoration', 'none');

//if we're on HackerNews they don't use classes much so it gets more awkward
if (window.location.href.indexOf("ycombinator") > -1) {
  $($("a").get().reverse()).each(function() {
    if ($(this).text() === "More") {
      $(this).prop('target', '');
      return false;
    }
  });

  //I'd like to add collapsible comments. There's a good guide here:
  //http://alexander.kirk.at/js/hackernews-collapsible-threads.js
  //But I'm at work now and should get some other stuff done
}
