<?php
    $buttons = [
        'AC' => 'cls', '%' => 'percent',
        '&plusmn;'=> 'neg', '&div;'=> 'div',
        '7', '8', '9', '&times;' => 'mul',
        '4', '5', '6', '&minus;' => 'sub',
        '1', '2', '3', '&plus;' => 'add',
        'DEL' => 'del', '0' , '.' => 'dot',  '&equals;' => 'calc',
    ];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Calculator</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="css/calculator.min.css">
    <script src="js/js.cookie.min.js"></script>
</head>
<body>
    <div class="calculator">
        <div class="flex between middle">
            <div>Calculator</div>
            <div class="switch">
                <input type="checkbox" id="switch" data-toggle="theme">
                <label for="switch">
                    <i class="bi-moon-fill on"></i>
                    <i class="bi-sun off"></i>
                </label>
            </div>
        </div>
        <div class="display">
            <sub></sub>
            <main>0</main>
        </div>
        <div class="buttons">
            <?php foreach ($buttons as $key => $value): ?>
                <button onclick="<?= is_numeric($key) ? 'num('.$value.')' : $value.'()' ?>">
                    <?= is_numeric($key) ? $value : $key ?>
                </button>
            <?php endforeach ?>
        </div>
    </div>
    <script src="./js/calculator.js"></script>
</body>
</html>
