document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const chassi = parseFloat (document.getElementById("chassi").value);
        const pesoBruto = parseFloat(document.getElementById("peso-bruto").value);
        const pesoSemiReboque = parseFloat(document.getElementById("peso-semi-reboque").value);
        const equipamentos = parseFloat(document.getElementById("equipamentos").value);
        const velocidadeIda = parseFloat(document.getElementById("velocidade-ida").value);
        const velocidadeVolta = parseFloat(document.getElementById("velocidade-volta").value);
        const quantidadeCarga = parseFloat(document.getElementById("quantidade-carga").value);
        const distanciaPercorridaIda = parseFloat(document.getElementById("distancia-percorrida-ida").value);
        const distanciaPercorridaVolta = parseFloat(document.getElementById("distancia-percorrida-volta").value);
        const tempoCargaIda = parseFloat(document.getElementById("tempo-carga-ida").value);
        const tempoCargaVolta = parseFloat(document.getElementById("tempo-carga-volta").value);
        const jornadaUtil = parseFloat(document.getElementById("jornada-util").value);
        const turnosDiarios = parseInt(document.getElementById("turnos-diarios").value);
        const numeroDiasUlteis = parseInt(document.getElementById("numero-de-dias=ulteis").value);
        const paradasManutencao = parseInt(document.getElementById("paradas-para-manutencao").value);

        // Exemplo de cálculos
    const pesoTotalVeiculo = chassi + pesoSemiReboque + equipamentos;
    const cargaUtilVeiculo = pesoBruto - pesoTotalVeiculo;
    const numeroViagensMensais = quantidadeCarga /30;
    const tempoViagemIda = (distanciaPercorridaIda / velocidadeIda) * 60;
    const tempoViagemVolta = (distanciaPercorridaVolta / velocidadeVolta) * 60;
    const tempoTotalViagem = tempoViagemIda + tempoViagemVolta + tempoCargaIda + tempoCargaVolta;
    const tempoDiarioOperacao = turnosDiarios * (jornadaUtil*60);
    const numeroViagensDiarias = tempoDiarioOperacao / tempoTotalViagem;
    const numeroDiasDisponiveis = numeroDiasUlteis - paradasManutencao;
    const numeroViagensMensaisVeiculo = numeroViagensDiarias * numeroDiasDisponiveis;
    const frotaNecessaria = numeroViagensMensais / numeroViagensMensaisVeiculo;
    
        // Exibindo resultados no console


const buttton = document.getElementById('Enviar');
buttton.addEventListener('click',()=>{

    console.log("aQUIIII")
const Resultado = document.getElementById('Resultado');

Resultado.innerHTML = 
`
<div>  
    <p><strong>Peso Total:</strong> ${pesoTotalVeiculo} kg</p>
    <p><strong>Carga Utilizada:</strong> ${cargaUtilVeiculo} kg</p>
    <p><strong>Número de Viagens:</strong> ${numeroViagensMensais}</p>
    <p><strong>Tempo Total de Viagem:</strong> ${tempoTotalViagem} minutos</p>
    <p><strong>Tempo Diário Total:</strong> ${tempoDiarioOperacao} minutos</p>
    <p><strong>Viagens Diárias:</strong> ${numeroViagensDiarias}</p>
    <p><strong>Total de Dias de Trabalho:</strong> ${numeroDiasDisponiveis}</p>
    <p><strong>Número Total de Viagens:</strong> ${numeroViagensMensaisVeiculo}</p>
    <p><strong>Cálculo da Frota Necessária:</strong> ${frotaNecessaria}</p>
</div>
`;

});
})
     
});
