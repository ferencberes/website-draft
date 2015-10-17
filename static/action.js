$(document).ready( function() {
  
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    gutter: 10,
    columnWidth: 160
  });

  $grid.on( 'click', '.grid-item', function() {
    // change size of item via class
    $( this ).toggleClass('grid-item--gigante');
    // trigger layout
    $grid.masonry();
  });

  $grid.on( 'layoutComplete', function( event, laidOutItems ) {
    console.log( 'Masonry layout complete with ' + laidOutItems.length + ' items' );
  });
  
});