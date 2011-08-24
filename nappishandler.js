
var slideIndex = 0;
var slides = [];

$(document).ready(function() {
  $(".slide").each(function(index) {
    slides.push(this);
  });
  slides.push($("#slides").get()[0]);

  $(document).keyup(function(e) {
    if(e.which == 37) {
	  goBackwards();
	}
    if(e.which == 39) {
	  goForwards();
	}

  });
});

function goForwards() {
  if( slides.length > (slideIndex+1) ) {
    slideIndex++;
	moveTo();
  }
}
function moveTo() {
    var e = slides[slideIndex];
	$(e).zoomTo({targetSize: 1.0});
}
function goBackwards() {
  if( slideIndex > 0 ) {
    slideIndex--;
	moveTo();
  }
}
