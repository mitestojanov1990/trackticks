/**
 * Created by Goran on 06.12.2015.
 */


$(document).ready(function()
{
    $('#changeLanguage').hide();


    $('a#lang').click(function(event){
        event.preventDefault();
        $('ul#changeLanguage').fadeIn(1000);
/*
        $('div#sizes').hide();
*/
    });
/*
    $('a#more_sizes').click(function(event){
        event.preventDefault();
        $('div#sizes').fadeIn(1000);
        $('div#containers').hide();
    });*/
});