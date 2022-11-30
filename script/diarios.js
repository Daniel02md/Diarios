$(document).ready(()=>{
    $(".dia").click((dia)=> {mostrarRelatorio(dia.target); })
})

function mostrarRelatorio(dia){
    const relatorio = dia.getElementsByClassName('relatorio')[0]
    $(relatorio).show('clip')
}

function fecharRelatorio(dia){
    const relatorio = dia.getElementsByClassName('relatorio')[0]
    $(relatorio).hide('clip')
}