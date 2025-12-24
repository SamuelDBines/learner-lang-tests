<?php 
  include "shared.php";

  pSuccess("hello\n");
  $starting_pos = 50;
  $N = 50;
  $p_one_pass = 0;
  $p_one_val = $starting_pos;
  $p_two_pass = 0;
  $p_two_val = $starting_pos;
  $FILE = fopen("../advent-of-code/01-12-2025.txt", "r") or die("Unable to open file!");
  while(!feof($FILE)) {
    $line = fgets($FILE);
    $dir = $line[0];
    $amount = substr($line, 1);
    $step = 0;
    if ( $dir == "L") {
      $p_one_val = ($p_one_val - ($amount % $N) + $N) % $N;
      $step= -1;
    } elseif ( $dir == "R" ) {
      $p_one_val = ($p_one_val + $amount) % $N;
      $step = 1;
    } else {
      pErr("Incorrect direction");
    }
    if($p_one_val == 0 ) {
      $p_one_pass++;
    }
    for($i=0; $i < $amount; $i++) {
    
      $p_two_val = ($p_two_val + $step + $N) % $N;
      if ($p_two_val == 0) {
        $p_two_pass++;
      }
    }
    echo "line: " . $amount . "\n";
  }
  pSuccess("POne is $p_one_pass");
  pSuccess("PTwo is $p_two_pass");

  fclose($FILE);

?>