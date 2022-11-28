
function blurActivate(element){
    const div = document.getElementById('blur');
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.position = 'absolute';
    div.style.backdropFilter = 'blur(4px)';
    element.style.filter = 'blur(0px)';
}

function blurDeactivate(element){
    const div = document.getElementById('blur');
    div.style.width = '0%';
    div.style.height = '0%';
    div.style.backdropFilter = 'blur(0px)';
    element.style.filter = '';
}
