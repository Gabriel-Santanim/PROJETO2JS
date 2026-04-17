let alunos = [];

document.getElementById("btnCadastrar").addEventListener("click", cadastrarAlunos);
//document.getElementById("btnFiltrarMelhor").addEventListener("click", filtrarMelhor);
document.getElementById("btnFiltrarMelhorNotas").addEventListener("click", filtrarMelhoresNotas);

function cadastrarAlunos() {
    let nome = document.getElementById("nome").value;
    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;

    if (nome === "" || nota1 === "" || nota2 === "") {
        alert("Preencha todos os campos");
        return;
    }

    let n1 = Number(nota1);
    let n2 = Number(nota2);
    let media = (n1 + n2) / 2;

    let aluno = {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: media
    };

    alunos.push(aluno);
    limparCampos();
    exibirAlunos(alunos);
}

function exibirAlunos(lista) {
    let texto = lista.map(f =>
        `Nome: ${f.nome}<br>Primeira nota: ${f.nota1} | Segunda nota: ${f.nota2}<br>Média: ${f.media}`
    ).join("<br><hr>"); 
    document.getElementById("listaAlunos").innerHTML = texto;
}


function filtrarMelhoresNotas() {
    let resultado = alunos
        .filter(f => f.media === 10)
        .slice(0, 5);

    exibirAlunos(resultado);
}
//function filtrarMelhor() {  
//    let resultado = alunos.filter(f => f.media >= 7);
//    exibirAlunos(resultado);
//}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
}