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
      $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      }); 
})

function displayProj(image,name){
    // <button type="button" class="close" data-dismiss="alert">x</button><br></br>
    display = document.getElementById('project-display');
    display.classList.add("show");
    display.classList.remove("not-show");
    let closebtn = document.createElement('button');
    closebtn.setAttribute('type', 'button');
    closebtn.className='close float-right';
    closebtn.setAttribute('onClick', 'closeProject()');
    closebtn.innerHTML ='x';
    display.innerHTML ='';
    let imgTag = document.createElement('img');
    let imgDiv = document.createElement('div');
    let note = document.createElement('div');
    let title = document.createElement('h1');
    title.className='text-center text-white';
    let deatails = document.createElement('div');
    let discription = document.createElement('h5');
    deatails.className='row col-6 float-right';
    note.className='row col-12 justify-content-center pb-2';
    title.innerHTML=name;
    note.appendChild(title);
    display.appendChild(closebtn);
    display.appendChild(note);
    imgDiv.className='row col-6 float-left';
    imgTag.setAttribute('src', image);
    imgTag.setAttribute('width', '100%');
    imgTag.setAttribute('hight', '100%');
    imgDiv.appendChild(imgTag);
    display.appendChild(imgDiv);
    discription.className='text-white';
    if (name=='Drop Shipper') {
        discription.innerHTML="I worked as Full-Stack developer in this project...<br> Front-end done by Angular and back-end done by java spring boot.";
    }else if(name=='Simplex.lk'){
        discription.innerHTML="I worked as Front-end developer in this project...<br> Front-end done by java script and jQuary.";
    }else if(name=='Fly-over'){
        discription.innerHTML="I am currently working on this project...<br> Front-end doing by React js and back-end doing by Node js.";
    }
    deatails.appendChild(discription);
    display.appendChild(deatails);
}
function closeProject() {
    display.classList.remove("show");
    display.classList.add("not-show")
}
function sendEmail() {
    let name = $('#name').val();
    let email = $('#email').val();
    let subject = $('#sub').val();
    let msg = $('#msg').val();

    console.log(name, email, subject, msg);
    
    

}