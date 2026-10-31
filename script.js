/* pseudoCode Achitecture
analyseurDePlateformeStreaming (){
analyserutilisateur(){
1-calculer le nombre total d'utilisateur
2-calculer l'age moyenne de chaque utilisateur
3- Identifier l'utilisateur le plus agé
4- identifier l'utilisateur le moins agé
5- identifier lútilisateur qui a le plus de minnute a son compteur

return{
1,2,3,4,5
}
}

creationDeNosContenus(){
1-creer une memoire nosContenus 
2-ajouter a la memoire les information necessaire pour chaque contenu
3- calculer le nombre de contenu
return {
1,3
}
}
 
creationDeContenusDonnees (){
1-creer un tableau contenuDonnees qui contient la fusion des informations de nosContenus et du tableau contenus
returns  contenuDonnees
}

analyserContenu(){
-utiliser contenuDonnees 
1- calculer les notesMoyenne pour chaque contenu
2-identifier le contenu avec la meilleure moyenne note
3- identifier le contenu avec la pire note
4- identifier le contenu le plus visionner 
5- identifier le contenu avec le plus de minute regader 

return{
2,3,4,5
}
}

analyserGenre(){
-utiliser contenuDonnees 
1-calculer nombre de contenu par genre 
2- calculer le total des minutes regarder par genre
3- identifier le genre le plus regader

return{
1,2,3
}
}

analyserNote(){
1-calculer la moyenne generale des notes 
2- calculer le nombre de note egale a 5

return{
1,2}
}
}

*/


const utilisateurs = [
    {
        id: 1,
        nom: "Alice",
        age: 22,
        historique: [
            { contenuId: 101, minutes: 120, note: 5 },
            { contenuId: 102, minutes: 90, note: 4 },
            { contenuId: 103, minutes: 60, note: 5 }
        ]
    },
    {
        id: 2,
        nom: "Bob",
        age: 25,
        historique: [
            { contenuId: 101, minutes: 60, note: 3 },
            { contenuId: 104, minutes: 150, note: 5 }
        ]
    },
    {
        id: 3,
        nom: "David",
        age: 30,
        historique: [
            { contenuId: 102, minutes: 180, note: 5 },
            { contenuId: 104, minutes: 120, note: 4 },
            { contenuId: 105, minutes: 90, note: 3 }
        ]
    },
    {
        id: 4,
        nom: "Emma",
        age: 19,
        historique: [
            { contenuId: 103, minutes: 100, note: 4 },
            { contenuId: 105, minutes: 45, note: 5 }
        ]
    }
];

const contenus = [
    {
        id: 101,
        titre: "Inception",
        genre: "Science-fiction",
        duree: 148
    },
    {
        id: 102,
        titre: "Interstellar",
        genre: "Science-fiction",
        duree: 169
    },
    {
        id: 103,
        titre: "The Dark Knight",
        genre: "Action",
        duree: 152
    },
    {
        id: 104,
        titre: "Parasite",
        genre: "Thriller",
        duree: 132
    },
    {
        id: 105,
        titre: "Coco",
        genre: "Animation",
        duree: 105
    }
];

const analyserUtilisateur = (utilisateurs)=>{

 let nombreTotalUtilisateur = 0;
 let sommeAge = 0;
 let utilisateurLePlusAgé = null;
 let utilisateurLeMoinsAgé = null;
 let utilisateurAvecLePlusDeMinutes = null;

 utilisateurs.forEach(utilisateur => {
    nombreTotalUtilisateur ++;
    sommeAge += utilisateur.age ;
   
    if (utilisateurLePlusAgé === null || utilisateur.age > utilisateurLePlusAgé.age){
     utilisateurLePlusAgé = {
     nom: utilisateur.nom,
     age: utilisateur.age,
     }
   };

   if (utilisateurLeMoinsAgé === null || utilisateur.age < utilisateurLeMoinsAgé.age) {
     utilisateurLeMoinsAgé = {
        nom: utilisateur.nom,
        age: utilisateur.age
     }
   };
   
   const utilisateurMinute = utilisateur.historique.reduce((acc , film)=> acc += film.minutes ,0 );
   if (utilisateurAvecLePlusDeMinutes === null || utilisateurMinute > utilisateurAvecLePlusDeMinutes.totalMinutes ) {
     utilisateurAvecLePlusDeMinutes = {
        nom: utilisateur.nom,
        totalMinutes: utilisateurMinute
     }
   };

 });

 const ageMoyen = sommeAge / nombreTotalUtilisateur ;

 return{
    nombreTotalUtilisateur,
    ageMoyen,
    utilisateurAvecLePlusDeMinutes,
    utilisateurLeMoinsAgé,
    utilisateurLePlusAgé
 }

}

const creerNosContenus = (utilisateurs)=>{
     let nosContenus = {};

    utilisateurs.forEach(utilisateur => {
        utilisateur.historique.forEach( film => {
            if (!nosContenus[film.contenuId]) {
             nosContenus[film.contenuId] = {
                visionnage: 0,
                totalMinutes: 0,
                totalNotes:0
             }
            }

            nosContenus[film.contenuId].visionnage++;
            nosContenus[film.contenuId].totalMinutes += film.minutes;
            nosContenus[film.contenuId].totalNotes += film.note;

        });
        
    });

    return nosContenus
      
}

const creerContenuDonnees = (nosContenus , contenus)=>{
    const contenusDonnees = contenus.map((contenu)=>{
        const nosContenuStat = nosContenus[contenu.id];
        return Object.assign({}, contenu , nosContenuStat)
    });

    return contenusDonnees
}

const analyserContenus = (contenusDonnees)=>{
    let contenuAyantLaMeilleureNoteMoyenne = null;
    let contenuAyantLaPireNoteMoyenne = null;
    let contenuLePlusVisionné = null;
    let contenuAyantLePlusDeMinute = null 

    contenusDonnees.forEach(contenu => {
        const noteMoyenne = contenu.totalNotes / contenu.visionnage;

        if (contenuAyantLaMeilleureNoteMoyenne === null || noteMoyenne > contenuAyantLaMeilleureNoteMoyenne.note) {
            contenuAyantLaMeilleureNoteMoyenne = {
                nom: contenu.titre,
                note: noteMoyenne
            }
        }

        if (contenuAyantLaPireNoteMoyenne === null || noteMoyenne < contenuAyantLaPireNoteMoyenne.note) {
            contenuAyantLaPireNoteMoyenne = {
                nom: contenu.titre,
                note: noteMoyenne
            }
        }

        if (contenuAyantLePlusDeMinute === null || contenu.totalMinutes > contenuAyantLePlusDeMinute.minutes) {
           contenuAyantLePlusDeMinute = {
                nom: contenu.titre,
                minutes: contenu.totalMinutes
           } 
        }

        if (contenuLePlusVisionné === null || contenu.visionnage > contenuLePlusVisionné.nombreVisionnage) {
           contenuLePlusVisionné = {
                nom: contenu.titre,
                nombreVisionnage: contenu.visionnage
           } 
        }

    });

    const nombreTotalContenus = contenusDonnees.length;

    return{
        contenuAyantLaMeilleureNoteMoyenne,
        contenuAyantLaPireNoteMoyenne,
        contenuAyantLePlusDeMinute,
        contenuLePlusVisionné,
        nombreTotalContenus
    }
}

const analyserGenres = (contenusDonnees)=>{
    let memoireGenre = {};
    let genreLePlusRegarder = null;

    contenusDonnees.forEach(contenu => {
        if(!memoireGenre[contenu.genre]){
            memoireGenre[contenu.genre]={
                nom: contenu.genre,
                nombreContenus: 0,
                nombreMinutes: 0
            }
        }

        memoireGenre[contenu.genre].nombreContenus++;
        memoireGenre[contenu.genre].nombreMinutes += contenu.totalMinutes

        if (genreLePlusRegarder === null || memoireGenre[contenu.genre].nombreMinutes > genreLePlusRegarder.minutes ) {
            genreLePlusRegarder = {
                nom: memoireGenre[contenu.genre].nom,
                minutes: memoireGenre[contenu.genre].nombreMinutes
            }
        }

    });

    return{
         memoireGenre,
         genreLePlusRegarder
    }
}

const analyserNote = (utilisateurs)=>{
    let nombreNoteDeCinq = 0;
    let nombreDeNote = 0;

    const totalNoteGeneral = utilisateurs.reduce((acc , utilisateur) =>{
        utilisateur.historique.forEach(films => {
            nombreDeNote ++;
            acc += films.note;

            if ( films.note === 5) {
                nombreNoteDeCinq++;
            }
        });

        return acc
    }, 0)

    const moyenneGeneralNote = totalNoteGeneral / nombreDeNote ;

    return{
        moyenneGeneralNote,
        nombreNoteDeCinq
    }
}

function analyseurDePlateformeStreaming(utilisateurs,contenus) {
    const analyseUtilisateurs = analyserUtilisateur(utilisateurs);
    const nosContenusCreer = creerNosContenus(utilisateurs);
    const contenuDonneesCreer = creerContenuDonnees(nosContenusCreer, contenus);
    const analyseContenus = analyserContenus(contenuDonneesCreer);
    const analyseGenres = analyserGenres(contenuDonneesCreer);
    const analyseNote = analyserNote(utilisateurs);

    return{ 
      nombreTotalUtilisateur: analyseUtilisateurs.nombreTotalUtilisateur,
      ageMoyen: analyseUtilisateurs.ageMoyen, 
      utilisateurAvecLePlusDeMinutes: analyseUtilisateurs.utilisateurAvecLePlusDeMinutes, 
      utilisateurLeMoinsAgé: analyseUtilisateurs.utilisateurLeMoinsAgé, 
      utilisateurLePlusAgé: analyseUtilisateurs.utilisateurLePlusAgé, 
      nombreTotalContenus: analyseContenus.nombreTotalContenus, 
      contenuAyantLaMeilleureNoteMoyenne: analyseContenus.contenuAyantLaMeilleureNoteMoyenne,
      contenuAyantLaPireNoteMoyenne: analyseContenus.contenuAyantLaPireNoteMoyenne, 
      contenuAyantLePlusDeMinute: analyseContenus.contenuAyantLePlusDeMinute, 
      contenuLePlusVisionné: analyseContenus.contenuLePlusVisionné, 
      memoireGenre: analyseGenres.memoireGenre, 
      genreLePlusRegarder: analyseGenres.genreLePlusRegarder, 
      moyenneGeneralNote: analyseNote.moyenneGeneralNote, 
      nombreNoteDeCinq: analyseNote.nombreNoteDeCinq, 
    }
}

console.log(analyseurDePlateformeStreaming(utilisateurs,contenus));
 