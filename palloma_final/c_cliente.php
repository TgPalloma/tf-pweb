<?php

$razaoSocial = $_POST["razao_social"];
$nomeFantasia = $_POST["nome_fantasia"];
$cnpj = $_POST["cnpj"];
$formatoJuridico = $_POST["tipo_empresa"];

$endereco = $_POST["endereco"];
$bairro = $_POST["bairro"];
$cidade = $_POST["cidade"];
$estado = $_POST["estado"];

$contato1 = $_POST["nomeDoContato_1"];
$contato2 = $_POST["nomeDoContato_2"];
$telefone1 = $_POST["telefone1"];
$telefone2 = $_POST["telefone2"];
$email1 = $_POST["email1"];
$email2 = $_POST["email2"];

//====== Banco de dados ======//

$server = "localhost";
$db = "empresas";
$user = "root";
$senha = "";

$con = mysqli_connect($server,$user,$senha,$db);
if(!$con){
    die("erro ao conectar no banco de dados " .
            mysqli_connect_error());
}

$sql = "INSERT INTO clientes (razaosocial, nomefantasia, cnpj, formatojuridico,
endereco, bairro, cidade, estado, contato1, contato2, telefone1, telefone2, email1, email2)
VALUES ('".$razaoSocial."','".$nomeFantasia."','".$cnpj."','".$formatoJuridico."','"
.$endereco."','".$bairro."','".$cidade."','".$estado."','".$contato1."','".$contato2."','"
.$telefone1."','".$telefone2."','".$email1."','".$email2."')";

mysqli_query($con,$sql);

mysqli_close($con);

header("Location: c_cliente.html");

?>