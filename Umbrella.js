class umbrella{
    constructor(x, y){
        var options = {
            isStatic : true
        }
        this.body = Matter.Bodies.circle(x, y, 50, options);
        World.add(world, this.body);
        this.image = loadImage(images/WalkingFrame/walking_1.png);
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 150, 300);
    }
}
