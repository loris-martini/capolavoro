<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../img/icon.png" type="image/x-icon"> <!-- Icon -->
    <link rel="stylesheet" href="../style-menu.css"> <!-- Style -->
    <link rel="stylesheet" href="../style-txt.css"> <!-- Style -->
    <link rel="stylesheet" href="style-form.css"> <!-- Style -->
    <link rel="stylesheet" href="style-homepage.css"> <!-- Style -->
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
            <form class="delete-form" style="background-color: transparent;" action="<?= $_SERVER["PHP_SELF"]?>" method="POST">
                <input type="hidden" name="delete" value="delete">
                <button style="color: #ff0000; background-color: #fff" type="submit" class="btn-submit">ELIMINA DATI</button>
            </form>
            
        <center><h3>Ciao <b><?=$_SESSION['user']['name']?> <?=$_SESSION['user']['surname']?></b></h3></center>
        <br>

        <h2>Il mio account Binance</h2>
        <br>
    </main>    
    <center>
        <img src="../img/binanceSpot.png">
        <br>
    </center>
    <main>
        <h2>Come comprare Doge</h2>
    </main>
    <center>
        <img src="../img/binanceTrading.png">
        <br>
    </center>
    <main>
        <h2>Analisi su Doge</h2>
    </main>
    <center>
        <img src="../img/tradingDoge.png">
        <br>
    </center>
    <main>
        <h3>Cosa sono le "balene"</h3>
        <p>Nel contesto del mercato delle criptovalute, le balene (o "whales" in inglese) sono individui o entità che possiedono una quantità significativa di una determinata criptovaluta. Grazie alla loro grande disponibilità di monete, hanno il potenziale di influenzare significativamente il mercato.</p>
    </main>      


          
    <?php }; ?>
</body>
</html>