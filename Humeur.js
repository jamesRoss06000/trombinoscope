function getTheColor( colorVal ) {
  	var theColor = "";
  	if ( colorVal < 50 ) {
			    myRed = 255;
			    myGreen = parseInt( ( ( colorVal * 2 ) * 255 ) / 100 );
		  }
	  else 	{
			    myRed = parseInt( ( ( 100 - colorVal ) * 2 ) * 255 / 100 );
			    myGreen = 255;
		  }
	  theColor = "rgb(" + myRed + "," + myGreen + ",0)"; 
  	return( theColor ); 
}

function displayorNot(value){
	$("#Calm, #Stressed, #Angry, #Glad, #Happy").hide();
		switch(true){
			case value<=20:
				$("#Angry").show();
				break;
			case value<=40:
				$("#Stressed").show();
				break;
			case value<=60:
				$("#Calm").show();
				break;
			case value<=80:
				$("#Glad").show();
				break;
			case value<=100:
				$("#Happy").show();
				break;
		}
}

function refreshSwatch() {
	var coloredSlider = $( "#coloredSlider" ).slider( "value" );
	displayorNot(coloredSlider);
	myColor = getTheColor( coloredSlider );

	$( "#coloredSlider .ui-slider-range" ).css( "background-color", myColor );

	$( "#coloredSlider .ui-state-default, .ui-widget-content .ui-state-default" ).css( "background-color", myColor );
}

$(function() {
	  $( "#coloredSlider" ).slider({
		    orientation: "horizontal",
		    range: "min",
		    max: 100,
		    value: 0,
		    slide: refreshSwatch,
		    change: refreshSwatch
	  });

});

