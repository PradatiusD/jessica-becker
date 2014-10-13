// http://www.jessicabeckerdesigns.com/?p=938&preview=true#
(function($){
  $('.button').click(function(e){
    e.preventDefault();
    
    var $activeImg  = $('.soliloquy-active-slide').find('img');
    var goodImgPath = $activeImg.attr('src');
    var badImgPath  = goodImgPath.replace('960x700_c.jpg','before-960x700_c.jpg');

    var img = new Image();
    img.onload = function(){
      $activeImg.attr('src',badImgPath);
    };
    img.onerror = function(){
      console.log('No image found');
    };
    img.src = badImgPath;


  });

})(jQuery);