// http://www.jessicabeckerdesigns.com/?p=938&preview=true#
(function($){

  var $button = $('.button');
  var data = {
    'buttonText': 'Before'
  };

  // Hide and set text
  $button
    .text(data.buttonText)
    .hide();

  $('.soliloquy-container').mouseenter(function(){

    var $activeImg  = $('.soliloquy-active-slide').find('img');
    var goodImgPath = $activeImg.attr('src');
    var badImgPath  = goodImgPath.replace('960x700_c.jpg','before-960x700_c.jpg');

    // Check if image exists.  If it does make the button appear
    var img = new Image();
    img.onload = function(){

      console.log('Image found!');

      $button.show();

      data.badImgPath = badImgPath;
      data.$activeImg = $activeImg;
      data.goodImgPath = goodImgPath;
    };

    img.onerror = function(){

      console.log('No image found');
      $button.hide();
    };

    img.src = badImgPath;

  });

  $button.click(function (e){

    e.preventDefault();

    if (data.buttonText == 'Before') {

      data.$activeImg.attr('src',data.badImgPath);
      data.buttonText = 'After';

    } else if (data.buttonText == 'After') {
      data.$activeImg.attr('src',data.goodImgPath);
      data.buttonText = 'Before';
    }
      $button.text(data.buttonText);
  });

})(jQuery);