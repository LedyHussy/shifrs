<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>atbash</title>
    <link rel="stylesheet" href="../style.css">
    <script src="../jquery-3.3.1.min.js"></script>
    <script src="../alfabet.js"></script>
</head>
<body>
<div class="input_group  mb-0">
    <label >Введите шифр</label>
    <textarea  class="input" rows="5" required name="text" ></textarea>
</div>
<button class="btn form" >Расшифровать</button>


<div class="input_group">
    <label >Результат</label>
    <div class="res">
        <p class="text"></p>
    </div>
</div>

<p class="text">Таблица для расшифровке</p>
<div class="input_group table table_cesar">
    <label>найди букву и сопоставь</label>
    <div class="start"></div>
    <div class="finish"></div>


</div>


<a href="../" class="text link">Вернуться к списку шифров</a>
<script src="index.js"></script>
</body>
</html>