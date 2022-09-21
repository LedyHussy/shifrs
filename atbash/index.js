$m = alf.length;

$.each(alf, function (index,value) {
    $el = "<p class='text'>"+ value +"</p>";
    $num = "<p class='text'>"+ Number(index + 1) +"</p>";
    $(".table .start").append($el);

    $newIndex = $m - Number(index + 1);
    $finel = "<p class='text'>"+ alf[$newIndex] +"</p>";
    $(".table .finish").append($finel);
})

$('.form').click(function () {
    let text = $("[name='text']").val();
    $sdvig = $("[name='sdvig']").val();
    let textarr = text.split('');
    textarr = textarr.filter(function (f) {
        return f !== " ";
    })
    let newtext = [];

    $.each(textarr, function (index, value) {
        $oldIndex = alf.indexOf(value);
        $newIndex = $m - $oldIndex;
        newtext.push(alf[$newIndex]);
    })


    $('.res .text').text(newtext);
})