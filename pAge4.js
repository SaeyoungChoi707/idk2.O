class JJK{
   constructor(){}
   bunny(){
    background(214, 130, 247);
    var miCasa = createButton("Home");
    var look = createButton("Search");
    var marioKart = createButton("Your Orders");
    var sun = createButton("Settings");
    miCasa.position(50,350);
    look.position(110,350);
    marioKart.position(170,350);
    sun.position(265,350);

    miCasa.mousePressed(function(){
        appState = 4;
        background(214, 130, 247);
    })
    look.mousePressed(function(){
        appState = 5;
        state = 5;
        background(214, 130, 247);
        kth();
    })
    marioKart.mousePressed(function(){
        appState = 6;
        background(214, 130, 247);
        banana();
    })
    sun.mousePressed(function(){
        appState = 7;
        background(214, 130, 247);
    })
    }
}