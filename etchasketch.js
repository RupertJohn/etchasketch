function initialiseEtchASketch(noBlocks) {
  var blockWidth = $("#container").data('width')/noBlocks;
  var $div = $("<div>", {"class": 'pixel'})
  for(var i = 0, total = noBlocks*noBlocks; i < total; i++) {
    $("#container").append($div);
  }
  $('.pixel').css({'width': blockWidth, 'height': blockWidth})
}

$(document).ready(function() {
  var noBlocks = 16;
  initialiseEtchASketch(noBlocks);
});
