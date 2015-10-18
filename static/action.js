$(document).ready( function() {
  
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    gutter: 10,
    columnWidth: 160
  });

  $grid.on( 'click', '.sztaki', function() {
    // change size of item via class
    $( this ).toggleClass('grid-item--gigante sztaki--gigante');
    // trigger layout
    $grid.masonry();
  });

  $grid.on( 'click', '.msc', function() {
    // change size of item via class
    $( this ).toggleClass('grid-item--gigante msc--gigante');
    // trigger layout
    $grid.masonry();
  });

  $grid.on( 'click', '.bsc', function() {
    // change size of item via class
    $( this ).toggleClass('grid-item--gigante bsc--gigante');
    // trigger layout
    $grid.masonry();
  });

  $grid.on( 'click', '.praudit', function() {
    // change size of item via class
    $( this ).toggleClass('grid-item--gigante praudit--gigante');
    // trigger layout
    $grid.masonry();
  });

  $grid.on( 'click', '.bme', function() {
    // change size of item via class
    $( this ).toggleClass('grid-item--gigante bme--gigante');
    // trigger layout
    $grid.masonry();
  });

  $grid.on( 'click', '.ejg', function() {
    // change size of item via class
    $( this ).toggleClass('grid-item--gigante ejg--gigante');
    // trigger layout
    $grid.masonry();
  });

  $grid.on( 'click', '.bsi', function() {
    // change size of item via class
    $( this ).toggleClass('grid-item--gigante bsi--gigante');
    // trigger layout
    $grid.masonry();
  });

  $grid.on( 'click', '.prog_lang', function() {
    // change size of item via class
    $( this ).toggleClass('grid-item--gigante prog_lang--gigante');
    // trigger layout
    $grid.masonry();
  });

  $grid.on( 'click', '.distrib', function() {
    // change size of item via class
    $( this ).toggleClass('grid-item--gigante distrib--gigante');
    // trigger layout
    $grid.masonry();
  });

  $grid.on( 'layoutComplete', function( event, laidOutItems ) {
    console.log( 'Masonry layout complete with ' + laidOutItems.length + ' items' );
  });
  
});