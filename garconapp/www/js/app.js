$('.collection-item').on('click', function() {
    let $badge = $('.badge', this);

    if($badge.length === 0) {
        $badge = $('<span class="badge brown-text">0</span>').appendTo(this);
    }

    $badge.text(parseInt($badge.text()) + 1);

    let nomeProduto = this.firstChild.textContent;
    Materialize.toast(nomeProduto + ' adicionado', 500);
});

$('#confirmar').on('click', function() {
    let texto = '';

    $('.badge').parent().each(function() {
        let produto = this.firstChild.textContent;

        if(this.classList.contains('full')) {
            produto += ' inteiro';
        }

        let quantidade = this.lastChild.textContent;

        texto += produto + ': ' + quantidade + ', ';
    });

    //Remove a última vírgula
    texto = texto.trim();
    texto = texto.substr(0, texto.length - 1 );

    $('#resumo').empty().text(texto);
});

$('.modal-trigger').leanModal();

$('.collection').on('click', '.badge' , function() {
    $(this).remove();
    return false;
});

$('.acao-limpar').on('click', function() {
    $('#numero-mesa').val('');
    $('.badge').remove();
});