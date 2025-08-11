alert('Boas vindas ao jogo do número secreto');

let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let numeroChute;

let tentativas = 1;

while(numeroChute != numeroSecreto) {
   numeroChute = prompt(`Escolha um número ente 1 e ${numeroMaximo}`);
   
   if (numeroChute == numeroSecreto) {
    break;

   } else { 
        if (numeroSecreto > numeroChute){

            alert(`Número Secreto é maior que ${numeroChute} `);

        } else {

            alert(`Número Secreto é menor que ${numeroChute} `);

        }
        tentativas ++
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Acertouuuu, o numero secreto ${numeroSecreto}!!!, você acertou com ${tentativas} ${palavraTentativas}.`)
//if (tentativas > 1) {
    //alert(`Acertouuuu, o numero secreto ${numeroSecreto}!!!, você acertou com ${tentativas} tentativas.`)} else {
    //alert (`Acertouuuu, o numero secreto ${numeroSecreto}!!!, você acertou com ${tentativas} tentativa.`)

//}
