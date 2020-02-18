console.log("dom");


let main = document.createElement('main');
main.innerHTML = "Jean-Marc";

let section = document.createElement('section');
main.appendChild(section);

let h1 = document.querySelector('h1');
h1.after(main);


console.log(main);
console.dir(main);
