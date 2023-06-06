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

