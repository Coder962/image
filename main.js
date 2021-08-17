Webcam.attach('#camera');
camera = document.getElementById("camera");
Webcam.set({
    width:350,
    height:300,
    imgage_format : 'png',
    png_quality:100
});
camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
});
}
