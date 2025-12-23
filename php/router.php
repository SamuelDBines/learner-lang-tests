<?php

$uri = $_SERVER['REQUEST_URI'] ?? '/';
$path = parse_url($uri, PHP_URL_PATH);
$file = __DIR__ . $path;

$fullPath = __DIR__ . $path;
if ($path !== '/' && file_exists($fullPath) && !is_dir($fullPath)) {
    return false; // tell php -S "you handle this as a normal file"
}

$route = trim($path, '/');

if ($route === '') {
  require __DIR__ . '/index.php';
  exit;
}

$target = __DIR__ . '/' . $route . '.php';
if (file_exists($target)) {
    require $target;
    exit;
}

http_response_code(404);
echo "404 Not Found";


?>