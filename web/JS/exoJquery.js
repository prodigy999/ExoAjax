$(document).ready(function () {

    $("#searchForm").submit(function(e) { 
        e.preventDefault();
        
        $.ajax({
        method: "POST",
        url: $(this).attr("action"),
        data: $(this).serialize(), 
        dataType: "html",
        success: function(data) {
            $("#result").html(data);
        },
        error: function(jqXHR, status, err) {
            $("#error").html(err.message);
        }
        });
    });
    
    $("#masq").on("click", function(){
        $(":submit").hide("slow", function (){
        });
        $("#result").toggle("slow", function (){
        }); 
    });
    
    $("#affi").on("click", function () {
        $(":submit").slideToggle();
    });
    
    $("#bouge").on("click", function (){
        $("#result").animate({
            width: "70%",
            marginLeft: "0.6in",
            fontSize: "3em",
            borderWidth: "10px"
        }, 1500 );
    });
    
});