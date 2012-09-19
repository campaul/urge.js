(function($, undefined) {
    
    var Urge = window.Urge = {};
    
    Urge.Entity = Backbone.Model.extend({

        defaults: {
            'position.x': 0,
            'position.y': 0,
            'position.z': 0,
            'width': 32,
            'height': 32
        }

    });

    Urge.Scene = Backbone.Collection.extend({

    });

    Urge.Game = Backbone.View.extend({

        initialize: function() {
            var frameTime = this.options.fps / 1000,
                that = this;

            setInterval(function() {
                that.render();
            }, frameTime);
        },

        render: function() {
            var context = this.el.getContext('2d');

            context.clearRect(0, 0, this.el.width, this.el.height);

            this.collection.each(function(entity) {
                var x = entity.get('position.x'),
                    y = entity.get('position.y'),
                    width = entity.get('width'),
                    height = entity.get('height');

                context.fillStyle = "rgba(0, 0, 200, 0.25)";
                context.strokeStyle = "rgba(0, 0, 255, 1)";
                context.lineWidth = 1;

                context.fillRect(x, y, width, height);
                context.strokeRect(x, y, width, height);
            });
        }

    });
    
})(Zepto);