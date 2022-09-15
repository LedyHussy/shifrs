$m = alf.length;

$('.form').click(function () {
    let text = $("[name='text']").val();
    let cod = $("[name='cod']").val();
    let textarr = text.split('');
    textarr = textarr.filter(function (f) {
        return f !== " ";
    })

    $text_lenght = textarr.length;
    $cod_lenght = cod.length;

    let codtext = [];
    let newtext = [];

    for ($i = 0; $i <= $text_lenght; $i++){
      console.log($cod_lenght)
    }

    $('.res .text').text(newtext);
})

$.each(alf, function (index, value) {
$el_first_line = "<p class='text'>"+value+"</p>";
$('#table .first').append($el_first_line);

$line = "<div class='line' data-col='"+index+"'><p class='f text'>"+value+"</p></div>";
    $('#table').append($line);
})

$('[data-col]').each(function () {
    $datacol = $(this).data('col');
    for ($i = 0; $i < $m; $i++){
        $index_new = $i + $datacol;
        if ($index_new >= $m){
            $index_new = $index_new - $m ;
        }

        $el = "<p class='text'>"+alf[$index_new]+"</p>"
        $(this).append($el);
    }
})

