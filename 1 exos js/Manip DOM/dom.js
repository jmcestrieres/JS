// EX 1 :
// Modifiez la couleur du texte avec Javascript. Il doit y avoir plusieurs façons de faire...
// Modifiez la position du texte avec Javascript.
// Ajoutez une balise contenant du texte. Inverser les contenus des 2 balises.
// Alignez la 1ère balise à gauche et la 2ème balise à droite.
// -----------------------------------------------------------------------------------------------
//methode 1
// var elmt = document.getElementById("texte1");

// elmt.style.color = "green";
// elmt.style.backgroundColor = "red";


// var elmt = document.getElementById("texte2");

// elmt.style.color = "blue";
// elmt.style.backgroundColor = "green"; 
// //methode 2
// document.getElementById("texte1").style.color = "silver";
// document.getElementById("texte2").style.color = "yellow";
// document.getElementById("texte1").style.background = "red";
// document.getElementById("texte2").style.background = "black";
// document.getElementById("texte1").style.marginLeft = "500px";
// document.getElementById("texte2").style.marginTop = "20px";
// document.getElementById("texte1").style.marginTop = "150px";

// //ajouter p
// let p = document.createElement('p');
// p.innerHTML = "Jean-Marc";

// let h1 = document.querySelector('h1');
// h1.after(p);
//inverser le texte des deux div
// let texte1 = document.getElementById('texte1').textContent;
// let texte2 = document.getElementById('texte2').textContent;

// document.getElementById('texte1').textContent = texte2;
// document.getElementById('texte2').textContent = texte1;


// // EX 2 ://ajouter p
// let p = document.createElement('p');
// p.innerHTML = "Jean-Marc";
// document.body.appendChild(p);

// let h1 = document.querySelector('h1');
// h1.after(p);
// //inverser le texte des deux div
// let texte1 = document.getElementById('texte1').textContent;
// let texte2 = document.getElementById('texte2').textContent;

// document.getElementById('texte1').textContent = texte2;
// document.getElementById('texte2').textContent = texte1;
// Ajoutez 3 div contenant du texte.
// Sans ajout d'id ou de classe, colorer la 1ère div en rouge, la 2ème en vert et la 3ème en bleu.
// Faites en sorte que les 3 div se positionnent horizontalement.

//ajouter 3 div contenant du texte en js

// let body = document.querySelector('body');
// let div1 = document.createElement('div');
// let div2 = document.createElement('div');
// let div3 = document.createElement('div');

// div1.innerHTML = "liberté";
// body.appendChild(div1);
// div2.innerHTML = "égalité";
// body.appendChild(div2);
// div3.innerHTML = "fraternité";
// body.appendChild(div3);





//mise en style des div
// let divElements = document.querySelectorAll('div');
// let bodyElement = document.querySelector('body');

// divElements[0].style.background = "blue";
// divElements[1].style.background = "white";
// divElements[2].style.background = "red";
// bodyElement.style.display = "flex";
// bodyElement.style.justifyContent = "center";




/**
 * EX 3
- Créer une div dans une page.
- Déclarer une variable maDiv et lui affecter la div créée précédemment.
- Afficher la variable maDiv dans la console.
- En Javascript, ajouter un attribut id à cet élément et lui donner une valeur.
- Afficher la variable dans la console.
- Créer une classe Css maClasse avec quelques propriétés.
- En Javascript, ajouter la classe maClasse à l'élément maDiv.
 */

//  let maDiv = document.querySelector('div');//je déclare ma variable
 
//  maDiv.setAttribute("id", "iddemadiv");//j'ajoute un id a ma classe
//  console.log(maDiv);//j'affiche ma variable ds la console

//  maDiv.className = "maClasse";//j'ai d'abord crée la classe ds le CSS et ici je rajoute une classe a ma div en JS

 
//  //EX 4
// - Créez une page affichant une image. Plusieurs méthodes...
// - Affichez la source de l'image dans la console.
// - Ajoutez le code Javascript permettant de changer l'image lorsqu'on clique dessus. Testez plusieurs méthodes.
// - Faites la même chose en ajoutant un effet de transition lors du changement d'image.


// let article = document.querySelector("article");
// // Attribution des styles d'arrière plan des divs
// article.children[0].style.background = "url(téléchargement.jpeg) 50% 50% no-repeat";
// article.children[1].style.background = "url(téléchargement2.jpeg) 50% 50% no-repeat";
// // clic sur l'article contenant les div
// article.onclick = function(){
//     // Boucle dans les enfants de l'article. for .. of permet de récupérer les enfants 
//     // This pointe sur l'élément qui a été cliqué
//     console.log(this.children, this);
//     for(let i of this.children){
//         i.classList.toggle("invisible");
//     }
// }

// EX 5
// Observez le fonctionnement du code suivant : JS mouse enter
// On souhaite plusieurs améliorations:
// La couleur doit revenir à l'état initial lorsque la souris sort de l'élément h1.
// Le survol ne doit se déclencher que sur le texte, pas sur toute la largeur de l'écran.
// Une animation sur le texte doit se déclencher lorsqu'on clique dessus.

// //modification de la zone sensible au hover
// document.querySelector("h1").style.display = "inline-block";
// document.body.style.textAlign = "center";

// //mouse over
// document.querySelector("h1").onmouseenter = function(){
//     this.style.color = "red";
// };
// document.querySelector("h1").onmouseleave = function(){
//     this.style.color = "black";
// };

// //clic sur l'élément
// document.querySelector("h1").onclick = function(){   
    
//     this.animate([
//             // keyframes
//             { transform: 'rotate(360deg)' },
//             { transform: 'rotate(-360deg)' }
//         ],{ 
//             // timing options
//             duration: 1000
//             // iterations: Infinity
//     });
// };

// EX 6
// Uniquement en Javascript, créez 2 paragraphes contenant du texte.
// Stockez les 2 éléments dans des variables.
// Ajoutez de la mise en forme aux paragraphes : marges, bordures...

//ajouter p
let p1 = document.createElement('p');
p1.innerHTML = "premier paragraphe créé en JS";
document.body.appendChild(p1);
console.log(p1);

let p2 = document.createElement('p');
p2.innerHTML = "deuxième paragraphe créé en JS";
document.body.appendChild(p2);
console.log(p2);

document.querySelector('body').style.textAlign = "center"
p1.style.color = "red"
p1.style.border = "3px solid black"
p1.style.display = "inline-block"
p1.style.padding = "5px"
p2.style.color = "green"