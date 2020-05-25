$(document).ready(function(){
    $(window).scroll(function(){
        var myNav = document.getElementById('mynav');
        if($(window).scrollTop() > 250){
            myNav.classList.add("scrolling");   
            $('.nav-link').css('color', '#fff');         
        }
        else{
            myNav.classList.remove("scrolling");
            $('.nav-link').css('color', '#ffffff');
        }

    });
    $('#btnToggler').click(function(){
        $(".mobile-menu").fadeToggle("slow");   
      });
})
