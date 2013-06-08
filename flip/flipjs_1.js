
jQuery(function($) {

    //Trigger rotate
    // --------------------
    $('#flip .thumb').on('rotate', function() {
        var $this = $(this);
        $this.addClass('active');
        var tout = getRandomInt(3, 10) * 1000;
        setTimeout(function() {
            $this.removeClass('active');
        }, tout);
    });
    
    var rotateCycle = setInterval(function() {
        var thumbs = $('#flip .thumb:not(.active)');
        $(thumbs[getRandomInt(0, thumbs.length)]).trigger('rotate');
    }, 2000);

    
})

//Custom functions 

/**
 * Returns a random integer between min and max
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 