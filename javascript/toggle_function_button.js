$(function(){
    $("#slide-toogle").click(function(){

        if ($('#extended-functions').css('display') == 'none') {
            $("#slide-toogle").text('Naciśnij żeby zwinąć');
            $("#extended-functions").slideDown();
        }
        else {
            $("#extended-functions").slideUp();
            $("#slide-toogle").text('Naciśnij żeby rozwinąć');
        }
    });
});