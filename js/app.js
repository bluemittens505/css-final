var menu = $("nav ul");
$("#pull").on("click", function(e) {
  e.preventDefault();
  menu.slideToggle();
});

$(window).resize(function() {
  var w = $(this).width();
  if ( w > 960 && menu.is(":hidden") ) {
    menu.removeAttr('style');
  }
});

$(document).ready(function() {

  $('#bbimages a').on('click', function() {
    $('#bbholder').attr('src',this.href);
    $('#bbholder').attr('alt',this.title);
    return false;
  });

  $('#cbimages a').on('click', function() {
    $('#cbholder').attr('src',this.href);
    $('#cbholder').attr('alt',this.title);
    return false;
  });

  $('#asimages a').on('click', function() {
    $('#asholder').attr('src',this.href);
    $('#asholder').attr('alt',this.title);
    return false;
  });

  $('#geimages a').on('click', function() {
    $('#geholder').attr('src',this.href);
    $('#geholder').attr('alt',this.title);
    return false;
  });

  $('#wpimages a').on('click', function() {
    $('#wpholder').attr('src',this.href);
    $('#wpholder').attr('alt',this.title);
    return false;
  });

  $('#vhimages a').on('click', function() {
    $('#vhholder').attr('src',this.href);
    $('#vhholder').attr('alt',this.title);
    return false;
  });

  $('#ltimages a').on('click', function() {
    $('#ltholder').attr('src',this.href);
    $('#ltholder').attr('alt',this.title);
    return false;
  });

});

$('.gallery').flickity({
  imagesLoaded: true,
  percentPosition: false,
  wrapAround: true,
});
