const verificaParEIguais = (num1, num2) =>{
    try{
        //VERIFICAÇÃO DE ERROS
        if(!num1 || !num2) throw new ReferenceError("Algum dos valores são inválidos ou inexistentes");
        if(typeof(num1) !== "number" || typeof(num2) !== "number") throw new TypeError("Os parâmetros não são numeros");
        //EXECUÇÃO DA FUNÇÃO
        if(num1 % 2 === 0 && num2 === num1){
            return true;
        }
        return false;
    } catch(e) {
        if(e instanceof ReferenceError){
            console.log("Erro de Referência");
            console.log(e.message);
        } else if(e instanceof TypeError){
            console.log("Erro de Tipo");
            console.log(e.message);
        } else {
            console.log("Erro não identificado: " + e);
        }
    }


}

console.log(verificaParEIguais(2, 'a'));