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

    $('.res .text').text(newtext);
    console.log(newtext)
})