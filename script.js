
var rollAtual = 0;
$('#ante, #prox').click(fazerScroll);

function fazerScroll(e) {
    var direcao = e.target.id == 'prox' ? 1 : -1;
    $('#fotos').animate({
        scrollLeft: scrollAtual += 200 * direcao
    }, 1000);
}