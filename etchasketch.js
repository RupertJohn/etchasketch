function initialiseEtchASketch(noBlocks) {

  //If there are already divs in the container, remove them before setting new grid
  if ($("#container").children()) {
    $("#container").children().remove();
  }

  //Calculate size of blocks for new grid dimensions and create them
  var blockWidth = $("#container").data('width')/noBlocks;
  for(var i = 0, total = noBlocks*noBlocks; i < total; i++) {
    var $div = $("<div>", {"class": 'pixel'});
    $("#container").append($div);
  }
  $('.pixel').css({'width': blockWidth, 'height': blockWidth});

  //Initialise event listener to change block opacity
  $('.pixel').on('mouseenter', function() {
    var opacity = parseFloat($('#container').find(this).css('opacity'));
    opacity += 0.1;
    $(this).css({'opacity': opacity});
  });
}

function initialiseButton() {

  //Create document elements that will be added
  var $button = $("<div>", {"class": "button"});
  var $para = $("<p>", {"class": "button-text"})

  //Add elements
  $('body').append($button);
  $('.button').append($para);

  //Add text
  $('.button-text').text('New Sketch');
}

$(document).ready(function() {

  //Initialise 16x16 Etch-A-Sketch
  var noBlocks = 16;
  initialiseEtchASketch(noBlocks);

  //Initialise new sketch button
  initialiseButton()

  //Initialise listener to create new Etch-A-Sketch with new grid size
  $('.button').on('click', function(){
    var gridSize = prompt('Enter grid size');
    if (gridSize < 2) {
      gridSize = 2;
    }
    initialiseEtchASketch(gridSize);
  })
});
