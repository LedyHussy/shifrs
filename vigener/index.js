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
    $cod_index = 0

    for ($i = 0; $i <= $text_lenght - 1; $i++){
        if ($cod_index <= $cod_lenght - 1){
            codtext.push(cod[$cod_index]);
        }
        else{
            $cod_index = 0;
            codtext.push(cod[$cod_index]);
        }
        $cod_index++;
    }

    $.each(textarr,function (index, value) {
        $col_num = alf.indexOf(codtext[index]);
        $('[data-col="'+$col_num+'"]').children().each(function (indexcol) {
            if(! $(this).hasClass('f')){
                if ($(this).text() == value){
                    $alf_index = indexcol - 1;
                    $alf_ell = alf[$alf_index];
                    newtext.push($alf_ell)
                }
            }
        })
    })

    $('.res .text').text(newtext.toString());
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

