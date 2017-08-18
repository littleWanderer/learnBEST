

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   
    }
});
$('#return-to-top').click(function() {      
    $('body,html').animate({
        scrollTop : $("#pocetna").offset().top                       
    }, 2000);
}); 




 function prikazi(elem){
    var e=document.getElementById(elem);

    if(e.style.display!=="block") { //ako je sakriven
       
        e.style.display="block";
        e.classList.add("animated");
        e.classList.remove("fadeOut");
        e.classList.add("fadeIn");

    }

        
    else  {
        
        e.classList.remove("fadeIn");
        e.classList.add("fadeOut");
        e.style.display="none";
    }

};





/* nije korisceno u poslednjoj verziji



function sakrijTekst(elem1, elem2) {
     sakrij(elem1);
     sakrij(elem2);
};



function cssMe(elem1, elem2) {
    var s = document.querySelector(elem1);
    var t = document.querySelector(elem2);
        
        s.style.fontSize="3em";
        t.style.fontSize="1.2em";
        t.style.backgroundColor="transparent"; 
    
}

function prikaziTekst(elem, elem1, elem2){ //unosimo id elementa, tj slike

    switch(elem) {
        case "tea":
        document.getElementById(elem1).innerHTML = "Teodora Mitrović";
        document.getElementById(elem2).innerHTML = "TEAM LEADER";
        cssMe("#ime","#opis");
        prikazi(elem1);
        prikazi(elem2);
        break;
        case "kris":
        document.getElementById(elem1).innerHTML = "Kristina Živković";
        document.getElementById(elem2).innerHTML = "DEVELOPER";
        cssMe("#ime","#opis");
        prikazi(elem1);
        prikazi(elem2);
        break;
        case "krsta":
        document.getElementById(elem1).innerHTML = "Nenad Krstić";
        document.getElementById(elem2).innerHTML = "DEVELOPER";
        cssMe("#ime","#opis");
        prikazi(elem1);
        prikazi(elem2);
        break;
        case "sonja":
        document.getElementById(elem1).innerHTML = "Sonja Solomka";
        document.getElementById(elem2).innerHTML = "DEVELOPER";
        cssMe("#ime","#opis");
        prikazi(elem1);
        prikazi(elem2);
        break;
        case "maka":
        document.getElementById(elem1).innerHTML = "Marina Jovanović";
        document.getElementById(elem2).innerHTML = "PR / MANAGER";
        cssMe("#ime","#opis");
        prikazi(elem1);
        prikazi(elem2);
        break;

    }
        
};

*/

