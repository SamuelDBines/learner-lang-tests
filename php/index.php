<?php include 'about.php' ?>
<?php 

require_once __DIR__ . '/db.php';


try {
    $db = get_db(
      host:'localhost',
      port: 5432,
      db: 'phptest',
      user:'postgres',
      pass:'postgres',
      autoCreate: true
    );

    $stmt = $db->query('SELECT now()');
    $users = $stmt->fetchAll();

    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['users' => $users], JSON_PRETTY_PRINT);

} catch (PDOException $e) {
    http_response_code(500);
    header('Content-Type: text/plain; charset=utf-8');
    echo "Database error: " . $e->getMessage();
}

echo "Hello world";

?>
<a href="/about">About </a>

<div style="color: red">
And this is html
</div>
