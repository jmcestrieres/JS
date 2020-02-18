let menu = document.querySelectorAll('nav > ul > li')
console.log(menu);

for (let sousMenu of menu){
    sousMenu.addEventListener("click", function(){
        let sousMenuElmt = sousMenu.children[1]

        if (sousMenuElmt.style.visibility === "visible"){
            sousMenuElmt.style.visibility = "hidden"
            sousMenuElmt.style.opacity = "0"
        }
        else{
            sousMenuElmt.style.visibility ="visible"
            sousMenuElmt.style.opacity ="1";
        }

    })
console.log(sousMenu.children[1]);

}
