$(document).ready(function() {
    $('.SortBlk li').on("click",function(){
        $(this).find('a').toggleClass('active');
    });

    var counts = 0;
    $(".cartBtn").click(function () {
        counts += +1;
        $(".bag-count").animate({
        opacity: 1
                }, 300, function () {
        $(this).text(counts);
                });
            }); 
});
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 100,
      max: 1000,
      values: [ 100, 1000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "Rs" + ui.values[ 0 ] + " - Rs" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "Rs" + $( "#slider-range" ).slider( "values", 0 ) +
      " - Rs" + $( "#slider-range" ).slider( "values", 1 ) );
  } );
  $( function() {
    $( "#slider-range2" ).slider({
      range: true,
      min: 100,
      max: 1000,
      values: [ 100, 1000 ],
      slide: function( event, ui ) {
        $( "#amount2" ).val( "Rs" + ui.values[ 0 ] + " - Rs" + ui.values[ 1 ] );
      }
    });
    $( "#amount2" ).val( "Rs" + $( "#slider-range2" ).slider( "values", 0 ) +
      " - Rs" + $( "#slider-range2" ).slider( "values", 1 ) );
  } );