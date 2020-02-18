let input = document.getElementById('input'), // input/output button
  number = document.querySelectorAll('.numbers div'), // number buttons
  operator = document.querySelectorAll('.operators div'), // operator buttons
  result = document.getElementById('result'), // equal button
  clear = document.getElementById('clear'), // clear button
  resultDisplayed = false; // indicateur pour garder un œil sur la sortie affichée

// ajout de gestionnaires de clics aux boutons numériques
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {

    // stocker la chaîne d'entrée actuelle et son dernier caractère dans des variables - utilisé plus tard
    let currentString = input.innerHTML;
    let lastChar = currentString[currentString.length - 1];

    // si le résultat n'est pas affiché, continuez à ajouter
    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      // si le résultat est actuellement affiché et que l'utilisateur a appuyé sur un opérateur
      // nous devons continuer à ajouter à la chaîne pour la prochaine opération
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      // si le résultat est actuellement affiché et que l'utilisateur a appuyé sur un chiffre
      // nous devons effacer la chaîne d'entrée et ajouter la nouvelle entrée pour démarrer la nouvelle opération
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }

  });
}

// ajout de gestionnaires de clics aux boutons numériques
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function(e) {

    // stocker la chaîne d'entrée actuelle et son dernier caractère dans des variables - utilisé plus tard
    let currentString = input.innerHTML;
    let lastChar = currentString[currentString.length - 1];

    // si le dernier caractère entré est un opérateur, remplacez-le par celui actuellement pressé
    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      let newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0) {
      // si la première touche enfoncée est un opérateur, ne faites rien
      console.log("enter a number first");
    } else {
      // sinon il suffit d'ajouter l'opérateur pressé à l'entrée
      input.innerHTML += e.target.innerHTML;
    }

  });
}

// en cliquant sur le bouton 'égal'
result.addEventListener("click", function() {

  // c'est la chaîne que nous allons traiter eg. -10+26+33-56*34/23
  let inputString = input.innerHTML;

  // formant un tableau de nombres. par exemple pour la chaîne ci-dessus, il sera: numbers = ["10", "26", "33", "56", "34", "23"]
  let numbers = inputString.split(/\+|\-|\×|\÷/g);

  // formant un tableau d'opérateurs. pour la chaîne ci-dessus, ce sera: operators = ["+", "+", "-", "*", "/"]
  // nous remplaçons d'abord tous les nombres et les points par une chaîne vide, puis nous nous séparons
  let operators = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");

  // now we are looping through the array and doing one operation at a time.
  // first divide, then multiply, then subtraction and then addition
  // as we move we are alterning the original numbers and operators array
  // the final element remaining in the array will be the output

  let divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  let multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  let subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  let add = operators.indexOf("+");
  while (add != -1) {
    // using parseFloat is necessary, otherwise it will result in string concatenation :)
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0]; // displaying the output

  resultDisplayed = true; // turning flag if result is displayed
});

// clearing the input on press of clear
clear.addEventListener("click", function() {
  input.innerHTML = "";
})