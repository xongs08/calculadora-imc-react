import './Formulario.css'
import { useState } from "react";
import classificarIMC from './ClassificarIMC';

function Formulario(){
    const [alturaInput, definirAlturaInput] = useState(0);
    const [pesoInput, definirPesoInput] = useState(0);

    const lidarAlturaInput = (evento) => definirAlturaInput(evento.target.value);
    const lidarPesoInput = (evento) => definirPesoInput(evento.target.value);

    const imc = (altura, peso) => {
      const resultado = peso / (altura ** 2);
      return resultado.toFixed(1);
    };

    const resultado_imc = imc(alturaInput, pesoInput);
    const classificacao_imc = classificarIMC(resultado_imc);

    return (
      <>
        <form id="formulario">
            <div>
                <label htmlFor="altura">
                    Altura(m): 
                    <input type="number" name="altura" id="altura" onChange={lidarAlturaInput} />
                </label>
            </div>

            <div>
              <label htmlFor="peso">
                Peso(kg): 
                <input type="number" name="peso" id="peso" onChange={lidarPesoInput} />
              </label>
            </div>
            
            <h1 id='Resultado'>IMC: {resultado_imc}</h1>
            <h2 id='Classificacao'>Classificação: {classificacao_imc}</h2>
        </form>
      </>
    );
}

export default Formulario;
