class Paper {
    constructor(){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
            width:200,
            height:110
        }
        this.body = Bodies.circle(100,150,20,options);
        this.image = loadImage("sprites/kachra.png");
        this.image.scale = 0.7;
        World.add(world,this.body)
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(RADIUS);
        fill("lightgreen")
        image(this.image,0,0,25,25);
        pop();
    }
}