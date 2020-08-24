class Paper {
    constructor(x, y) {
        var options = {
            isStatic : false,
            restitution: 0.3,
            friction: 0.5, 
            density: 1.2
        }
        
        this.body = Bodies.circle(x, y, 40, options);
        this.radius = 40;
        this.image = loadImage("PaperImage.png");
        World.add(world, this.body);
        }
        
        display() {
            var pos = this.body.position;
            ellipseMode(CENTER);
            fill("white");
            ellipse(pos.x, pos.y,this.radius, this.radius);
        }
    };