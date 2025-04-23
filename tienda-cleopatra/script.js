function narrarHistoria(producto) {
    let texto = '';
  
    switch(producto) {
      case 'kohl':
        texto = '“El kohl era mi escudo contra el sol del desierto y los ojos curiosos. Oscuro como la noche sobre el Nilo.”';
        break;
      case 'loto':
        texto = '“Mis labios llevaban el rojo del loto sagrado, símbolo de renacimiento... y deseo.”';
        break;
      case 'unguento':
        texto = '“Ungüentos perfumados acariciaban mi piel. Los dioses me enseñaron a mezclar sus aromas.”';
        break;
      case 'arena':
        texto = '“Esta arena dorada era el reflejo del sol en mis mejillas... ningún mortal podía resistirse a su brillo.”';
        break;
    }
  
    document.getElementById("historia").innerText = texto;
  }
  
  