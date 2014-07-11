var jQuery       = require('jquery');
var _            = require('underscore');

var MovingCircle; 

(function ($){

    MovingCircle = function (index, width_and_height, context, position) {

        this.init = function () {
            this.id = "circle-" + index;
            this.className = 'single-circle';
            this.speed = 5;
            this.context = context;

            if(position) {
                this.x = position.x;
                this.y = position.y;
            } else {
                this.x = _.random(1, width_and_height.width);
                this.y = _.random(1, width_and_height.height);
            }
            this.up   = ((Math.random() > 0.5) ? true : false);
            this.left = ((Math.random() > 0.5) ? true : false);

            this.size = 5;

            this.color = {
                'r' : _.random(50, 255),
                'g' : _.random(50, 255),
                'b' : _.random(50, 255)
            };
            this.color_a = 'rgb(' + this.color.r + ',' + this.color.g + ',' + this.color.b + ')';
            this.color_b = 'rgb(' + (this.color.r - 50) + ',' + (this.color.g - 50) + ',' + (this.color.b - 50) + ')';
            this.color_s = 'linear-gradient(' + this.color_b + ',' + this.color_a + ')';  
        };

        this.delete = function () {
            this.$el.remove();
        };

        this.update = function () {
            this.x = ((this.left) ? this.x += this.speed : this.x -= this.speed);
            this.y = ((this.up) ? this.y += this.speed : this.y -= this.speed);

            if(this.x <= 0 || this.x >= width_and_height.width) {
                this.left = !this.left;
            }
            if(this.y <= 0 || this.y >= width_and_height.height) {
                this.up = !this.up;
            }
            this.context.beginPath();
            this.context.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);

            this.gradient = this.context.createLinearGradient(this.x,this.y,this.x + this.size, this.y + this.size);
            this.gradient.addColorStop(1,this.color_a);
            this.gradient.addColorStop(0,this.color_b);

            this.context.fillStyle = this.gradient;
            this.context.fill();
        };

        this.init();
        return this;
    };

}(jQuery));

module.exports = MovingCircle;