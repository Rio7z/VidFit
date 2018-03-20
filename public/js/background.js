function randOrd() {
    return (Math.round(Math.random())-0.5);
}

$(document).ready(function() {
    var images = [ 'hero-1', 'hero-2'];
    images.sort( randOrd );
    $('#banner').each(function(i, val) {
        $(this).addClass(images[i]);
    });
});
