<?php

$server = "localhost";
$db= "empresas";
$user = "root";
$senha = "";

$con = mysqli_connect($server,$user,$senha,$db);
if(!$con){
    die("erro ao conectar no banco de dados " .
            mysqli_connect_error());
}

$sql = "select * from clientes";

$query = mysqli_query($con, $sql)
             or die (mysqli_error());

echo "<h1>Dados Clientes<h1>";

echo "<table border='1'>";         
echo "<tr><td>ID</td><td>Razão Social</td>
        <td>Nome Fantasia</td><td>CNPJ</td><td>Formato Juridico</td><td>Endereço Completo</td>
        <td>Contato e Telefone</td><td>Email's</td></tr>";

while($linha = mysqli_fetch_array($query)){
    echo "<tr>";
    echo "<td>" . $linha["IDcliente"] . "</td>" ;
    echo "<td>" . $linha["razaosocial"] . "</td>" ;
    echo "<td>" . $linha["nomefantasia"] . "</td>" ;
    echo "<td>" . $linha["cnpj"] . "</td>" ;
    echo "<td>" . $linha["formatojuridico"] . "</td>" ;
    echo "<td>" . $linha["endereco"] . $linha["bairro"] . $linha["cidade"] . $linha["estado"] . "</td>" ;
    echo "<td>" . $linha["contato1"] . $linha["telefone1"] . $linha["contato2"] . $linha["telefone2"] . "</td>" ;
    echo "<td>" . $linha["email1"] . $linha["email2"] . "</td>" ;
    echo "</tr>";
}
echo "</table>";

mysqli_close($con);

echo "<a href='c_cliente.html'> Cadastrar Novo Cliente</a>"

?>