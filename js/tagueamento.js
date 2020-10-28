// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

var linkExterno = document.getElementsByClassName("menu-lista-contato");
linkExterno[0].addEventListener("click", function () {
    gaSend('menu', 'entre_em_contato', event.target.id)
}, false);

var downloadPdf = document.getElementsByClassName("menu-lista-download");
downloadPdf[0].addEventListener("click", function () {
    gaSend('menu', 'download_pdf', event.target.id)
}, false);

function formChange(event) {
    switch (event.target.id) {
        case 'nome':
            gaSend('contato', event.target.id, 'preencheu')
            break;
        case 'email':
            gaSend('contato', event.target.id, 'preencheu')
            break;
        case 'telefone':
            gaSend('contato', event.target.id, 'preencheu')
            break;
        case 'aceito':
            gaSend('contato', event.target.id, 'preencheu')
            break;

        default:
            break;
    }
}

function formSend() {
    gaSend('contato', 'enviado', 'enviado')
}

function analyticsPageAnalise(event) {
    gaSend('analise', 'ver_mais', event.target.id)
}

function gaSend(categoria, acao, rotulo) {
    const data = {
        categoria: categoria,
        acao: acao,
        rotulo: rotulo
    }
    ga(function (tracker) {
        tracker.send(data);
    });
}

