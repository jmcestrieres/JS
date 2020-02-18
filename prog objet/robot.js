class Robot{
    constructor(nom,br, jamb, yeu, oreil, bou, tet, cor, ant){
        this.name = nom
        this.bras = br;
        this.jambes = jamb;
        this.yeux = yeu;
        this.oreille = oreil;
        this.bouche = bou;
        this.tete = tet;
        this.corp = cor;
        this.antenne = ant;
    }
    sauter(){
        console.log("boing boing");
        
    }
    marcher(){
        console.log("un deux, un deux");
        
    }
    reculer(){
        console.log("on recuuuule");
        
    }
    monter(){
        console.log("ho hisse");
        
    }
    parlerReussite(){
        console.log("ouaiii");
        
    }
    parlerRater(){
        console.log("noooon");
        
    }
    descendre(){
        console.log("on descend");
    }
    demitour(){
        console.log("demi tour !");
        
    }
    arreter(){
        console.log("le robot s'arrete");
        
    }
    attrapper(){
        console.log("attrapper");
        
    }
}