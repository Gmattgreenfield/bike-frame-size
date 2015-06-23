
// Road bike:
//     inside leg * 0.665. For a Triathlon bike subduct 3cm of your value.
//     inside leg – 24cm
//     if only height is provided, divide it by 3.15 to get the frame size in cm, display 1cm frame size either side e.g. 56, 57, 58.
// Mountain bike:
//     inside leg * 0.226 = frame size in inches
//     inside leg – 30cm

function calcFrameSize(){

    $bikeType = $("input[name=bike-type]:checked").val();
    $height = $("#input-height").val();
    $insideLeg = $("#input-leg").val();

    // If we have the inside leg measurement, use it instead of height
    if ($insideLeg != ""){

        // Do the maths to convert inside leg measurement to framesize
        if ( $bikeType === "road" ) {
            frameSize = $insideLeg * 0.665;
            document.getElementById("js-measurement").innerHTML = "cm";
        } else {
            frameSize = $insideLeg * 0.226;
            document.getElementById("js-measurement").innerHTML = "\"";
        }
    }
    // else we need to use the height, not the inside leg - less accurate
    else {

        // Do the maths to convert height measurement to framesize
        if ( $bikeType === "road" ) {
            frameSize = $height / 3.15;
            document.getElementById("js-measurement").innerHTML = "cm";
        } else {
            frameSize = $height * 0.226;
            document.getElementById("js-measurement").innerHTML = "\"";
        }
    }

    // Round it to the nearest whole number
    frameSize = Math.round( frameSize )

    return frameSize;
}


$(document).ready( function(){

    // Update the result when the "inside leg" input is changed
    $(" #js-controls .js-input ").change( function(){
        // Run the function that works it all out.
        document.getElementById("js-result").innerHTML = calcFrameSize();
    });


});
