profile.php

<?php
include "inc/db.php";
include 'inc/func.php';
$err = array();
if (isset($_POST["signin"])) {
include "pms/signin.pms.php";
include "act/affsignin.act.php";
}
?>