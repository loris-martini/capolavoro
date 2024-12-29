<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../img/icon.png" type="image/x-icon"> <!-- Icon -->
    <link rel="stylesheet" href="../style-menu.css"> <!-- Style -->
    <link rel="stylesheet" href="../style-txt.css"> <!-- Style -->
    <link rel="stylesheet" href="style-form.css"> <!-- Style -->
    <title>Personal Area</title>
</head>
<?php
    session_start();

    if ($_SERVER["REQUEST_METHOD"] == "POST" && $_POST['delete'] == "delete") {
        session_destroy();
        header("Location: ../index.html"); // Reindirizza alla homepage
        exit();
    }
?>
<body>
    <div id="menu-container"></div>
    <script src="../script-menu.js"></script>
    <?php if(isset($_SESSION['user'])){ ?>
        <main>
            
        <h2>Ciao <b><?=$_SESSION['user']['name']?> <?=$_SESSION['user']['surname']?></b></h2>
        <br>

        <form style="background-color: transparent;" action="<?= $_SERVER["PHP_SELF"]?>" method="POST">
            <input type="hidden" name="delete" value="delete">
            <button style="color: #ff0000; background-color: #fff" type="submit" class="btn-submit">ELIMINA DATI</button>
        </form>  
        </main>  
    <?php }; ?>
</body>
</html>