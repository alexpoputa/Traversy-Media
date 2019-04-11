var audio;

// Hide Pause Button
$('#pause').hide();

// Initialize Audio
initAudio($('#playlist li:first-child'));

// Initializer Function
function initAudio(element) {
    var song = element.attr('song');
    var title = element.text();
    var cover = element.attr('cover');
    var artist = element.attr('artist');

    // Create Audio Object
    audio = new Audio('media/' + song);

    if (!audio.currentTime) { // if the song hasn't started yet
        $('#duration').html('0.00');
    }

    $('#audio-player .title').text(title);
    $('#audio-player .artist').text(artist);

    // Insert Cover Image
    $('img.cover').attr('src', 'img/covers/' + cover);

    $('#playlist li').removeClass('active');
    element.addClass('active');
}

// Play Button
$('#play').click(function () {
    audio.play();
    $('#play').hide();
    $('#pause').show();
    $('#duration').fadeIn(400);
    showDuration();
});

// Pause Button
$('#pause').click(function () {
    audio.pause();
    $('#pause').hide();
    $('#play').show();
});

// Stop Button
$('#stop').click(function () {
    audio.pause();
    audio.currentTime = 0;
    $('#pause').hide();
    $('#play').show();
    $('#duration').fadeOut(400);
});

// Next Button
$('#next').click(function () {
    audio.pause();
    var next = $('#playlist li.active').next();
    if (next.length === 0) {
        next = $('#playlist li:first-child'); // if we're at the last song , we will go to the first song when pushing the button
    }
    // reinitialize audio when it goes back to first song
    initAudio(next);
    audio.play();
    showDuration();
});

// Previous Button
$('#prev').click(function () {
    audio.pause();
    var prev = $('#playlist li.active').prev();
    if (prev.length == 0) {
        prev = $('#playlist li:last-child'); // if we're at the first song , we will go to the last song when pushing the button
    }
    // reinitialize audio when it goes back to last song
    initAudio(prev);
    audio.play();
    showDuration();
});

// Volume Control
$('#volume').change(function () {
    audio.volume = parseFloat(this.value / 10);
});

// Time Duration
function showDuration() {
    $(audio).bind('timeupdate', function () {
        // Get Hours & Minutes
        var seconds = parseInt(audio.currentTime % 60);
        var minutes = parseInt((audio.currentTime) / 60) % 60;
        // Add 0 if less than 10
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        $('#duration').html(minutes + '.' + seconds);
        var value = 0;
        if (audio.currentTime > 0) { // if its playing
            value = ((100 / audio.duration) * audio.currentTime); // smooth duration bar
        }
        $('#progress').css('width', value + '%'); // calculating the position of the progress bar and set dinamically the width of the progress bar
    });

    // Jump to song point with mouse
    $("#progressbar").mouseup(function (e) {
        var leftOffset = e.pageX - $(this).offset().left;
        var songPercents = leftOffset / $('#progressbar').width();
        audio.currentTime = songPercents * audio.duration;
    });

    // Play a song from the list when clicked
    $('#playlist li').click(function () {
        audio.pause();
        initAudio($(this));
        audio.play();
        $('#pause').show();
        $('#play').hide();
        $('#duration').fadeIn(400);
        showDuration();
    });
}