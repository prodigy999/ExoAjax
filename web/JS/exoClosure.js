var tableau = [{id: 'email', text: 'Entrez votre E-mail ici'},{id: 'name', text: 'Entrez votre nom ici'},{id: 'age', text: 'Entrez votre age ici'}];

function afficher(){
     
    function maClosure (id, text) {
        
        document.getElementById(id).onfocus = function(){
            document.getElementById("helper").innerHTML = text; 
            }
        }
        
    for ( i = 0; i < tableau.length; i++){  
        
        maClosure(tableau[i].id, tableau[i].text)
    }
}
 
    
