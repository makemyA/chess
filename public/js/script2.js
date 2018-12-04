let container= document.getElementById('board_container');

let cellTab= ['H1','G1','F1','E1','D1','C1','B1','A1','H2','G2','F2','E2','D2','C2','B2','A2',
  'H3','G3','F3','E3','D3','C3','B3','A3',
  'H4','G4','F4','E4','D4','C4','B4','A4',
  'H5','G5','F5','E5','D5','C5','B5','A5',
  'H6','G6','F6','E6','D6','C6','B6','A6',
  'H7','G7','F7','E7','D7','C7','B7','A7',
  'H8','G8','F8','E8','D8','C8','B8','A8'];

const pions = [
  {
    id: 0,
    name: 'pion',
    position: 'A2',
  },
  {
    id: 1,
    name: 'pion',
    position: 'B2',
  },
  {
    id: 2,
    name: 'pion',
    position: 'C2',
  },
  {
    id: 3,
    name: 'pion',
    position: 'D2',
  },
  {
    id: 4,
    name: 'pion',
    position: 'E2',
  },
  {
    id: 5,
    name: 'pion',
    position: 'F2',
  },
  {
    id: 6,
    name: 'pion',
    position: 'G2',
  },
  {
    id: 7,
    name: 'pion',
    position: 'H2',
  },
];
//show board
for (let i=0; i<cellTab.length;i++){
      container.insertAdjacentHTML('afterbegin', '<div class="cell" id="'+cellTab[i]+'"></div>');
};
//test nouveau moyen
let cell = document.querySelectorAll('.cell');
let initFunction= ()=>{
    for (let j=0; j<pions.length;j++){
        if(cellTab.includes(pions[j].position)){
            console.log(cell[j].className);
            let cellx= document.getElementById(pions[j].position);
            cellx.innerHTML="";
            cellx.classList.remove('pion');
            cellx.classList.add(pions[j].name);
            cellx.insertAdjacentHTML('afterbegin','<img src="./images/whitepawn.png" onclick="possibleMove(this)" class="piece">'+pions[j].name+'>'
            );
        }
    };
};

let clickPossibleMove = (e)=>{
    console.log('click on possible move');
    e.classList.add('piece');
    console.log(e.innerHTML);
    let possibleMoveList = document.querySelectorAll('.possibleMove'); 
    possibleMoveList.forEach((item)=>{
        item.classList.remove('possibleMove');
    });

    /* const xxx=  pions.map((item)=>{console.log(item)}); */
    for (let i=0; i<pions.length;i++){
        console.log(pions[i]);
        if(pions[i].position==e.innerHTML){ //e.innerHTML=id de la case du pion à l'origine
        let cellx= document.getElementById(pions[i].position);
            cellx.innerHTML='';      
        pions[i].position= e.parentNode.id; // e.parentNode.id= id de la case sur laquelle on clique, donc nouvelle position pour la pièce dans le tableau 
        initFunction();
        };
    };

};
let possibleMove = (e)=>{
    /* alert(e.parentNode.id);
    alert(e.parentNode.className); */
    let pieceName = e.parentNode.classList[1];
    switch(pieceName) {
        case 'pion':
            console.log('switch');
            cell.forEach((item)=>{
                let start = parseInt(e.parentNode.id.substr(1,2))+1;
                let end = parseInt(e.parentNode.id.substr(1,2))+2;
                let regPiece = new RegExp("["+e.parentNode.id.substr(0,1)+"]["+start+"-"+end+"]", "g");
                let test = regPiece.test(item.id);
                test?item.insertAdjacentHTML('afterbegin',
                '<div onclick="clickPossibleMove(this)" class="possibleMove pion">'+e.parentNode.id+'</div>'
                ):console.log("");
               
          });
          break;
        default: console.log('autre piece');  
        };
        /* initFunction(); */
};
initFunction();

    /*let clickonPossibleMove=(e)=>{
        console.log('click on possible move');
         possibleMoves.forEach((x)=>{x.classList.remove('possibleMove')});
        console.log('click'+pions[j].position);
        pions[j].position= item.id;
         cellx.innerHTML= cellx.id;
        item.innerHTML= pions[j].name;
        item.classList.add('piece');
        cellx.classList.remove('piece');
        cellx.classList.remove('active');
        console.log('position:'+pions[j].position); */
       
      //}
      /* item.addEventListener('click', clickonPossibleMove); */
 
   
    
//Show pieces

  /*  let possibleMove = document.querySelectorAll(".possibleMove");     
  possibleMove.forEach((item)=>{
    let clickonPossibleMove=()=>{
        possibleMove.forEach((x)=>{x.classList.remove('possibleMove')});
        console.log('click'+pions[j].position);
        pions[j].position= item.id;
         cellx.innerHTML= cellx.id;
        item.innerHTML= pions[j].name;
        item.classList.add('piece');
        cellx.classList.remove('piece');
        cellx.classList.remove('active');
        console.log('position:'+pions[j].position);
      };
    item.addEventListener('click', clickonPossibleMove);
  }); */

/*   cellx.removeEventListener('click', ()=>{}); */
     /*  }; */
     /*  cellx.addEventListener('click', clickonPiece); */  
/* };
};
}; */
/*  runSession(); */
/*  let containerChess= document.getElementById('container_chess');
containerChess.addEventListener('click', runSession);   */ 
console.log('elxfkh');
