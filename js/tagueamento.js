// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

var linkExterno = document.getElementsByClassName("menu-lista-contato");
linkExterno[0].addEventListener("click", function () {
    alert("clicked");
}, false);

var downloadPdf = document.getElementsByClassName("menu-lista-download");
downloadPdf[0].addEventListener("click", function () {
    alert("clicked");
}, false);

function formChange(event) {
    switch (event.target.id) {
        case 'nome':
            console.log('nome')
            break;
        case 'email':
            console.log('email')
            break;
        case 'telefone':
            console.log('telefone')
            break;
        case 'aceito':
            console.log('aceito')
            break;

        default:
            break;
    }
}

function formSend(params) {
    alert("form enviado")
}

function analyticsPageAnalise(event) {
    const data = {
        categoria: 'analise',
        acao: 'ver_mais',
        rotulo: event.target.id
    }
    console.log(data)
}

function gaSend(data) {
    ga(function (tracker) {
        tracker.send('event', 'Video', 'play', 'cats.mp4');
    });

    ga('[trackerName.]send', [hitType], [...fields], [fieldsObject]);

}

