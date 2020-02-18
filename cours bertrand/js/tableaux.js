//déclaration d'un tableau d'entier
let tab = [56, 45, 2, 0, 111, 456, 45655];
console.log(tab);

//parcours d'un tableau avec les indices
console.group("Parcours du tableau avec les indices")
for(let i = 0; i < tab.length; i++){
console.log(tab[i]);
}

// console.log("valeur de i :" + i); // is not defined
console.groupEnd();//fin du groupe

//parcours du tableau avec for...of
console.group("Parcours du tableau avec for...of")
for (let elem of tab) {
    console.log(elem);
}
console.groupEnd();//fin du groupe

//parcours du tableau avec for..in
console.group("parcours du tableau avec for..in")
for (let index in tab){
  console.log(tab[index]);
}
console.groupEnd();//fin du groupe

//parcours du tableau avec forearch
console.group("parcours du talbeau avec foreach")
tab.forEach(function(elem){
    console.log(elem);
    
});
console.groupEnd();//fin du groupe

//parcours du tableau avec foreach et notation fléchée
console.group("parcours du tableau avec foreach et notation fléchée")
tab.forEach((elem) => console.log(elem));
console.groupEnd();//fin du groupe