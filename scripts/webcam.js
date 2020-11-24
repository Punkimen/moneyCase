Webcam.set({
    width: 320,
    height: 240,
    dest_width: 640,
    dest_height: 480,
    image_format: 'jpeg',
    jpeg_quality: 100,
    force_flash: false,
    flip_horiz: false,
    fps: 60
});
Webcam.attach('#my_camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById('my_result').innerHTML = '<img src="' + data_uri + '"/>';
        $('#my_camera').hide();
        $('.photo__wrapper-img::before').hide();
    });
}