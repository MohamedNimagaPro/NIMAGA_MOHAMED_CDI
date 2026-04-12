<?php
function calculerMoyenne($n1, $n2, $n3) {
    return ($n1 + $n2 + $n3) / 3;
}

function afficherResultat($nom, $moyenne) {
    echo $moyenne >= 10 ? "Moyenne suffisante pour $nom." : "Moyenne insuffisante pour $nom.";
}

afficherResultat("Alice", calculerMoyenne(12, 15, 9.5));
?>