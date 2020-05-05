const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
    var canvas = createCanvas(600, 600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width / 2, height + 10, width, 20);

    leftMain = new Box(120, 370, width / 3, 200);
    rightMain = new Box(width - 120, 370, width / 3, 200);

    centerLine = new Box(width / 2, 200, width - 40, 20);

    leftSupport = new Box(60, 180, 80, 80);
    rightSupport = new Box(width - 60, 180, 80, 80);
    leftSupportCenter = new Box(210, 180, 120, 80);
    rightSupportCenter = new Box(width - 210, 180, 120, 80);

    centerLine2 = new Box(width / 2, 160, width - 40, 20);

    spike = new Box(300, 130, 40, 60);
    spike1 = new Box(300 + 80, 130, 40, 60);
    spike2 = new Box(300 + 80 + 80, 130, 40, 60);
    spike3 = new Box(300 + 80 + 80 + 80, 140, 40, 60);
    spike01 = new Box(300 - 80, 130, 40, 60);
    spike02 = new Box(300 - 80 - 80, 130, 40, 60);
    spike03 = new Box(300 - 80 - 80 - 80, 130, 40, 60);

}

function draw() {
    background("rgb(063,025,098)");
    Engine.update(engine);
    leftMain.display();
    rightMain.display();
    centerLine.display();
    leftSupport.display();
    rightSupport.display();
    leftSupportCenter.display();
    rightSupportCenter.display();
    centerLine2.display();
    ground.display();
    spike.display();
    spike1.display();
    spike2.display();
    spike3.display();
    spike01.display();
    spike02.display();
    spike03.display();
}