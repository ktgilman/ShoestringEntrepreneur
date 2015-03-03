function grow() {
    var $link = $(this);
    var $pdiv = $link.parent();
    var $secondLevel = $pdiv.children('.dropdown');
    $secondLevel.show();
    
    $link.click(function(){
        $secondLevel.hide();
        $link.click(grow);
    });
}



$('.open').click(grow);