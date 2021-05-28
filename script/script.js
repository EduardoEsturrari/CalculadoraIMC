let botaoCalcular = document.getElementById('btnCalcular');

function calcularImc(){
    let peso = document.getElementById('displayPeso').value;
    let altura = document.getElementById('displayAltura').value/100;
    let resultado = document.getElementById('resultado');

    
    if (altura !== "0" && peso !== "0"){

        let imc = (peso / (altura * altura)).toFixed(2);
        let mensagem = ""

        if(imc < 18.5){
            mensagem = "Você está abaixo do peso ideal para sua altura"
        } else if(imc < 25){
            mensagem = "Você está com o peso ideal para sua altura"
        } else if(imc < 35){
            mensagem = "Você está acima do peso ideal para sua altura"
        } else if(imc < 40){
            mensagem = "Cuidado!! Obesidade Grau I"
        } else if(imc < 45){
            mensagem = "Cuidado!! Obesidade Grau II"
        } else {
            mensagem = "Cuidado!! Obesidade Grau III"
        }

        resultado.textContent = `Seu IMC é ${imc}. ${mensagem}`
    } else {
        resultado.textContent = `Preencha os campos!!`
    }
}



botaoCalcular.addEventListener('click', calcularImc);

