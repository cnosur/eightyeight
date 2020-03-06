var imgs = ["https://i.imgur.com/lau03kr.jpg", "https://i.imgur.com/sabRS1m.jpg", "https://i.imgur.com/N5wURae.jpg"]
var imgURL = imgs[Math.floor(imgs.length * Math.random())];

$(document).ready(function(){

    $("#img-gallery").attr("src", imgURL);
});

$(document).click(function (event) { 
    $('.hide').fadeOut();           
    $('.show').show("slow");  

});

(function makeDiv(){
    var divsize = ((Math.random()*100) + 50).toFixed();
    $newdiv = $('<div class=insert>GALLERY EIGHTYEIGHT</div>').css({
        'color': 'black',
        'font': 'Courier-new',
        'font-size': '10vh',
        'position': 'absolute',
    });
    
    var posx = (Math.random() * ($(document).width() - (divsize * 25))).toFixed();
    var posy = (Math.random() * ($(document).height() - (divsize * 25))).toFixed();
    
    $newdiv.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px'
    }).appendTo( '.insert' ).fadeIn(200).delay(400);
 
})();


var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

//An image to overlay
$overlay.append($image);

//Add overlay
$("body").append($overlay);

  //click the image and a scaled version of the full size image will appear
  $("#photolist a").click( function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");

    //update overlay with the image linked in the link
    $image.attr("src", imageLocation);

    //show the overlay
    $overlay.show();
  } );

  $("#overlay").click(function() {
    $( "#overlay" ).hide();
  });
