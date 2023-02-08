function binaryDecimal(number) {
    let sum = 0;
    let enteredLoop = false;
    for (let i = 0; i < number.length; i++) {
      let reverse = number.split('').reverse().join('');
      let digito = reverse.charAt(i);
  
      if (digito === '0' || digito === '1') {
        enteredLoop = true;
        let novoDigito = parseInt(digito, 10) * 2**i;
        sum += novoDigito;
      } else { 
        alert('Insira apenas 1 ou 0!');
        break;
      }
    }
  
    if (enteredLoop) {
      alert('O resultado é: ' + sum);
    }
  }

function enviar() { 
    binaryDecimal(document.getElementById("text").value);
    }
