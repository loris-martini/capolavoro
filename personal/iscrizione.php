<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../img/icon.png" type="image/x-icon"> <!-- Icon -->
    <link rel="stylesheet" href="../style-menu.css"> <!-- Style -->
    <link rel="stylesheet" href="../style-txt.css"> <!-- Style -->
    <link rel="stylesheet" href="style-form.css"> <!-- Style -->
    <title>Registrazione</title>
</head>

<style>
  .error {color: #FF0000;}
</style>

<?php
session_start();
$name = $surname = $email = $pwd = $emailErr = $passwordErr = "";
$isFormValid = true;

// Controlla se i dati del form sono inviati
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST['name']);
  $surname = test_input($_POST['surname']);
  $email = test_input($_POST['mail']);
  $pwd = test_input($_POST['pwd']);


  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $emailErr = "Invalid email format";
    $isFormValid = false;
  }

  if (!preg_match('/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/', $pwd)){
    $passwordErr = "Password is invalid!";
    $isFormValid = false;
  }

  if ($isFormValid) {
    $_SESSION['user'] = [
      'name' => $_POST['name'],
      'surname' => $_POST['surname'],
      'email' => $_POST['mail'],
      'password' => $_POST['pwd']
    ];
    header("Location: accedi.php");
    exit();
  }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>


<body>
  <div id="menu-container"></div>
  <script src="../script-menu.js"></script>

  <main>
    <h2>Registrazione</h2>
    <br>
    <form action="<?= htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="POST">
      <div class="form-group">
        <label for="inputName">Nome</label>
        <input type="text" class="form-control" name="name" value="<?=$name?>" placeholder="Inserisci il tuo nome" required>
      </div>
      <div class="form-group">
        <label for="inputSurname">Cognome</label>
        <input type="text" class="form-control" name="surname" value="<?=$surname?>" placeholder="Inserisci il tuo cognome" required>
      </div>
      <div class="form-group">
        <label for="inputEmail">E-mail</label>
        <span class="error"><?= $emailErr;?></span>
        <input type="email" class="form-control" name="mail" value="<?=$email?>" placeholder="Inserisci la tua e-mail" required>
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <span class="error"><?= $passwordErr;?></span>
        <input type="password" class="form-control" name="pwd" placeholder="Inserisci la tua password" required>
      </div>
      <button class="btn btn-submit" type="submit" name="submit">Registrati</button>
    </form>
  </main>

</body>
</html>
