var imgs = ["https://i.imgur.com/lau03kr.jpg", "https://i.imgur.com/sabRS1m.jpg", "https://i.imgur.com/N5wURae.jpg"]
var imgURL = imgs[Math.floor(imgs.length * Math.random())];

$(document).ready(function(){

    $("#img-gallery").attr("src", imgURL);
});

$(document).click(function (event) { 
    $('.hide').fadeOut();           
    $('.show').show("slow");  
    $('.scroll-button').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, main').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function () {
                window.location.hash = hash;
            });
        }
    });
});

(function makeDiv(){
    var divsize = ((Math.random()*100) + 50).toFixed();
    $newdiv = $('<div class=insert>LEONARDO SILVA</div>').css({
        'color': 'black',
        'mix-blend-mode': 'difference',
        'font': '85 12vmin/12vh cookie',
        'position': 'absolute',
    });
    
    var posx = (Math.random() * ($(document).width() - (divsize * 15))).toFixed();
    var posy = (Math.random() * ($(document).height() - (divsize * 15))).toFixed();
    
    $newdiv.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px'
    }).appendTo( '.insert' ).fadeIn(200).delay(400);
 
})();




