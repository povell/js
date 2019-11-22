function numberToObject(number) { // number от 0 до 999
    if(number < 0 || number > 999 ){
        console.log("число не входит в диапазон от 0 до 999");
        return {};
    }

    var strNumber = number + "";
    
    var properties = strNumber.split("").reverse();

    var obj = {};

    obj.ed = parseInt(properties[0]);

    if(properties[1]){ //если есть десятки
        obj.des = parseInt(properties[1]);
    }
    else {
        obj.des = 0;
    }

    if(properties[2]) //если есть сотни
        obj.sot = parseInt(properties[2]);
    else {
        obj.sot = 0;
    }       

    return obj;
}

console.log(numberToObject(345));

