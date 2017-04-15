
//IIFE
(function(){
    
    window.addEventListener("load", function(){                                                         // au chargement de la page
        
        /*--  RÉCUPÈRE LE JSON DU WEBSERVICE  ------------------------------------------------*/
        
        if(navigator.onLine){                                                                           // si en ligne
            
            // source : http://stackoverflow.com/questions/12460378/how-to-get-json-from-url-in-javascript
            
            var url = 'http://www.simoncbouchard.ca/webservice/biero/biere';    
            
            fetch(url)
            .then(res => res.json())
            .then((biere) => {
                console.log(biere);
                
                // source : http://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage
                localStorage.setItem('jsonDesBieresEnString', JSON.stringify(biere));                   // sauvegarde le JSON obtenu en localStorage
                
                
                for(i=0; i<biere.length; i++){
                    /*--  DOM  -------------------------------------------------------------------*/
                    
                    var nouvelleBiere = document.createElement("a"); 
                    nouvelleBiere.href = "#";
                    nouvelleBiere.className = 'chaqueBiere';
                    document.querySelector(".bieres").appendChild(nouvelleBiere);
                    
                    var imageBiere = document.createElement("IMG");
                    imageBiere.setAttribute("src", biere[i]["image"]);
                    imageBiere.setAttribute("width", "304");
                    imageBiere.setAttribute("height", "304");
                    imageBiere.setAttribute("alt", biere[i]["nom"]);
                    nouvelleBiere.appendChild(imageBiere);
                    
                    var parNom = document.createElement("p"); 
                    parNom.className = 'nomDeLaBiere';
                    nouvelleBiere.appendChild(parNom);
                    var nom = document.createTextNode(biere[i]["nom"]);
                    parNom.appendChild(nom);
                    
                    var parBrasserie = document.createElement("p");
                    parBrasserie.className = 'brasserieDeLaBiere';
                    nouvelleBiere.appendChild(parBrasserie);
                    var brasserie = document.createTextNode(biere[i]["brasserie"]);
                    parBrasserie.appendChild(brasserie);
                    
                }
            })
            .catch(err => console.error(err));
        }
        else{
            var recupereLeJsonDesBieres = localStorage.getItem('jsonDesBieresEnString');
            console.log(JSON.parse(recupereLeJsonDesBieres));
            
            var biereOffline = JSON.parse(recupereLeJsonDesBieres);
            
            for(i=0; i<biereOffline.length; i++){
                /*--  DOM  -------------------------------------------------------------------*/
                
                var nouvelleBiere = document.createElement("a"); 
                nouvelleBiere.href = "#";
                nouvelleBiere.className = 'chaqueBiere';
                document.querySelector(".bieres").appendChild(nouvelleBiere);
                
                var imageBiere = document.createElement("IMG");
                imageBiere.setAttribute("src", biereOffline[i]["image"]);
                imageBiere.setAttribute("width", "304");
                imageBiere.setAttribute("height", "304");
                imageBiere.setAttribute("alt", biereOffline[i]["nom"]);
                nouvelleBiere.appendChild(imageBiere);
                
                var parNom = document.createElement("p"); 
                parNom.className = 'nomDeLaBiere';
                nouvelleBiere.appendChild(parNom);
                var nom = document.createTextNode(biereOffline[i]["nom"]);
                parNom.appendChild(nom);
                
                var parBrasserie = document.createElement("p");
                parBrasserie.className = 'brasserieDeLaBiere';
                nouvelleBiere.appendChild(parBrasserie);
                var brasserie = document.createTextNode(biereOffline[i]["brasserie"]);
                parBrasserie.appendChild(brasserie);
                    
            }  
        }
     });
})();   
    
    

    
    
    
    
    
