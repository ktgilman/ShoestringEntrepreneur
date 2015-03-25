function showColumn(column) {
    $('tr').each(function(){
            $(this).children().eq(column).show();
    });
}

$('#showcompetition').click(function(evt){
    evt.preventDefault;
    $('table').show();
    $('tr').children().hide();
    showColumn(0);
    showColumn(1);
    var competitionArray = $('input:checkbox:checked');
    var passedArray = [];
    for(i=0; i<competitionArray.length; i++){
        var newNumber = competitionArray[i].value;
        var checkNumber = parseInt(newNumber)+1;
        showColumn(checkNumber);
    }
    $('#tablebutton').show();
});



$('#tablebutton').click(function(){
    $('table').hide();
    $(this).hide();
});