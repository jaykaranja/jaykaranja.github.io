$(document).ready(function(){
let hidden = true;
$("button.burger").click(function(){
    if(hidden == true){
        $(".navbar-menu").animate({marginLeft: '185px'}, "slow");
        hidden = false;
    }
    else {
        $(".navbar-menu").animate({marginLeft: '500px'}, "slow");
        hidden = true; 
    }

});

});