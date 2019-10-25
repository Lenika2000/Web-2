// Checkbox X
var checkBox_Container = $('input:checkbox');
let selectedX = new Array();
selectedX.push(-4);
checkBox_Container.bind("click", function (e) {
    selectedX = new Array();
    $('input:checkbox:checked').each(function () {
        selectedX.push($(this).val());
    });
    send_buttonCondition();
});

function checkX() {

    if (selectedX.length == 0) {
        $("#errorX").attr("data-title");
        $("#errorX").fadeTo(500, 1);
        return false;

    } else {
        $("#errorX").fadeTo(0, 0);
        return true;

    }

}

// Список R
var selectR = $('select');
var selectedR_value = 1;

selectR.each(function (index, elem) {
    elem.addEventListener("change", function (e) {
        $('#timezoneOffset_id').attr("value", new Date().getTimezoneOffset());
        ctx.clearRect(0, 0, 305, 305); //очистка для перерисовки
        selectedR_value = $('select').val();
        $('#r_id').attr("value", selectedR_value);
        drawGraph();
        document.getElementById('iFrame').src = "check?r=" + selectedR_value;
    });
});

//текстовое поле Y
var textY;

function checkY(textY) {
    if (!(textY == "")) {
        var pattern = /^\./.test(textY) || /\.$/.test(textY)
            || /^-\./.test(textY) || /-0$/.test(textY) || /^0{2,}/.test(textY) || /^0+./.test(textY);

        if (isNaN(textY) && !Number.isFinite(Number(textY)) || pattern) {
            wrongValue("Некорректное значение Y");
            return false;
        } else {
            if ((textY >= 10) || (textY <= -10)) {
                wrongValue('Выход за пределы диапазона');
                return false;
            } else {
                if (strCompare(textY, -3) > 0 && strCompare(textY, 3) < 0) {
                    $("#errorY").fadeTo(0, 0);
                    return true;
                } else {
                    wrongValue('Выход за пределы диапазона');
                    return false;
                }
            }
        }
    } else {
        wrongValue('Не введено значение Y');
        return false;
    }
}

function wrongValue(value) {
    $("#errorY").attr("data-title", value);
    $("#errorY").fadeTo(500, 1);
    // disableButton();
}

function strCompare(first, second) {
    first = new String(first);
    second = new String(second);
    if (first.includes(".")) {
        while (first.length > second.length) {
            if (second.indexOf('.') === -1) //если число не вещественное, то добавим .
                second = second + '.';
            second = second + '0'; //конкантенация строк , приведение второго числа к такому же числу знаков после запятой, как у 1
        }
    }

    if (first.indexOf('-') > -1 && second.indexOf('-') > -1)

        if (first.localeCompare(second) == 0)
            return 0;
        else if (first.localeCompare(second) == 1)
            return -1;
        else return 1;

    else
        return first.localeCompare(second);
}

$("#form_input").bind("input", function () {
    textY = $("#form_input").val().replace(",", '.');
    send_buttonCondition();
});

//деактивация кнопки отправки в зависимости от выбранных значений X и Y
function send_buttonCondition() {

    if (checkX() && checkY(textY)) {
        switchButton();
        $('#timezoneOffset_id').attr("value", new Date().getTimezoneOffset());
    } else {
        disableButton();
    }
}

function disableButton() {
    $('#send_form').attr('disabled', 'disabled');
    $("#send_form").css("background-color", "darkgrey");
    $("#send_form").removeClass("changeColor");
}

function switchButton() {
    $('#send_form').removeAttr('disabled');
    $("#send_form").css("background-color", "rgb(60, 16, 44)");
    $("#send_form").addClass("changeColor");
}

//отправка
// $("#send_form").click(function (event) {
//     event.preventDefault();
//
//     $.ajax({
//         url: "ControllerServlet",
//         data: {selectedX: requestX.slice(0, -1) , y: textY, r: selectedR_value, timezoneOffset: new Date().getTimezoneOffset()},
//         type: 'GET',
//         success: function (data) {
//
//             $("table tr").remove(":not(:first)");
//             $("table tbody").remove(":not(:first)");
//             createTable();
//             document.querySelector("tbody").insertAdjacentHTML("beforeend", data.trim());
//
//             // data = data.slice(0, -2).split("&");
//             // data.forEach(function(value1){
//             //     let answer = jQuery.parseJSON(value1);
//             //
//             //     // ctx.clearRect(0, 0, 305, 305); //очистка для перерисовки
//             //     // drawGraph();
//             //     drawPoint(answer.hit?"green":"red",answer.x,answer.y); //отмечаем точку
//             //     createTable();
//             //     addRow("table", answer);
//             // })
//             // alert(data);
//
//             // $("#errorX").fadeTo(0, 0);
//             // $("#errorY").fadeTo(0, 0);
//             // $("#errorR").fadeTo(0, 0);
//             // //создание таблицы
//             // var answer = jQuery.parseJSON(data);
//             // if ("X" in answer) {
//             //     ctx.clearRect(0, 0, 305, 305); //очистка для перерисовки
//             //     drawGraph();
//             //     // drawPoint(answer.color); //отмечаем точку
//             //     createTable();
//             //     addRow("table", answer);
//             // } else {
//             //     if (!answer.checkX) {
//             //         $("#errorX").fadeTo(500, 1);
//             //     }
//             //     if (!answer.checkY) {
//             //         checkY(textY);
//             //     }
//             //     if (!answer.checkR) {
//             //         $("#errorR").fadeTo(500, 1);
//             //     }
//
//         //     }
//         }
//
//     });
//     // $("firstX").addClass("selected");
//     // $("firstR").addClass("selected");
//     // drawGraph();
//
// });

$(document).ready(function () {
    $(window).keydown(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });
});

// function createTable() {
//     cleanButton.css('display', "inline");
//     $("table").css("display", "block");
// }

// // очистка таблицы
// var cleanButton = $('#cleanTable');
//
// cleanButton.bind("click", function (e) {
//     var tableRow = $("table tr");
//     tableRow.remove(":not(:first)"); //удаляет в табл. все кроме шапки
//     ctx.clearRect(0, 0, 305, 305); //очистка для перерисовки)
//     drawGraph();
// });


// отрисовка
var myCanvas = document.querySelector("#myCanvas");

$('#myCanvas').bind("click", function (elem) {
    let br = myCanvas.getBoundingClientRect();
    let left = br.left; // X координата верхнего левого края канваса
    let top = br.top; // Y координата верхнего левого края канваса
    var selectedPoint = {
        X: (elem.clientX - 150 - left) / 30,
        Y: (-(elem.clientY - top) + 150) / 30,
        R: selectedR_value
    }

    $.ajax({
        url: "check",
        data: {
            x: selectedPoint.X,
            y: selectedPoint.Y,
            r: selectedPoint.R,
            timezoneOffset: new Date().getTimezoneOffset()
        },
        type: 'GET',
        success: function (data) {
            document.getElementById('iFrame').src = document.getElementById('iFrame').src
        }

    });

})

var ctx = myCanvas.getContext("2d");

ctx.font = "10px Verdana";
ctx.lineWidth = 1.5; //толщина линий

//НАЧАЛЬНАЯ СИСТЕМА КООРДИНАТ
drawCoordinatePlane();
drawNumbers();
drawGraph();

function drawCoordinatePlane() {
    //ось OY
    $('#myCanvas').drawLine({
        strokeStyle: 'rgb(60, 16, 44)',
        strokeWidth: 2,
        startArrow: true,
        arrowRadius: 10,
        x1: 150, y1: 3,
        x2: 150, y2: 305,
    });
    //ось OX
    $('#myCanvas').drawLine({
        strokeStyle: 'rgb(60, 16, 44)',
        strokeWidth: 2,
        startArrow: true,
        arrowRadius: 10,
        x1: 302, y1: 150,
        x2: 0, y2: 150,
    });
}

function drawNumbers() {
    //деления на ОY
    ctx.beginPath();
    ctx.fillStyle = "rgb(60, 16, 44)";
    ctx.strokeStyle = "rgb(60, 16, 44)";
    ctx.moveTo(145, 5);
    ctx.lineTo(155, 5);
    ctx.fillText(5, 160, 0);
    ctx.moveTo(145, 30);
    ctx.lineTo(155, 30);
    ctx.fillText(4, 160, 33);
    ctx.moveTo(145, 60);
    ctx.lineTo(155, 60);
    ctx.fillText(3, 160, 63);
    ctx.moveTo(145, 90);
    ctx.lineTo(155, 90);
    ctx.fillText(2, 160, 93);
    ctx.moveTo(145, 120);
    ctx.lineTo(155, 120);
    ctx.fillText(1, 160, 123);
    ctx.fillText(0, 140, 163); // ноль в центре координат
    ctx.moveTo(145, 180);
    ctx.lineTo(155, 180);
    ctx.fillText(-1, 160, 183);
    ctx.moveTo(145, 210);
    ctx.lineTo(155, 210);
    ctx.fillText(-2, 160, 213);
    ctx.moveTo(145, 240);
    ctx.lineTo(155, 240);
    ctx.fillText(-3, 160, 243);
    ctx.moveTo(145, 270);
    ctx.lineTo(155, 270);
    ctx.fillText(-4, 160, 273);
    ctx.moveTo(145, 300);
    ctx.lineTo(155, 300);
    ctx.fillText(-5, 160, 303);

    //Деления на OX

    ctx.moveTo(2, 145);
    ctx.lineTo(2, 155);
    ctx.fillText(-5, 0, 163);
    ctx.moveTo(30, 145);
    ctx.lineTo(30, 155);
    ctx.fillText(-4, 25, 163);
    ctx.moveTo(60, 145);
    ctx.lineTo(60, 155);
    ctx.fillText(-3, 55, 163);
    ctx.moveTo(90, 145);
    ctx.lineTo(90, 155);
    ctx.fillText(-2, 85, 163);
    ctx.moveTo(120, 145);
    ctx.lineTo(120, 155);
    ctx.fillText(-1, 115, 163);

    ctx.moveTo(180, 145);
    ctx.lineTo(180, 155);
    ctx.fillText(1, 177, 163);
    ctx.moveTo(210, 145);
    ctx.lineTo(210, 155);
    ctx.fillText(2, 207, 163);
    ctx.moveTo(240, 145);
    ctx.lineTo(240, 155);
    ctx.fillText(3, 237, 163);
    ctx.moveTo(270, 145);
    ctx.lineTo(270, 155);
    ctx.fillText(4, 267, 163);
    ctx.moveTo(300, 145);
    ctx.lineTo(300, 155);
    ctx.fillText(5, 297, 163);

    ctx.stroke();
}


function drawFigures() {
    //квадрат
    $('#myCanvas').drawRect({
        fillStyle: "rgb(255, 162, 211)",
        strokeStyle: "rgb(60, 16, 44)",
        strokeWidth: 1,
        x: 150, y: 150 - selectedR_value * 30,
        fromCenter: false,
        width: selectedR_value * 30,
        height: selectedR_value * 30
    });

//треугольник
    $('#myCanvas').drawLine({
        fillStyle: "rgb(255, 162, 211)",
        strokeStyle: "rgb(60, 16, 44)",
        strokeWidth: 1,
        rounded: true,
        closed: true,
        x1: 150, y1: 150,
        x2: 150, y2: 150 + selectedR_value * 30,
        x3: 150 - selectedR_value * 15, y3: 150
    });

//полукруг
    $('#myCanvas').drawSlice({
        fillStyle: "rgb(255, 162, 211)",
        strokeStyle: "rgb(60, 16, 44)",
        strokeWidth: 1,
        x: 150, y: 150,
        radius: selectedR_value * 15,
        // начальный и конечный углы в градусах
        start: 90, end: 180
    });
    drawCoordinatePlane();
}


function drawPoint(color, x, y) {

    ctx.beginPath();
    ctx.arc(150 + x * 30, 150 - y * 30, 1, 0, 2 * Math.PI, true);
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
}

function drawGraph() {
    ctx.clearRect(0, 0, 305, 305);
    ctx.fillStyle = "rgb(255, 162, 211)";
    ctx.strokeStyle = "rgb(60, 16, 44)";

    drawCoordinatePlane(); //отрисовка координатных прямых
    ctx.fillStyle = "rgb(255, 162, 211)";
    drawFigures();
    drawNumbers();
    // drawPoint(); //отмечаем точку

}
