<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../img/icon.png" type="image/x-icon"> <!-- Icon -->
    <link rel="stylesheet" href="../style-menu.css"> <!-- Style -->
    <link rel="stylesheet" href="../style-txt.css"> <!-- Style -->
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
    header("Location: login.php");
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
  
  <!-- registrazione Content 
   id="text"
   id="text"
   id="inputEmail"
   id="text"
   -->
  <div class="container my-5">
    <h1 class="text-center">Registrazione</h1>

    <form class="row g-3" action="<?= htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="POST">
      <div class="col-md-6">
        <label for="inputName" class="form-label">Nome</label>
        <input type="text" class="form-control" name="name" value="<?=$name?>" placeholder="Name" required>
      </div>
      <div class="col-md-6">
        <label for="inputName" class="form-label">Cognome</label>
        <input type="text" class="form-control" name="surname" value="<?=$surname?>" required>
      </div>
      <div class="col-md-6">
        <label for="inputName" class="form-label">E-mail</label>
        <span class="error">* <?= $emailErr;?></span>
        <input type="email" class="form-control" name="mail" value="<?=$email?>" required>
      </div>
      <div class="col-md-6">
        <label for="inputEmail" class="form-label">Password</label>
        <span class="error">* <?= $passwordErr;?></span>
        <input type="password" class="form-control" name="pwd" required>
      </div>
      <input class="btn btn-light btn-lg" type="submit" name="submit" value="Registrati">
    </form>
  </div>

  <!-- Footer -->
  <footer class="bg-light text-center p-3 mt-5">
    <p><b>ITT BUONARROTI TRENTO</b></p>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
