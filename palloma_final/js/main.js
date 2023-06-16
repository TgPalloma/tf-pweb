//expressao regular
//var cnpj = "32456789000123";

//replace
// /^2(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/
// "$1.$2.$3/$4-$5"

//console.log(cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5"));

function formatarCNPJ(mascara, documento) {
    let i = documento.value.length;
    let saida = '#';
    let texto = mascara.substring(i);
    while (texto.substring(0, 1) != saida && texto.length ) {
      documento.value += texto.substring(0, 1);
      i++;
      texto = mascara.substring(i);
    }
  }

 function validaCadastro(){

  var razaoSocial = document.getElementById("razao_social").value;
  var nomeFantasia = document.getElementById("nome_fantasia").value;
  var cnpj = document.getElementById("cnpj").value;
  var formatoJuridico = document.getElementById("formato_juridico").value;
  var endereco = document.getElementById("endereco").value;
  var bairro = document.getElementById("bairro").value;
  var cidade = document.getElementById("cidade").value;
  var estado = document.getElementById("estado").value;
  var telefone1 = document.getElementById("telefone_1").value;
  var email1 = document.getElementById("email_1").value;
  var contato1 = document.getElementById("contato_1").value;

  if (razaoSocial == ""){
      alert("Campo Razão Social vazio!");
    document.getElementById("razao_social").focus();
    return;  
  } 
  if (nomeFantasia == ""){
    alert("Campo Nome Fantasia vazio!");
    document.getElementById("nome_fantasia").focus();
    return;
  }
  if (cnpj == ""){
    alert("Campo CNPJ vazio!");
    document.getElementById("cnpj").focus();
    return;
  }
  if (formatoJuridico == ""){
  alert("Campo Formato Juridico vazio!");
    document.getElementById("formato_juridico").focus();
    return;
  }
  if (endereco == ""){
    alert("Campo Endereço vazio!");
    document.getElementById("endereco").focus();
    return;
  }
  if (bairro == ""){
    alert("Campo Bairro vazio!");
    document.getElementById("bairro").focus();
    return;
  }
  if (cidade == ""){
    alert("Campo Cidade vazio!");
    document.getElementById("cidade").focus();
    return;
  }
  if (estado == ""){
    alert("Campo Estado vazio!");
    document.getElementById("estado").focus();
    return;
  }
  if (telefone1 == ""){
    alert("Campo Telefone vazio!");
    document.getElementById("telefone_1").focus();
    return;
    }
  if (email1 == ""){
      alert("Campo E-mail vazio!");
      document.getElementById("email_1").focus();
      return;
  }
  if (contato1 == ""){
      alert("Campo contato vazio!");
      document.getElementById("contato_1").focus();
      return;
  } else {
      document.getElementById("f").submit();
    }
}