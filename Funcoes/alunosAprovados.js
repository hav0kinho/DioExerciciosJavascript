const alunos = [
    {
        nome: "Ruallyson",
        nota: 8,
        turma: "3D"
    },
    {
        nome: "Ruann",
        nota: 7,
        turma: "2B"
    },
    {
        nome: "Bruno",
        nota: 6,
        turma: "3A"
    },
    {
        nome: "Felaipe",
        nota: 8,
        turma: "2C"
    },
];


function alunosAprovados(alunos, media){
    let aprovados = [];

    for(let i = 0; i < alunos.length; i++){
        let {nota, nome} = alunos[i];
        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 7))
