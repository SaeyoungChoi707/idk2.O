/*class Meow{
    constructor(){}
    cat(){
    var nAmE = createInput("Username");
    textSize(15);
    fill("black");
    nAmE.position(150,150);

    var eMaIl = createInput("Email");
    textSize(15);
    fill("black");
    eMaIl.position(150,190);

    var pAsS = createInput("Password");
    textSize(15);
    fill("black");
    pAsS.position(150,230);

    var passW = createInput("Confirm Password");
    textSize(15);
    fill("black");
    passW.position(150,270);

    //background(140,240,40);

    var oof = createButton("Sign Up");
    oof.position(150,310);

    oof.mousePressed(function(){
        appState = 3;        
    })
    }
}*/

class Meow{
    constructor(){}
    cat(){
        background(214, 130, 247);
    var nAmE = createInput("Username");
    textSize(15);
    fill("black");
   // nAmE.position(150,150);

    var eMaIl = createInput("Email");
    textSize(15);
    fill("black");
    //eMaIl.position(150,190);

    var pAsS = createInput("Password");
    textSize(15);
    fill("black");
    //pAsS.position(150,230);

    var passW = createInput("Confirm Password");
    textSize(15);
    fill("black");
    //passW.position(150,270);

    //background(140,240,40);

    var oof = createButton("Sign Up");
    //oof.position(150,310);


    if(state === 2){
        nAmE.position(150,150);
        eMaIl.position(150,190);
        pAsS.position(150,230);
        passW.position(150,270);
        oof.position(150,310);


    }

    oof.mousePressed(function(){
        appState = 3; 
        state =3;
        background(214, 130, 247);
        nAmE.hide();
        eMaIl.hide();
        pAsS.hide();
        passW.hide();
        oof.hide();   
        Jungkook.bunny();
    })
    }
}