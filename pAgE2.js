/*class Haha{
    constructor(){}
    haha(){
    var Username = createInput("Username/Email")
    textSize(15);
    fill("black");
    Username.position(150,150);
    var Pass = createInput("Password");
    textSize(15);
    fill("black");
    Pass.position(150,190);
    //background(120,0,0);
    var smth = createButton("Log In") 
    smth.position(150,230);
    smth.mousePressed(function(){
        appState = 3;
    })
}
}*/

class Haha{
    constructor(){}
    haha(){
        background(214, 130, 247);
    var Username = createInput("Username/Email")
    textSize(15);
    fill("black");
   // Username.position(150,150);
    var Pass = createInput("Password");
    textSize(15);
    fill("black");
    //Pass.position(150,190);
    //background(120,0,0);
    var smth = createButton("Log In") 
    //smth.position(150,230);

        if(state === 1){
            Username.position(150,150);
            Pass.position(150,190);
            smth.position(150,230);
        }


    smth.mousePressed(function(){
        appState = 3;
        state = 3;
        background(214, 130, 247);
        Username.hide();
        Pass.hide();
        smth.hide();
        Jungkook.bunny();
    })
}

}