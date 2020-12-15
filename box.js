class Box{
    constructor(x,y,width,height){
        var box_options ={
        restitution: 1.0
        
    }
   
    this.body = Bodies.rectangle(x,y,width,height, box_options);
    this.witdh = width
    this.height = height
    World.add(world,this.body);
}
 
display(){
    var pos=this.body.position
 rect(pos.x,pos.y,this.witdh,this.height)
}
}

