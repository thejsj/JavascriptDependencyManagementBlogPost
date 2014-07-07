var jQuery       = require('jquery');

var MovingCircle; 

(function ($){

    MovingCircle = function (index, width_and_height, $container) {

        this.init = function () {
            this.id = "circle-" + index;
            this.className = 'single-circle';
            this.x = Math.random() * width_and_height.width;
            this.y = Math.random() * width_and_height.height;
            this.$container = $container; 

            $container
                .append('<div id="' + this.id + '" class="' + this.className + '">');

            this.$el = $('#' + this.id);

            this.$el
                .css('background', 'red')
                .css('top', this.y)
                .css('left', this.x);

        };

        this.init();
        return this;
    };

}(jQuery));

module.exports = MovingCircle;