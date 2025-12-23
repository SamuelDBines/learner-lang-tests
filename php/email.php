<html>

<body>

<?php 
  $method = $_SERVER['REQUEST_METHOD'];
?>

<?php
  if($method === 'GET') {
?>
<form action="email" method="post">
  Name: <input type="text" name="name"><br>
  E-mail: <input type="text" name="email"><br>
  <input type="submit">
</form>

<?php
  } 
  if($method === 'POST') {
?>
Welcome  <?php echo $_POST["name"]; ?><br> 
Your email address is: <?php echo $_POST["email"]; ?>
<?php
  }
?>

</body>
</html>