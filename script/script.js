$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

$('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {enabled:true}
  // other options
});