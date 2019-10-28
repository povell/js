var start = false;
var questionsCount = 0; //счетчик вопроса
var answer = ""; // ответ игрока
var summs = [0, 500, 1000, 2000, 3000, 5000, 10000, 15000, 25000, 50000, 100000, 200000, 500000, 1000000]; //суммы вопросов
var nesgorSumms = [5000, 100000, 1000000]; //несгораемые суммы
var summ = 0; //сумма выигрыша
var takeMoney = false; //беру деньги

var invite = parseInt(prompt("Хотите съиграть в игру \"Кто хочет стать миллионером\"? (числа >=0 да. числа <0 нет)"));
if(isNaN(invite) || !isFinite(invite)){
    alert('Вы ввели недопустимый символ');
}
else if(invite < 0){
    console.log("-1");
    start = false; 
    alert("Как хотите")
}
else{
    start = true;
}

while(start){
    if(questionsCount == 13)
    {
        gameOver();
        alert("Поздравляю! Вы стали миллионером");
        break;
    }

    var answer = askAQuestion(questionsCount);

    checkTheAnswer(answer);
}
//задаем вопрос
function askAQuestion(question){
    var q = gameQuestions[question];
    return parseInt(prompt("Вопрос на " + summs[questionsCount + 1] + " рублей : " + "\n"
            + q.questionText + "\n"
            + "1: " + q.answers[0] + "\n"
            + "2: " + q.answers[1] + "\n"
            + "3: " + q.answers[2] + "\n"
            + "4: " + q.answers[3] + "\n"
            + "------------------------" + "\n"
            + '-1 - Забрать деньги'));
}
//ответ на вопрос или что-то другое
function isAnswer(answer){
    if(isNaN(answer) || !isFinite(answer)){
        alert('Вы ввели недопустимый символ');
        return false;
    }

    if(answer == -1){
        takeMoney = true;
        gameOver();
        return false;
    }

    else if (answer < 1 || answer > 4) {
        alert('Ваше число выходит из допустимого диапазона');
        return false;
    }
	return true;
}
//проверка ответа
function checkTheAnswer(answer){
    if(isAnswer(answer)){

        if(answer != gameQuestions[questionsCount].rightAnswer){
            alert("Это неправильный ответ");
            gameOver();
            return;
        }
        questionsCount++;
        
        alert("Это правильный ответ " + " в банке " + summs[questionsCount] + " рублей");

        //если несгораемая сумма, то фиксируем в выигрыше
        var ind = nesgorSumms.indexOf(summs[questionsCount]);
        if(ind != -1){
            summ = summs[questionsCount];
            alert("Вы достигли несгораемой суммы " + summ + " рублей");
        }
    }
}
//завершение игры
function gameOver(){
    if(takeMoney)
        summ = summs[questionsCount];
    alert("Ваш выигрыш: " + summ + " рублей");
    start = false;
}