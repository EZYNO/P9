# PseudoCode Analyseur de plateforme de streaming
## Analyseur des utilisateurs
 - creer un compteur nombreTotalUtilisateur = 0
 - creer les references :
 utilisateurLePlusAgé = null
 utilisateurLeMoinsAgé = null
 utilisateurAyantLePlusVisioné = null
 - creer un accumulateur somme
 - parcourir le tableau utilisateurs
 - Pour chaque utilisateur : 
 1- ajouter 1 au compteur nombreTotalUtilisateur 
 2- ajouter utilisateur.age a somme 
 3- si utilisateurLePlusAgé === null ou utilisateur.age > utilisateurLePlusAgé.age :
utilisateurLePlusAgé = {
    nom: utilisateur.nom,
    age: utilisateur.age
}
 4-si utilisateurLeMoinsAgé === null ou utilisateur.age < utilisateurLeMoinsAgé.age :
utilisateurLeMoinsAgé = {
    nom: utilisateur.nom,
    age: utilisateur.age
}
5- Parcourir le tableau historique de l'utilisateur
  a- accumulé les minutes pour chaque contenu visionné de l'historique : minuteTotal
6-si utilisateurAyantLePlusVisioné === null ou minuteTotal > utilisateurAyantLePlusVisioné.totalMinutes:
utilisateurAyantLePlusVisioné = {
    nom: utilisateur.nom
    totalMinutes: minuteTotal
}
- calculer ageMoyen : sommme / nombreTotalUtilisateur
- retourner{
 nombreTotalUtilisateur,
 utilisateurLePlusAgé
  utilisateurLeMoinsAgé,
   utilisateurAyantLePlusVisioné, 
   ageMoyen
} 

## creations de nosContenus
- creer : nosContenu = {}

- parcourir utilisateurs
  - parcourir historique
      - si contenuId n'existe pas dans nosContenu 
         Creer:
               visionnage: 0,
               totalMinutes: 0,
               totalNote: 0
      - augmenter visionnage de 1
      - ajouter minutes a totalMinutes 
      - ajouter note a totalNote

- calculer nombreDeContenu = contenu.length
- retourner :
   nosContenu
   nombreDeContenu
## Enrichir les information : contenusDonnees
- parcourir contenus avec map 
- pour chaque contenu 
   - si contenu.id === nosContenu[contenu.id] :
       - fusionner les informations de contenu.id et de nosContenu[contenu.id]
   - obtenir pour un contenu un objet avec toute les satatistique issu de la fusion
- retourner un nouveau tableau : contenusDonnees issu du parcour et des modification de map sur contenus 

## Trouver les meilleurs et les pires
- creer 
       contenuMeilleurNoteMoyenne = null
       contenuPireNoteMoyenne = null 
       contenuPlusVisionner = null 
       contenuAyantLePlusDeMinute = null
- Parcourir le tableau contenuDonnees 
- pour chaque contenu 
    - calculer moyennenote : contenu.totalNote /  contenu.visionnage
    - attribuer le contenu de la moyenne note maximal a contenuMeilleurNoteMoyenne
    - attribuer le contenu de la moyenne note minimal a contenuPireNoteMoyenne
    - attribuer le contenu du visionnage maximal a contenuPlusVisionner
    - attribuer le contenu de la minute maximal a contenuAyantLePlusDeMinute 
- retourner :
            contenuMeilleurNoteMoyenne
            contenuPireNoteMoyenne  
            contenuPlusVisionner
            contenuAyantLePlusDeMinute

## Analyse des genres
- creer memoireGenre = {}
- genreLePlusRegarde = null
- parcourir contenusDonnees 
- pour chaque contenu :
    - si contenu.genre n'exsite pas dans memoireGenre:
            creer: 
                  nom: contenu.genre 
                  nombreContenu: 0
                  sommeMinute: 0
    - memoireGenre[contenu.genre].nombreContenu ++
    - memoireGenre[contenu.genre].sommeMinute += contenu.totalMinutes
- comparer les genre et attribuer celui qui a la sommeMinute maximal a genreLePlusRegarde
- retourner :
           memoireGenre
           genreLePlusRegarde

## analyse note 
- creer 
      nombreNoteCinq = 0
      sommeNoteGeneral = 0
      nombreNoteGeneral = 0

- parcourir utilisateurs
   - parcourir historique
      - nombreNoteGeneral ++
      - sommeNoteGeneral += note
      - si note === 5 : nombreNoteCinq++
- calculer la moyenneNoteGeneral = sommeNoteGeneral / nombreNoteGeneral

- retourner :
             nombreNoteCinq
             moyenneNoteGeneral
