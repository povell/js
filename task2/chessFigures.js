//массив с объектами черных фигур
var whiteFigures = [
    {id: "wp1", view:"П", type: "pawn", position: "a2", color: "white"}
    ,{id: "wp2", view:"П", type: "pawn", position: "b2", color: "white"}
    ,{id: "wp3", view:"П", type: "pawn", position: "c2", color: "white"}
    ,{id: "wp4", view:"П", type: "pawn", position: "d2", color: "white"}
    ,{id: "wp5", view:"П", type: "pawn", position: "e2", color: "white"}
    ,{id: "wp6", view:"П", type: "pawn", position: "f2", color: "white"}
    ,{id: "wp7", view:"П", type: "pawn", position: "g2", color: "white"}
    ,{id: "wp8", view:"П", type: "pawn", position: "h2", color: "white"}
    ,{id: "wl1", view:"Л", type: "castle", position: "a1", color: "white"}
    ,{id: "wk1", view:"К", type: "knight", position: "b1", color: "white"}
    ,{id: "ws1", view:"С", type: "bishop", position: "c1", color: "white"}
    ,{id: "wkr1", view:"Кр", type: "king", position: "e1", color: "white"}
    ,{id: "wf1", view:"Ф", type: "queen", position: "d1", color: "white"}
    ,{id: "ws2", view:"С", type: "bishop", position: "f1", color: "white"}
    ,{id: "wk2", view:"К", type: "knight", position: "g1", color: "white"}
    ,{id: "wls", view:"Л", type: "castle", position: "h1", color: "white"}
];
//массив с объектами черных фигур
var blackFigures = [
    {id: "bp1", view:"П", type: "pawn", position: "a7", color: "black"}
    ,{id: "bp2", view:"П", type: "pawn", position: "b7", color: "black"}
    ,{id: "bp3", view:"П", type: "pawn", position: "c7", color: "black"}
    ,{id: "bp4", view:"П", type: "pawn", position: "d7", color: "black"}
    ,{id: "bp5", view:"П", type: "pawn", position: "e7", color: "black"}
    ,{id: "bp6", view:"П", type: "pawn", position: "f7", color: "black"}
    ,{id: "bp7", view:"П", type: "pawn", position: "g7", color: "black"}
    ,{id: "bp8", view:"П", type: "pawn", position: "h7", color: "black"}
    ,{id: "bl1", view:"Л", type: "castle", position: "a8", color: "black"}
    ,{id: "bk1", view:"К", type: "knight", position: "b8", color: "black"}
    ,{id: "bs1", view:"С", type: "bishop", position: "c8", color: "black"}
    ,{id: "bkr1", view:"Кр", type: "king", position: "e8", color: "black"}
    ,{id: "bf1", view:"Ф", type: "queen", position: "d8", color: "black"}
    ,{id: "bs2", view:"С", type: "bishop", position: "f8", color: "black"}
    ,{id: "bk2", view:"К", type: "knight", position: "g8", color: "black"}
    ,{id: "bl2", view:"Л", type: "castle", position: "h8", color: "black"}
];

//расставить фигуры
function arrangeFigures(figuresArray) {
    var figure, parent;

    for(var i=0; i<figuresArray.length; i++) {
        figure = document.createElement("div");
        figure.innerHTML = figuresArray[i].view;
        if(figuresArray[i].color == "white")
            figure.className = "figure figure_white"
        else
            figure.className = "figure figure_black"
        parent = document.getElementById(figuresArray[i].position);
        parent.appendChild(figure);
    }
}

arrangeFigures(whiteFigures);
arrangeFigures(blackFigures);