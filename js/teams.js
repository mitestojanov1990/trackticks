/**
 * Created by NixDev on 12/3/2015.
 */


$(document).ready(function(){
    $('.team-fourth .custom-btn').click(function(){
        $(this).text(function(i,old){
            return old=='Read More' ?  'Close' : 'Read More';
        });
    });

    $('.your-class').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        arrows: true
    });


    var count = 1;

    /*$(".click").click(function() {
     count++;
     if(count < 10){
     $(".increase").html("0"+count);
     }else{
     $(".increase").html(count);
     }

     if(count == 15){
     $(this).text(function(i,old){
     return old=='+' ?  '-' : '+';
     });
     }

     });
     */

    $.fn.invisible = function() {
        return this.css("visibility", "hidden");
    };
    $.fn.visible = function() {
        return this.css("visibility", "visible");
    };

    $('.minus').invisible();

    $('.plus').click(function () {

        count++;
        if(count > 1){
            $('.minus').visible();
        }
        if(count < 10){
            $(".increase").html("0"+count);
        }else{
            $(".increase").html(count);
        }

        if(count == 99){
            $('.plus').invisible();
        }
    })



    $('.minus').click(function () {

        count--;
        if(count < 10){
            $(".increase").html("0"+count);
        }else{
            $(".increase").html(count);
        }

        if(count <= 1){
            $('.minus').invisible();
        }

        if(count < 99){
            $('.plus').visible();
        }

    });






});