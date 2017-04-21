//IIFE
(function(){
    
    window.addEventListener("load", function(){                                                             // au chargement de la page
        
        
        if(document.querySelector(".bieres")){                                                              // si la section 'bieres' existe
            
            /*--  SI EN LIGNE  -----------------------------------------------------------------------*/
            if(navigator.onLine){
                
                var divEnLigne = document.createElement("div");                                             // div enLigne
                divEnLigne.className = 'classeDivEnLigne';
                document.querySelector(".entete").appendChild(divEnLigne);
                
                var divRond = document.createElement("div");                                                // div rond vert 
                divRond.className = 'classeDivRondVert';
                divEnLigne.appendChild(divRond);
                
                var parVousEteConnecte = document.createElement("p");                                       // chaîne "connecté"
                parVousEteConnecte.className = 'classeParVousEteConnecte';
                divEnLigne.appendChild(parVousEteConnecte);
                var texteVousEteConnecte = document.createTextNode("Vous pouvez consulter cette page offline.");
                parVousEteConnecte.appendChild(texteVousEteConnecte);
                
                // source : http://stackoverflow.com/questions/12460378/how-to-get-json-from-url-in-javascript
                
                /*--  RÉCUPÈRE LE JSON DU WEBSERVICE  ------------------------------------------------*/
                //var url = '../../webservice/biero/biere';    
                var url = 'https://www.simoncbouchard.ca/webservice/biero/biere';    
                
                fetch(url)
                .then(res => res.json())
                .then((biere) => {
                    console.log(biere);
                    
                    // source : http://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage
                    localStorage.setItem('jsonDesBieresEnString', JSON.stringify(biere));                   // sauvegarde le JSON obtenu en localStorage
                    
                    for(i=0; i<biere.length; i++){
                        
                        /*--  DOM  -------------------------------------------------------------------*/
                        
                        var nouvelleBiere = document.createElement("a");                                    // lien
                        nouvelleBiere.href = "./biere.html#" + biere[i]["id_biere"];
                        nouvelleBiere.className = 'chaqueBiere';
                        document.querySelector(".bieres").appendChild(nouvelleBiere);
                        
                        var imageBiere = document.createElement("IMG");                                     // image
                        imageBiere.setAttribute("src", biere[i]["image"]);
                        imageBiere.setAttribute("width", "304");
                        imageBiere.setAttribute("height", "304");
                        imageBiere.setAttribute("alt", biere[i]["nom"]);
                        nouvelleBiere.appendChild(imageBiere);
                        
                        var parNom = document.createElement("p");                                           // nom de la bière
                        parNom.className = 'nomDeLaBiere';
                        nouvelleBiere.appendChild(parNom);
                        var nom = document.createTextNode(biere[i]["nom"]);
                        parNom.appendChild(nom);
                        
                        var parBrasserie = document.createElement("p");                                     // nom de la brasserie
                        parBrasserie.className = 'brasserieDeLaBiere';
                        nouvelleBiere.appendChild(parBrasserie);
                        var brasserie = document.createTextNode(biere[i]["brasserie"]);
                        parBrasserie.appendChild(brasserie);
                        
                    }
                })
                .catch(err => console.error(err));
            }
            else{
                
                var divHorsLigne = document.createElement("div");                                           // div horsLigne
                divHorsLigne.className = 'classeDivHorsLigne';
                document.querySelector(".entete").appendChild(divHorsLigne);
                
                var divRondRouge = document.createElement("div");                                           // div rond rouge
                divRondRouge.className = 'classeDivRondRouge';
                divHorsLigne.appendChild(divRondRouge);
                
                var parVousNetePasConnecte = document.createElement("p");                                   // chaîne "offline"
                parVousNetePasConnecte.className = 'classeParVousNetePasConnecte';
                divHorsLigne.appendChild(parVousNetePasConnecte);
                var texteVousNetePasConnecte = document.createTextNode("Cette page s'ouvre offline.");
                parVousNetePasConnecte.appendChild(texteVousNetePasConnecte);
                
                /*--  RÉCUPÈRE LE JSON PLACÉ EN LOCALHOST  -------------------------------------------*/
                var recupereLeJsonDesBieres = localStorage.getItem('jsonDesBieresEnString');
                var biereOffline = JSON.parse(recupereLeJsonDesBieres);                                     // parse le JSON
                //console.log(biereOffline);
                
                for(i=0; i<biereOffline.length; i++){
                    
                    /*--  DOM  -----------------------------------------------------------------------*/
                    
                    var nouvelleBiere = document.createElement("a");                                        // lien
                    nouvelleBiere.href = "./biere.html#" + biereOffline[i]["id_biere"];
                    nouvelleBiere.className = 'chaqueBiere';
                    document.querySelector(".bieres").appendChild(nouvelleBiere);
                    
                    var imageBiere = document.createElement("IMG");                                         // image
                    imageBiere.setAttribute("src", biereOffline[i]["image"]);
                    imageBiere.setAttribute("width", "304");
                    imageBiere.setAttribute("height", "304");
                    imageBiere.setAttribute("alt", biereOffline[i]["nom"]);
                    nouvelleBiere.appendChild(imageBiere);
                    
                    var parNom = document.createElement("p");                                               // nom de la bière 
                    parNom.className = 'nomDeLaBiere';
                    nouvelleBiere.appendChild(parNom);
                    var nom = document.createTextNode(biereOffline[i]["nom"]);
                    parNom.appendChild(nom);
                    
                    var parBrasserie = document.createElement("p");                                         // nom de la brasserie
                    parBrasserie.className = 'brasserieDeLaBiere';
                    nouvelleBiere.appendChild(parBrasserie);
                    var brasserie = document.createTextNode(biereOffline[i]["brasserie"]);
                    parBrasserie.appendChild(brasserie);
                        
                }  
            }
        }
        
        if(document.querySelector(".biere")){                                                               // si la section 'biere' existe
            
            /*--  SI EN LIGNE  -----------------------------------------------------------------------*/
            if(navigator.onLine){                                                                           // si en ligne vert 
                
                var divEnLigne = document.createElement("div");                                             // div enLigne
                divEnLigne.className = 'classeDivEnLigne';
                document.querySelector(".entete").appendChild(divEnLigne);
                
                var divRond = document.createElement("div");                                                // div rond
                divRond.className = 'classeDivRondVert';
                divEnLigne.appendChild(divRond);
                
                var parVousEteConnecte = document.createElement("p");                                       // chaîne "connecté"
                parVousEteConnecte.className = 'classeParVousEteConnecte';
                divEnLigne.appendChild(parVousEteConnecte);
                var texteVousEteConnecte = document.createTextNode("Vous pouvez consulter cette page offline.");
                parVousEteConnecte.appendChild(texteVousEteConnecte);
            }
            /*--  SI HORS LIGNE  ---------------------------------------------------------------------*/
            else{
                var divHorsLigne = document.createElement("div");                                           // div horsLigne
                divHorsLigne.className = 'classeDivHorsLigne';
                document.querySelector(".entete").appendChild(divHorsLigne);
                
                var divRondRouge = document.createElement("div");                                           // div rond rouge
                divRondRouge.className = 'classeDivRondRouge';
                divHorsLigne.appendChild(divRondRouge);
                
                var parVousNetePasConnecte = document.createElement("p");                                   // chaîne "offline"
                parVousNetePasConnecte.className = 'classeParVousEteConnecte';
                divHorsLigne.appendChild(parVousNetePasConnecte);
                var texteVousNetePasConnecte = document.createTextNode("Cette page s'ouvre offline.");
                parVousNetePasConnecte.appendChild(texteVousNetePasConnecte);
            }
            
            
            /*--  RÉCUPÈRE L'ID DE LA BIERE SPECIFIÉ EN PARAMÈTRE  ------------------------------------*/
            var urlRecupere = window.location.href;
            var paramId = urlRecupere.split('#');
            var idDeLaBiere = paramId[1]-18;
            //console.log(idDeLaBiere);
            
            /*--  RÉCUPÈRE LE JSON PLACÉ EN LOCALHOST  ------------------------------------------------*/
            var recupereLeJsonDesBieres = localStorage.getItem('jsonDesBieresEnString');
            var uneBiereOffline = JSON.parse(recupereLeJsonDesBieres);                                      // parse le JSON
            //console.log(JSON.parse(uneBiereOffline));                                               
            
            /*--  DOM  --------------------------------------------------------------------------------*/
            
            var uneBierePageImage = document.createElement("div");                                          // div image
            uneBierePageImage.className = 'uneBiereImage';
            document.querySelector(".biere").appendChild(uneBierePageImage);
            
            var imageBierePage = document.createElement("IMG");                                             // image
            imageBierePage.setAttribute("src", uneBiereOffline[idDeLaBiere]["image"]);
            imageBierePage.setAttribute("width", "304");
            imageBierePage.setAttribute("height", "304");
            imageBierePage.setAttribute("alt", uneBiereOffline[idDeLaBiere]["nom"]);
            uneBierePageImage.appendChild(imageBierePage);
            
            var uneBierePage = document.createElement("div");                                               // div texte
            uneBierePage.className = 'uneBiereTexte';
            document.querySelector(".biere").appendChild(uneBierePage);
            
            var parNomPage = document.createElement("p");                                                   // nom de la bière 
            parNomPage.className = 'nomDeLaBierePage';
            uneBierePage.appendChild(parNomPage);
            var nomPage = document.createTextNode(uneBiereOffline[idDeLaBiere]["nom"]);
            parNomPage.appendChild(nomPage);
            
            var parBrasseriePage = document.createElement("p");                                             // nom de la brasserie
            parBrasseriePage.className = 'brasserieDeLaBierePage';
            uneBierePage.appendChild(parBrasseriePage);
            var brasseriePage = document.createTextNode(uneBiereOffline[idDeLaBiere]["brasserie"]);
            parBrasseriePage.appendChild(brasseriePage);
            
            var parMoyennePage = document.createElement("p");                                               // note moyenne
            parMoyennePage.className = 'moyenneDeLaBierePage';
            uneBierePage.appendChild(parMoyennePage);
            var moyennePage = document.createTextNode(Math.floor(uneBiereOffline[idDeLaBiere]["moyenne"]));
            parMoyennePage.appendChild(moyennePage);
            
            var spanSurDix = document.createElement("span");                                               // sur 10
            spanSurDix.className = 'surDixDeLaBierePage';
            uneBierePage.appendChild(spanSurDix);
            var surDix = document.createTextNode(" / 10");
            spanSurDix.appendChild(surDix);
            
            var parNombreNotePage = document.createElement("p");                                            // nombre de notes
            parNombreNotePage.className = 'nombreNoteDeLaBierePage';
            uneBierePage.appendChild(parNombreNotePage);
            var nombreNotePage = document.createTextNode("Nombre de votes : " + uneBiereOffline[idDeLaBiere]["nombre"]);
            parNombreNotePage.appendChild(nombreNotePage);
        
            var parDescriptionPage = document.createElement("p");                                           // description
            parDescriptionPage.className = 'descriptionDeLaBierePage';
            uneBierePage.appendChild(parDescriptionPage);
            var descriptionPage = document.createTextNode(uneBiereOffline[idDeLaBiere]["description"]);
            parDescriptionPage.appendChild(descriptionPage);
            
        }
     });
})();   
    
    

    
    
    
    
    
