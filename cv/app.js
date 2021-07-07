/* ES5 version for iOS 10.3.4 (iPhone 5) */

document.addEventListener('DOMContentLoaded', () => {

  var $images = document.querySelectorAll('a img');
  for (var i = 0; i < $images.length; i++) {
    $images[i].addEventListener('click', function(e) {
      e.preventDefault();
      BigPicture({
        el: e.target,
        noLoader: true,
        gallery: '#gallery-container',
        galleryAttribute: 'src',
      });
    });
  };

});
