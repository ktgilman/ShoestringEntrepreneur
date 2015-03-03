function hide(){
    $('#analyzer').removeClass('loudanalyzer').addClass('softanalyzer');
    $('#trnav').removeClass('loudtrnav').addClass('softtrnav');
    $('.selected').removeClass('selcolor');
}


function expose(){
    $('#analyzer').removeClass('softanalyzer').addClass('loudanalyzer');
    $('#trnav').removeClass('softtrnav').addClass('loudtrnav');
    $('.selected').addClass('selcolor');
}

$(document).scroll(hide);
$('#analyzer').mouseover(expose);
$('#analyzer').mouseleave(hide);
$('#trnav').mouseover(expose);
$('#trnav').mouseleave(hide);


$('#topa').hover(function(){
   $('#analyzerbottom').addClass('hovercolor');
});

$('#topa').mouseleave(function(){
   $('#analyzerbottom').removeClass('hovercolor'); 
});

$('#bottoma').hover(function(){
   $('#analyzertop').addClass('hovercolor'); 
});

$('#bottoma').mouseleave(function(){
    $('#analyzertop').removeClass('hovercolor');
});