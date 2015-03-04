function grow() {
    var $link = $(this);
    var $pdiv = $link.parent();
    var $secondLevel = $pdiv.children('.dropdown');
    $secondLevel.show();
    var img = '<img id="growimg" class="arrow" src="img/arrow.png" alt="See Less">';
    $link.html('See Less'+img);
    
    $link.click(function(){
        $secondLevel.hide();
        $link.click(grow);
        var img = '<img id="growimg" class="arrow" src="img/arrow.png" alt="See More">';
        $link.html('See More'+img);
        $('#popout').remove();
    });
}

function popOutInfo(event){
    $('#popout').remove();
    event.preventDefault();
    var heading = $(this).text();
    var pText = $(this).next().text();
    var $closeButton = $('<button id="buttonclose">Close Box</button>');
    var $textSection = $('<p>'+pText+'</p>');
    var $boxHead = $('<h5>'+heading+'</h5>');
    var $div = $('<div id="popout"></div>');
    $div.append($boxHead);
    $div.append($textSection);
    $div.append($closeButton);
    $('body').append($div);
    $('#buttonclose').click(function(){
        $('#popout').remove();
    });
}



$('.open').click(grow);
$('.secondlevel button').click(popOutInfo);