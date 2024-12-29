<!DOCTYPE html>
<html lang="it">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../img/icon.png" type="image/x-icon"> <!-- Icon -->
    <link rel="stylesheet" href="../style-menu.css"> <!-- Style -->
    <link rel="stylesheet" href="../style-txt.css"> <!-- Style -->
    <link rel="stylesheet" href="style-form.css"> <!-- Style -->
    <title>Login</title>
</head>

<?php
session_start(); // Avvia la sessione
$loginErr = "";

// Controlla se i dati del form sono inviati
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = test_input($_POST['mail']);
  $password = test_input($_POST['pwd']);

  // Verifica le credenziali dalla sessione
  if (isset($_SESSION['user']) && $_SESSION['user']['email'] === $email && $_SESSION['user']['password'] === $password) {
    header("Location: homepage.php"); // Reindirizza alla homepage
    exit();
  } else {
    $loginErr = "Email o password non valide.";
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
    <h2>Login</h2>
    <br>
    <form action="<?= htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
      <div class="form-group">
        <label for="inputEmail">E-mail</label>
        <input type="email" id="inputEmail" name="mail" placeholder="Inserisci la tua e-mail" required>
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input type="password" id="inputPassword" name="pwd" placeholder="Inserisci la tua password" required>
      </div>
      <span class="error"><?=$loginErr; ?></span>
      <button type="submit" class="btn-submit">Login</button>
    </form>
  </main>

</body>
</html>