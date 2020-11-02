class drop{
    constructor(x, y){
        var option = {
            friction:0.001,
            restitution:0.1
        }
        this.r=5
        this.body = Matter.Bodies.circle(x, y, 5, option);
        World.add(world, this.body);
    }

    update(){
        if(this.body.position.y > 600){
            Matter.Body.setPosition(this.body, {x:random(0, 300), y:random(0, 50)});
        }
    }
    
    display(){
        push();
        translate(this.body.position.x, this.body.position.y)
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, 5, 5);
        pop()
    }
}