console.log("Test console");
/*objets pour chaque type de pions?
    ex:
        let piece = [
            {
                couleur: white,
                type: pion,
                id: pion1,
                row: 2,
                top:2/8,
                col:A,
                left: 1/8,
                position: A2
            },
            {
                cou: pion,
                id: pleur: white,
                typeion2,
                position: B2
            }
        ]
  Drag and drop?
  hover vert pour deplacement autorisé
  hover rouge pour déplacement interdit
  hover bleu pour prise de piece possible
  Faire des essai local avec codepen
  vue? jade? react?
  Lier les déplacements(position finale-position initial)
  enregistrer les déplacements pour sortir un historique des coups joués + 
  possibilité de relance la partie coup par coup
*/
//generer l'échiquier
let boardContainer = document.getElementById('board_container');
let cell = document.querySelectorAll('.cell');
for (let i=1; i<65;i++){
    boardContainer.insertAdjacentHTML('afterbegin',
    '<li class="cell" id="cell'+i+'"></li>'
    );   
};
for (let i=0; i<8; i++){
    boardContainer.insertAdjacentHTML('afterend',
    '<img class="item" src="./images/whitepawn.png">'
    )
}
//générer les pièces