$('.form').click(function () {
    let newtext = [];
    $('.res .text').text(newtext);
})

let size = 9; //размер подмассива
let subalf = []; //массив в который будет выведен результат.
for (let i = 0; i <Math.ceil(alf.length/size); i++){
    subalf[i] = alf.slice((i*size), (i*size) + size);
}

$.each(subalf, function (index) {
    $el_table = "<div class='start alf_table alf_table_"+index+"' >";
    $.each(subalf[index], function (index, value) {
        $el_val = "<div class='el'><p class='text'>"+value+"</p></div>";
        $el_table += $el_val;
    })
    $el_table += "</div>";
    $('.table_masson').append($el_table);

    $el_button = "<div class='button_line button_line_"+index+"'>";
    $.each(subalf[index], function (index, value) {
        $but_val = "<div class='el' data-alf='"+value+"'></div>";
        $el_button += $but_val;
    })
    $el_button += "</div>";
    $('.button_group').append($el_button);
})
