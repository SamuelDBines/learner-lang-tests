<?php 

function create_pdo(string $dsn, string $user, string $pass): PDO
{
  $options = [
      PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
      PDO::ATTR_EMULATE_PREPARES   => false,
  ];

  return new PDO($dsn, $user, $pass, $options);
}


function get_db(
  string $host,
  int $port,
  string $db,
  string $user,
  string $pass,
  bool $autoCreate = false
): PDO 
{
  $dsn = "pgsql:host=$host;port=$port;dbname=$db;";

  try {
    return create_pdo($dsn, $user, $pass);
  } catch (PDOException $e) {
    if (!$autoCreate || $e->getCode() !== '3D000') {
      throw $e;
    }
  }
  $adminDsn = "pgsql:host=$host;port=$port;dbname=postgres;";
  $admin = create_pdo($adminDsn, $user, $pass);
  if (!preg_match('/^[A-Za-z0-9_]+$/', $db)) {
    throw new RuntimeException("Invalid database name: $db");
  }
  echo "something error";
  $admin->exec("CREATE DATABASE \"$db\"");
  return create_pdo($dsn, $user, $pass);
}

?>