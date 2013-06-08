(function($) {
    $.fn.fliper = function(options) {

        var defaults = {
            transition: 'flipX',
            timeout: 5000
        };

        var option = $.extend(defaults, options);

        return this.each(function() {

            // plugin code goes here

            // get main selector 
            var $this = $(this);

            //thumb selector 
            var $thumbselector = $this.find('.thumb');

            var $itemselctor = $thumbselector.find('.item');

            /// add class effect class into itemselecetor 

            ///no of thumbselector selector 
            var no_of_thumb = $thumbselector.length;
            

            $itemselctor.addClass(option.transition);

            $thumbselector.on('rotate', function() {
                var $thiss = $(this);
                $thiss.addClass('active');
                var tout = getRandomInt(0, no_of_thumb) * option.timeout;
                setTimeout(function() {
                    $thiss.removeClass('active');
                     
                }, tout); 

                console.log(tout);

            });

            var rotateCycle = setInterval(function() {
                var thumbs = $thumbselector.not('.active');
                $(thumbs[getRandomInt(0, thumbs.length)]).trigger('rotate');
                //console.log(getRandomInt(0, thumbs.length));
            }, option.timeout);


            


        });



    };


})(jQuery);

/** my randomized function ***/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}