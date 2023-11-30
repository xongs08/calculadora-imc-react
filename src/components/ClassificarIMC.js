function classificarIMC(imc) {
    let classificacao;

    // infelizmente esse codigo vai ficar cheio dos if-else

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc > 18.6 && imc < 24.9) {
        classificacao = "Peso ideal";
    } else if (imc > 25 && imc < 29.9) {
        classificacao = "Acima do peso";
    } else if (imc > 30 && imc < 34.9) {
        classificacao = "Obesidade";
    }  else if (imc > 35) {
        classificacao = "Obesidade++";
    } 

    return classificacao;
}

export default classificarIMC;
