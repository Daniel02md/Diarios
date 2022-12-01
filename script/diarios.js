$(document).ready(()=>{
    $(".dia").click((dia)=> {mostrarRelatorio(dia.target); })
    $(".fechar").click((dia) => {fecharRelatorio(dia.target.parentElement.parentElement.parentElement)})
})

function mostrarRelatorio(dia){
    const relatorio = dia.getElementsByClassName('relatorio')[0]
    $(relatorio).show('clip')
}

function fecharRelatorio(dia){
    const relatorio = dia.getElementsByClassName('relatorio')[0]
    $(relatorio).hide('clip')
}