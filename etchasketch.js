function initialiseEtchASketch(noBlocks) {
  var blockWidth = $("#container").data('width')/noBlocks;
  for(var i = 0, total = noBlocks*noBlocks; i < total; i++) {
    var $div = $("<div>", {"class": 'pixel'})
    $("#container").append($div);
  }
  $('.pixel').css({'width': blockWidth, 'height': blockWidth})
}

$(document).ready(function() {
  var noBlocks = 16;
  initialiseEtchASketch(noBlocks);
});
