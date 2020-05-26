$(document).ready(function(){
    $(window).scroll(function(){
        var myNav = document.getElementById('mynav');
        var upSorller = document.getElementById('arrowup');
        if($(window).scrollTop() > 250){
            myNav.classList.add("scrolling");   
            $('.nav-link').css('color', '#fff');
            upSorller.classList.add("show"); 
            upSorller.classList.remove("not-show");         
        }
        else{
            myNav.classList.remove("scrolling");
            $('.nav-link').css('color', '#ffffff');
            upSorller.classList.add("not-show"); 
            upSorller.classList.remove("show");  
        }

    });
    $('#btnToggler').click(function(){
        $(".mobile-menu").fadeToggle("slow");   
      });
})
