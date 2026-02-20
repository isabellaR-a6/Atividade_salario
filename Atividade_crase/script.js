function verificarSalario(){

    const cargos = document.getElementById("Cargos").value;
    const salario = Number(document.getElementById("salario").value);
    const atraso = Number(document.getElementById("atraso").value);
    const falta = Number(document.getElementById("falta").value);

    const aumanalista = salario * 0.10;
    const aumgerente = salario * 0.15;
    const aumdiretor = salario * 0.20;

    if (falta == 0 && atraso == 0){
       
        switch(cargos){
            case "aprendiz":
                 var salarioAtual = salario;
            break;
            case "analista":
                var salarioAtual = salario + aumanalista;
            break;
            case "gerente":
                var salarioAtual = salario + aumgerente;
            break;
            case "diretor":
                var salarioAtual = salario + aumdiretor;
            break;
        }
        if(salarioAtual == salario){
           resultado.innerHTML = `<strong> Infelizmente você não recebe aumento mas parabéns pelo esforço inutil</strong>`
        }else{
            resultado.innerHTML = `<strong> por você ser ${cargos} você recebe um aumento de R$ ${salarioAtual.toFixed(2)} Parabéns`
        }
    } else{
        resultado.innerHTML = `<strong> Você não compareceu nas horas que devia vai receber bolhufas nenhuma palhaço</strong`;
    }
}
