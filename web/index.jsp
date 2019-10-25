<%--
  Created by IntelliJ IDEA.
  User: Елена
  Date: 13.10.2019
  Time: 17:57
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script src="lib/jcanvas.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" href="pictures/vt.jpg" type="image/jpg">

    <title>Лабораторная 2</title>
    <style>
        .selected {
            background: rgb(255, 162, 211);
        }
    </style>
    <jsp:useBean id="pointsBean" class="app.PointsTableBean" scope="session"/>
</head>

<body>

<header>
    <h3>Маньшина Елена Группа Р3214 <br>Вариант 215000</h3>
</header>

<div class="container">
    <p class="title">Определение попадания точки на координатной плоскости в заданную область ʕ ᵔᴥᵔ ʔ </p>
    <div class="picture">
        <canvas id="myCanvas" width="305" height="305"></canvas>
    </div>

    <div class="content">
        <form method="GET" action="check" target="result">

            <p>Изменение Х</p>
            <div id="checkBox_Container">
                <div class="checkBoxDiv">
                    <label class="checkbox">
                        <input type="checkbox" name="x" value="-4" checked/>
                        <div class="checkbox__text">-4</div>
                    </label>
                    <div class="separatingDiv"></div>
                    <label class="checkbox">
                        <input type="checkbox" name="x" value="-3"/>
                        <div class="checkbox__text">-3</div>
                    </label>
                    <div class="separatingDiv"></div>
                    <label class="checkbox">
                        <input type="checkbox" name="x" value="-2"/>
                        <div class="checkbox__text">-2</div>
                    </label>
                    <div id="errorX" class="errorImage" data-title='Не выбрано ни одно значение Х'><img
                            src="pictures/error.png">
                    </div>
                </div>
                <div class="checkBoxDiv">
                    <label class="checkbox">
                        <input type="checkbox" name="x" value="-1"/>
                        <div class="checkbox__text">-1</div>
                    </label>
                    <div class="separatingDiv" style="width: 23px;"></div>
                    <label class="checkbox">
                        <input type="checkbox" name="x" value="0"/>
                        <div class="checkbox__text"> 0</div>
                    </label>
                    <div class="separatingDiv" style="width: 26px;"></div>
                    <label class="checkbox">
                        <input type="checkbox" name="x" value="1"/>
                        <div class="checkbox__text"> 1</div>
                    </label>
                </div>
                <div class="checkBoxDiv">
                    <label class="checkbox">
                        <input type="checkbox" name="x" value="2"/>
                        <div class="checkbox__text"> 2</div>
                    </label>
                    <div class="separatingDiv" style="width: 25px;"></div>
                    <label class="checkbox">
                        <input type="checkbox" name="x" value="3"/>
                        <div class="checkbox__text"> 3</div>
                    </label>
                    <div class="separatingDiv" style="width: 26px;"></div>
                    <label class="checkbox">
                        <input type="checkbox" name="x" value="4"/>
                        <div class="checkbox__text"> 4</div>
                    </label>
                </div>

            </div>

            <p>Изменение Y</p>

            <input type="text" id="form_input" placeholder="Введите значение в интервале от -3 до 3" name="y"
                   autocomplete="off">
            <div id="errorY" class="errorImage" data-title='Выход за пределы диапазона'><img src="pictures/error.png">
            </div>

            <p id="textR">Изменение R</p>
            <div class="styled-select">
                <select>
                    <option selected>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <input type="hidden" autocomplete="off" name="r" id="r_id" value="1">

            </div>
                <input type="hidden" autocomplete="off" name="timezoneOffset"  id="timezoneOffset_id" value="">
            <div id="buttons">
                <input id="send_form" type="submit" name="send" value="Отправить" disabled="disabled"/>

            </div>

        </form>
    </div>
</div>

<div id="answer">

    <iframe id="iFrame" name="result" src="check?r=1"></iframe>

</div>


<script src="js/javascript.js"></script>
</body>

</html>
