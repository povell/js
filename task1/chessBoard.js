var topPanel = document.querySelector(".points-panel_top"); //верхняя панель указателей
var leftPanel = document.querySelector(".points-panel_left"); //левая панель указателей
var rightPanel = document.querySelector(".points-panel_right"); //правая панель указателей
var bottomPanel = document.querySelector(".points-panel_bottom"); //нижняя панель указателей
var cellsBox = document.querySelector(".cells-box"); //контейнер с клетками
console.log(cellsBox);
var item;
var white = true; //белая или черная клетка
var letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
var pointsPanelTypes = ["letter", "number"];

function drawPanel(node, type) {
    for(var i=0; i<8; i++){
        item = document.createElement("div");
        item.className = "points-panel__cell"
        if(type == pointsPanelTypes[0])
            item.innerHTML = letters[i];
        else
            item.innerHTML = i+1;

        node.appendChild(item);
    }
}

function drawCells(node){
    for(var i = 0; i<8; i++){
        for(var j=0; j<8; j++){
            item = document.createElement("div");
            if(white)
                item.className = "cells-box__cell cells-box__cell_white";
            else
                item.className = "cells-box__cell cells-box__cell_black";

            white = !white;
            node.appendChild(item);
        }
        white = !white;
    }
}

drawCells(cellsBox);
drawPanel(topPanel, pointsPanelTypes[0]);
drawPanel(leftPanel, pointsPanelTypes[1]);
drawPanel(rightPanel, pointsPanelTypes[1]);
drawPanel(bottomPanel, pointsPanelTypes[0]);
