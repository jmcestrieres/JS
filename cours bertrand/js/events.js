console.log("Events");

let boutonClic = document.getElementById("boutonClic");
let inputTest = document.getElementById("inputTest");




console.dir(boutonClic);

//premiere methode
boutonClic.addEventListener('click', alerter);
function alerter(){
    alert("ok");
};

//en mettant directement la fonction dedans
boutonClic.addEventListener('click', function(){
    alert("okay");
});

//pareil mais avec fonction flechee
boutonClic.addEventListener('click', () => {
    alert("okiii");
});

//autre
boutonClic.addEventListener('click', (event) => {
    console.log(event);
    alert("daccord");
});


inputTest.addEventListener('keyup', (e) => {
    console.log(e.target.value);
    
});

document.body.addEventListener('mousemove', (e) => {
    console.log("X = ", e.clientX);
    console.log("Y =  ",e.clientY);
    
    
});