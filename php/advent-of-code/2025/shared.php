<?php 

  $BLUE = "\x1b[34m";
  $RED = "\x1b[31m";
  $RESET = "\x1b[0m";

  function plog ($msg, $type = "INFO") {
    $time = date("Y-m-d H:i:s");
    $COLOR = $type == "SUCCESS" ? "\x1b[34m" : "\x1b[31m";
    $RES = "$COLOR $time [$type]: $msg \x1b[0m\n";
    echo $RES;
    if ($type === "ERROR") {
      die($RES);
    }
  }

  function pSuccess($msg) {
    plog($msg, "SUCCESS");
  }

  function pErr($msg) {
    plog($msg, "ERROR");
  }

  
?>