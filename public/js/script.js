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
let tab = ['A1','B1','C1','D1','E1','F1','G1','H1',
            'A2','B2','C2','D2','E2','F2','G2','H2'];
let boardContainer = document.getElementById('board_container');
for (let i=0; i<64;i++){
    boardContainer.insertAdjacentHTML('beforeend',
    '<li onclick="hover(this)"class="cell" id='+tab[i]+'></li>'
    );   
};
let hover = (e)=>{
    console.log(e.id);
}
//Tableau des pieces
const items = [
    {
      id: 0,
      name: 'pion',
      url: '/images/whitepawn.png',
      position: 'A1',
      row: '1 / 2',
      column: '1 / 2',
    },
    {
      id: 1,
      name: 'pion',
      position: 'B1',
      row: '1 / 2',
      column: '2 / 3',
    },
    {
      id: 2,
      name: 'pion',
      position: 'C1',
      row: '1 / 2',
      column: '3 / 4',
    },
    {
      id: 3,
      name: 'pion',
      position: 'D1',
      row: '1 / 2',
      column: '4 / 5',
    },
    {
      id: 4,
      name: 'pion',
      position: 'E1',
      row: '1 / 2',
      column: '5 / 6',
    },
    {
      id: 5,
      name: 'pion',
      position: 'F1',
      row: '1 / 2',
      column: '6 / 7',
    },
    {
      id: 6,
      name: 'pion',
      position: 'G1',
      row: '1 / 2',
      column: '7 / 8',
    },
    {
      id: 7,
      name: 'pion',
      position: 'H1',
      row: '1 / 2',
      column: '8 / 9',
    },
  ];
//positionnement des soldats blancs
let cell = document.querySelectorAll('.cell');
let itemsContainer = document.getElementById('items_container');
let itemsRender = items.map((item)=>{
    return(
        itemsContainer.insertAdjacentHTML('afterbegin',
        '<li onmouseenter= "move(this)" onmouseleave="move(this)" id='+item.name+item.id+' class="item '+item.position+'" style="grid-row:'+item.row+'; grid-column:'+item.column+';background:url(./images/whitepawn.png) no-repeat; background-size: cover;">'+item.position+'</li>'
        )
    )
})
/* cell.forEach((item, index)=>{
    console.log('item');
    item.insertAdjacentHTML('afterbegin',
    '<img onclick="move(this)" id="pion'+(index+1)+'" class="item" src="./images/whitepawn.png">'
    )
}); */
let item= document.querySelectorAll('.item');
let move= (e)=>{
    console.log(e.innerHTML);
    /* item.forEach(element => {
        element.classList.remove('select');
    }); */
    cell.forEach(element => {
        element.id==e.innerHTML?element.classList.toggle('select'): console.log('rien');
    })
    e.classList.toggle('select');
}
//générer les pièces