
$('#ante, #prox').click(fazerScroll);

function fazerScroll(e) {
    var direcao = e.target.id == 'frente' ? 1 : -1;
    $('#fotos').animate({
        scrollLeft: scrollAtual += 200 * direcao
    }, 1000);
}