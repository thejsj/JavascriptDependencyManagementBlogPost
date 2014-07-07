var MovingCircle = require('./moving-circle');
var jQuery       = require('jquery');
require('../bower_components/gsap/src/uncompressed/TweenMax.js');

var MovingCircleHandler; 

(function ($){

    MovingCircleHandler = function () {

        this.circles = [];
        this.$el = $('.circle-container');

        this.init = function () {

            var i;
            for (i = 0; i < 10; i += 1) {
                this.circles.push(new MovingCircle(i, {
                    'width' : this.$el.width(),
                    'height' : this.$el.height(),
                }, this.$el));
            }
        };

        this.init();
        return this;
    };

    $(document).ready(function () {
        window.app = new MovingCircleHandler(); 
    });
    
}(jQuery));