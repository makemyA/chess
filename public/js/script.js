console.log("Test console");
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
        '<li onclick="possibleMove(this)" onmouseenter= "move(this)" onmouseleave="move(this)" id='+item.name+item.id+' class="item '+item.position+'" style="grid-row:'+item.row+'; grid-column:'+item.column+';background:url(./images/whitepawn.png) no-repeat; background-size: cover;">'+item.position+'</li>'
        )
    )
})
let item= document.querySelectorAll('.item');
let possibleMove = (e)=>{
    alert(e.id);
}
let move= (e)=>{
    console.log(e.innerHTML);
    /* item.forEach(element => {
        element.classList.remove('select');
    }); */
    cell.forEach(element => {
        element.id==e.innerHTML?element.classList.toggle('select'): console.log('rien');
    })
    /* e.classList.toggle('select'); */
}
//générer les pièces