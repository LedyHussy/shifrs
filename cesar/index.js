$('.form').click(function () {
    let text = $("[name='text']").val();
    $sdvig = $("[name='sdvig']").val();
    let textarr = text.split('');
    textarr = textarr.filter(function (f) {
        return f !== " ";
    })

    let newtext = [];
    $.each(textarr, function (index, value) {
        $oldIndex =  alf.indexOf(value);
        $newIndex = $oldIndex - $sdvig;
        if ($newIndex < 0){
            $newIndex = $newIndex + 33
        }
        newtext.push(alf[$newIndex]);
    })
    $.each(alf, function (index) {
        $finIndex = index - $sdvig;
        if ($finIndex < 0){
            $finIndex = $finIndex + 33
        }
        $el = "<p class='text'>"+ alf[$finIndex] +"</p>"
        $(".table .finish").append($el);
    })

    $('.res .text').text(newtext);
})

$.each(alf, function (index) {
    $el = "<p class='text'>"+ alf[index] +"</p>"
    $(".table .start").append($el);
})


