var event, ok;
var steps = [];
var step = {};
//Выводим первый вопрос
questionAndAction(works.a00, works.a0, [works.a1, works.a2]);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        questionAndAction(works.b00, works.b0, [works.b1, works.b2]);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                questionAndAction(works.d00, works.d0, [works.d1, works.d2]);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                questionAndAction(works.d00, works.d0, [works.d1, works.d2]);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        questionAndAction(works.c00, works.c0, [works.c1, works.c2]);
        switch (event) {
            case 1: // Второе действие
                questionAndAction(works.d00, works.d0, [works.d1, works.d2]);

                break;
            case 2: // Второе действие
                questionAndAction(works.d00, works.d0, [works.d1, works.d2]);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
var stepNumber = prompt('Вывести ход под номером');
if(steps.length == 0)
    alert("Ходов не было"); 
else if(isNaN(stepNumber) || !isFinite(stepNumber) || (stepNumber > steps.length) || stepNumber <= 0){
    alert('Вы ввели недопустимый номер хода');
}
else {
    alert("Вопрос: " + steps[stepNumber - 1].question + "Ответ: " + steps[stepNumber - 1].answer);
}

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}
//процедура
function questionAndAction(questionText, answerCount, answers) {
    do {
        ok = false;
        step = {};
        event = +prompt(questionText + answers[0] + answers[1] + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(answerCount, event);
            step.question = questionText;
            step.answer = answers[event-1];
            steps.push(step);
        }
    } while (!ok);
}

