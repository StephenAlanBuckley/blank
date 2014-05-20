//Reddit changes
if (window.location.href.indexOf("reddit") > -1) {
    $(".title a").prop('target', '_blank');
}

//Readability changes
if (window.location.href.indexOf("readability") > -1) {
    var links = $(".mode-night a");
    links.css('color', '#ddd');
    var linkColor = 'dark';
    links.css('text-decoration', 'none');
    
    $('body').keypress(function(event) {
        if (event.which == 65 || event.which == 97) {
            if(linkColor == 'dark') {
                links.css('color', '#00f');
                linkColor = 'blue';
            } else {
                links.css('color', '#ddd');
                linkColor = 'dark';
            }
        }
    });
}

//Hacker News changes
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
