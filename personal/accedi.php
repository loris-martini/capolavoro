<!DOCTYPE html>
<html lang="it">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../img/icon.png" type="image/x-icon"> <!-- Icon -->
    <link rel="stylesheet" href="../style-menu.css"> <!-- Style -->
    <link rel="stylesheet" href="../style-txt.css"> <!-- Style -->
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
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Sito Votazioni</a>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="registrazione.php">Registrazione</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="login.php">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container my-5">
    <h1 class="text-center">Login</h1>

    <form action="<?= htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
      <div class="mb-3">
        <label for="inputEmail" class="form-label">E-mail</label>
        <input type="email" class="form-control" name="mail" required>
      </div>
      <div class="mb-3">
        <label for="inputPassword" class="form-label">Password</label>
        <input type="password" class="form-control" name="pwd" required>
      </div>
      <span class="text-danger"><?= $loginErr; ?></span>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>

  </div>

    <!-- Footer -->
  <footer class="bg-light text-center p-3 mt-5">
    <p><b>ITT BUONARROTI TRENTO</b></p>
  </footer>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>