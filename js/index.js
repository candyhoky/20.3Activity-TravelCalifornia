$("#card-1").hover(function(){
    $("#card-details-1").toggleClass("hidden");
})

$("#card-2").hover(function(){
    $("#card-details-2").toggleClass("hidden");
})

$("#card-3").hover(function(){
    $("#card-details-3").toggleClass("hidden");
})


$("#destinations-1").mouseover(function(){
    $("#destination-visual-1").css("background-size", "200%");
    })
    .mouseout(function(){
        $("#destination-visual-1").css("background-size", "cover");
    })

$("#destinations-2").mouseover(function(){
    $("#destination-visual-2").css("background-size", "200%");
    })
    .mouseout(function(){
        $("#destination-visual-2").css("background-size", "cover");
    })

$("#destinations-3").mouseover(function(){
    $("#destination-visual-3").css("background-size", "200%");
    })
    .mouseout(function(){
        $("#destination-visual-3").css("background-size", "cover");
    })    