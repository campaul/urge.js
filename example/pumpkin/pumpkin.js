(function($, undefined) {
    
    var town = new Urge.Scene();
    
    town.add(new Urge.Entity({
        'id': 'player',
        'position.x': 50,
        'position.y': 50
    }));
    
    new Urge.Game({
        el: $('#pumpkin-canvas'),
        collection: town,
        fps: 60
    });
    
})(Zepto);