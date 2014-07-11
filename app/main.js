var MovingCircle = require('./moving-circle');
var jQuery       = require('jquery');
var _            = require('underscore');
require('../bower_components/gsap/src/uncompressed/TweenMax.js');

var MovingCircleHandler; 

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

window.paused = false;
(function ($){

    MovingCircleHandler = function () {

        this.circles = [];
        this.$el = $('.circle-container');
        
        this.init = function () {
            var i;

            this.canvas = this.$el.get(0);
            this.canvas.width = this.$el.width();
            this.canvas.height = this.$el.height();
            this.context = this.canvas.getContext('2d');

            for (i = 0; i < 50; i += 1) {
                this.circles.push(new MovingCircle(i, {
                    'width' : this.canvas.width,
                    'height' : this.canvas.height,
                }, this.context, false));
            }

            this.$el.click(_.bind(this.append, this));

            requestAnimationFrame(_.bind(this.update, this));
            $(window).resize(_.bind(this.reset, this));
        };

        this.update = function () {
            if (!window.paused) {
                this.context.clearRect ( 0, 0, this.canvas.width, this.canvas.height);
                for (i = 0; i < this.circles.length; i += 1) {
                    this.circles[i].update();
                }
            }
            requestAnimationFrame(_.bind(this.update, this));
        }; 

        this.append = function (event) {
            console.log(event);
            this.circles.push(new MovingCircle(i, {
                'width' : this.canvas.width,
                'height' : this.canvas.height,
            }, this.context, {
                'x' : event.clientX,
                'y' : event.clientY
            }));
        };

        this.reset = function () {
            for (i = 0; i < this.circles.length; i += 1) {
                this.circles[i].delete();
            }
            delete this.circles;
            this.init();
        }

        this.init();
        return this;
    };

    $(document).ready(function () {
        window.app = new MovingCircleHandler(); 
    });
    
}(jQuery));