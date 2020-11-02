class umbrella{
    constructor(x, y){
        var options = {
            isStatic : true
        }
        this.body = Matter.Bodies.circle(x, y, 50, options);
        World.add(world, this.body);
        this.image = loadAnimation("images/WalkingFrame/walking_1.png","images/WalkingFrame/walking_2.png","images/WalkingFrame/walking_3.png","images/WalkingFrame/walking_4.png","images/WalkingFrame/walking_5.png","images/WalkingFrame/walking_6.png","images/WalkingFrame/walking_7.png","images/WalkingFrame/walking_8.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 150, 300);
    }
}