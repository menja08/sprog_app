

$(document).ready (function () {

    //jQuery til burgermenu
    //jQuery til BURGERMENU ÅBEN
    $('.menuOpen').click(function () {
        $('.mainMenu').show();
    });
    //jQuery til BURGERMENU LUKKE
    $('.menuClose').click(function () {
        $('.mainMenu').hide();
    });

    //jQuery til profilside
    //jQuery til profilside ÅBEN/LUKKE
    $('.profilIcon').click(function () {
        $('.profilSide').toggle();
    });

    //jQuery til tilbage-knap
    $('.tilbageKnap').click(function(){
        parent.history.back();
        return false;
    });

});
