var topPanel = document.querySelector(".points-panel_top"); //верхняя панель указателей
var leftPanel = document.querySelector(".points-panel_left"); //левая панель указателей
var rightPanel = document.querySelector(".points-panel_right"); //правая панель указателей
var bottomPanel = document.querySelector(".points-panel_bottom"); //нижняя панель указателей
var cellsBox = document.querySelector(".cells-box"); //поле с клетками
var item;
var white = true; //белая или черная клетка
var letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

function drawPanel(node, type) {
    for(var i = 7; i >= 0; i--){
        item = document.createElement("div");
        item.className = "points-panel__cell"
        if(type == "letters")
            item.innerHTML = letters[i];
        else
            item.innerHTML = i+1;

        node.appendChild(item);
    }
}

function drawCells(node) {
    for(var i = 7; i >= 0; i--) {
        for(var j = 0; j < 8; j++) {
            item = document.createElement("div");
            if(white)
                item.className = "cells-box__cell cells-box__cell_white";
            else
                item.className = "cells-box__cell cells-box__cell_black";

            item.id = letters[j].toLowerCase() + (i+1);

            white = !white;
            node.appendChild(item);
        }
        white = !white;
    }
}

drawPanel(topPanel, "letters");
drawPanel(leftPanel, "numbers");
drawPanel(rightPanel, "numbers");
drawPanel(bottomPanel, "letters");
drawCells(cellsBox);