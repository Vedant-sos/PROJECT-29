class Block{
    constructor(x,y){
      var options ={
          isStatic:false
      }
      this.body=Bodies.rectangle(x,y,30,45,options);
      this.height=45;
      this.width=30;
      World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill(rgb(random(10,235),random(20,245),random(30,255)));
        rectMode(CENTER);
        rect(pos.x,pos.y,30,45);
    }
}