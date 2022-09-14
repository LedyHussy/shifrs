$.each(alf, function (index,value) {
    $el = "<p class='text'>"+ value +"</p>";
    $num = "<p class='text'>"+ Number(index + 1) +"</p>";
    $(".table .start").append($el);
    $(".table .finish").append($num)
})

$('.form').click(function () {
    let text = $("[name='text']").val();
    let textarr = text.split('-');
    textarr = textarr.filter(function (f) {
        return f !== " ";
    })
    let newtext = [];

    $.each(textarr, function (index, value) {
        $newIndex = value - 1;
        newtext.push(alf[$newIndex]);
    })

    $('.res .text').text(newtext);
})