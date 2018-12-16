let container= document.getElementById('board_container');
let cellTab= ['H1','G1','F1','E1','D1','C1','B1','A1','H2','G2','F2','E2','D2','C2','B2','A2',
  'H3','G3','F3','E3','D3','C3','B3','A3',
  'H4','G4','F4','E4','D4','C4','B4','A4',
  'H5','G5','F5','E5','D5','C5','B5','A5',
  'H6','G6','F6','E6','D6','C6','B6','A6',
  'H7','G7','F7','E7','D7','C7','B7','A7',
  'H8','G8','F8','E8','D8','C8','B8','A8'];
//Generer les cellules par des x y
const pions = [
  {
    id: 0,
    name: 'pion',
    position: 'A2',
    src: './images/whitepawn.png'
  },
  {
    id: 1,
    name: 'pion',
    position: 'B2',
    src: './images/whitepawn.png'
  },
  {
    id: 2,
    name: 'pion',
    position: 'C2',
    src: './images/whitepawn.png'
  },
  {
    id: 3,
    name: 'pion',
    position: 'D2',
    src: './images/whitepawn.png'
  },
  {
    id: 4,
    name: 'pion',
    position: 'E2',
    src: './images/whitepawn.png'
  },
  {
    id: 5,
    name: 'pion',
    position: 'F2',
    src: './images/whitepawn.png'
  },
  {
    id: 6,
    name: 'pion',
    position: 'G2',
    src: './images/whitepawn.png'
  },
  {
    id: 7,
    name: 'pion',
    position: 'H2',
    src: './images/whitepawn.png'
  },
  {
    id: 8,
    name: 'castle',
    position: 'A1',
    src: './images/castle.png'
  },
  {
    id: 9,
    name: 'castle',
    position: 'H1',
    src: './images/castle.png'
  },
  {
    id: 10,
    name: 'knight',
    position: 'C1',
    src: './images/knight.png'
  },
  {
    id: 11,
    name: 'knight',
    position: 'F1',
    src: './images/knight.png'
  },
  {
    id: 12,
    name: 'bishop',
    position: 'B1',
    src: './images/bishop.png'
  },
  {
    id: 13,
    name: 'bishop',
    position: 'G1',
    src: './images/bishop.png'
  },
  {
    id: 14,
    name: 'queen',
    position: 'D1',
    src: './images/queen.png'
  },
  {
    id: 15,
    name: 'king',
    position: 'E1',
    src: './images/king.png'
  },

];
//show board
for (let i=0; i<cellTab.length;i++){
      container.insertAdjacentHTML('afterbegin', '<div  draggable="true" class="cell" id="'+cellTab[i]+'"></div>');
};
let cell = document.querySelectorAll('.cell');
let initFunction= ()=>{
    for (let j=0; j<pions.length;j++){
        if(cellTab.includes(pions[j].position)){
            console.log(cell[j].className);
            let cellx= document.getElementById(pions[j].position);
            cellx.innerHTML="";
            /* cellx.classList.remove('pion');
            cellx.classList.remove('castle'); */
            cellx.classList.add(pions[j].name);
            cellx.insertAdjacentHTML('afterbegin','<img src="'+pions[j].src+'" onclick="possibleMove(this)" class="piece" alt="'+pions[j].name+'">'
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
        item.innerHTML=e.innerHTML; //il faut garder l'inner html, il sert de base pour modifier le tableau des positions
    });
    for (let i=0; i<pions.length;i++){
        if(pions[i].position==e.innerHTML){ //e.innerHTML=id de la case du pion à l'origine
        let cellx= document.getElementById(pions[i].position);
            cellx.innerHTML='';
            cellx.classList='cell'; //on rend à la case d'ou vient le pion une classe de base     
        pions[i].position= e.parentNode.id; // e.parentNode.id= id de la case sur laquelle on clique, donc nouvelle position pour la pièce dans le tableau 
        console.log(pions[i]);
        };
    };
    initFunction();
};
let possibleMove = (e)=>{
  let possibleMoveList = document.querySelectorAll('.possibleMove'); 
    possibleMoveList.forEach((item)=>{
        item.classList.remove('possibleMove');
        item.innerHTML="";
    });
    let pieceName = e.parentNode.classList[1];
    /* e.hasChildNodes()?e.removeChild(e.childNodes[0]):""; */
    switch(pieceName) {
        case 'pion':
            console.log('switch');
          cell.forEach((item)=>{
            let start = parseInt(e.parentNode.id.substr(1,2))+1;
            let end = parseInt(e.parentNode.id.substr(1,2))+2;
            let regPiece = new RegExp("["+e.parentNode.id.substr(0,1)+"]["+start+"-"+end+"]", "g");
            let test = regPiece.test(item.id);
            if (test==true&&item.classList.length<2){
                item.hasChildNodes()?item.removeChild(item.childNodes[0]):"";
                item.insertAdjacentHTML('afterbegin',
                '<div onclick="clickPossibleMove(this)" class="possibleMove">'+e.parentNode.id+'</div>'
                );
            }else {
              console.log("xxxx");
            }
           
          });
          break;
        case 'castle':
          cell.forEach((item)=> {
            let startColumn= 'A';
            let endColumn = 'H';
            let startRow = 1;
            let endRow = 8;
            let regPiece = new RegExp("["+startColumn+"-"+endColumn+"]["+e.parentNode.id.substr(1,2)+"]", "g");
            let regPiece2 = new RegExp("["+e.parentNode.id.substr(0,1)+"]["+startRow+"-"+endRow+"]", "g");
            let test = regPiece.test(item.id);
            let test2= regPiece2.test(item.id);
            if ((test2==true||test==true)&&item.classList.length<2){
                item.hasChildNodes()?item.removeChild(item.childNodes[0]):"";
                item.insertAdjacentHTML('afterbegin',
              '<div onclick="clickPossibleMove(this)" class="possibleMove">'+e.parentNode.id+'</div>'
              );
            }else {
              console.log("xxxx");
            }           
          });
          break;
        case 'knight':
        cell.forEach((item)=> {
          let rangeColumn= ['A','B','C','D','E','F','G','H'];
          let sentence = "ABCDEFGH";
          let indexCol1= rangeColumn.indexOf(e.parentNode.id.substr(0,1))+1;
          let indexCol2= rangeColumn.indexOf(e.parentNode.id.substr(0,1))-1;
          let indexRow1 = parseInt(e.parentNode.id.substr(1,2))+2;
          let indexRow2 = parseInt(e.parentNode.id.substr(1,2))-2;
          let regPiece = new RegExp("["+rangeColumn[indexCol2]+rangeColumn[indexCol1]+"]["+indexRow2+indexRow1+"]", "g");
          /* let regPiece2 = new RegExp("[BD][3]", "g"); */
          let test = regPiece.test(item.id);
          /* let test2= regPiece2.test(item.id); */
          if (test==true&&item.classList.length<2){
              item.hasChildNodes()?item.removeChild(item.childNodes[0]):"";
              item.insertAdjacentHTML('afterbegin',
            '<div onclick="clickPossibleMove(this)" class="possibleMove">'+e.parentNode.id+'</div>'
            );
          }else {
            console.log("xxxx");
          }           
        });
        break;
        case 'bishop':
            let rangeColumn= ['A','B','C','D','E','F','G','H'];
            let rangeRow= [1,2,3,4,5,6,7,8];
           /*  let indexCol1= rangeColumn.indexOf(e.parentNode.id.substr(0,1))+1; */
            let indexCol2= rangeColumn.indexOf(e.parentNode.id.substr(0,1));
            let indexCol= indexCol2<1?1:indexCol2;
            /* let indexRow1 = parseInt(e.parentNode.id.substr(1,2))+1;  */
            let indexRow2 = parseInt(e.parentNode.id.substr(1,2));
            let indexRow= indexRow2<1?1:indexRow2;
            let regEx2 = ()=>{
              for (let indexCol; indexCol<8;indexCol++){
                '['+rangeColumn[indexCol+1]+']['+rangeRow[indexRow+1]+']+';
              }
            };
          cell.forEach((item)=> {
            let regBishop = new RegExp("["+rangeColumn[indexCol2+1]+"]["+rangeRow[indexRow2]+"]|["+rangeColumn[indexCol+2]+"]["+rangeRow[indexRow2+1]+"]|["+rangeColumn[indexCol2+3]+"]["+rangeRow[indexRow2+2]+"]|["+rangeColumn[indexCol2+4]+"]["+rangeRow[indexRow2+3]+"]|["+rangeColumn[indexCol2+5]+"]["+rangeRow[indexRow2+4]+"]|["+rangeColumn[indexCol2+6]+"]["+rangeRow[indexRow2+5]+"]|["+rangeColumn[indexCol2+7]+"]["+rangeRow[indexRow2+6]+"]");
            let regBishop2 = new RegExp("["+rangeColumn[indexCol2-1]+"]["+rangeRow[indexRow2-2]+"]|["+rangeColumn[indexCol-2]+"]["+rangeRow[indexRow2-3]+"]|["+rangeColumn[indexCol2-3]+"]["+rangeRow[indexRow2-4]+"]|["+rangeColumn[indexCol2-4]+"]["+rangeRow[indexRow2-5]+"]|["+rangeColumn[indexCol2-5]+"]["+rangeRow[indexRow2-6]+"]|["+rangeColumn[indexCol2-6]+"]["+rangeRow[indexRow2-7]+"]|["+rangeColumn[indexCol2-7]+"]["+rangeRow[indexRow2-8]+"]");
            let regBishop3 = new RegExp("["+rangeColumn[indexCol2-1]+"]["+rangeRow[indexRow2]+"]|["+rangeColumn[indexCol-2]+"]["+rangeRow[indexRow2+1]+"]|["+rangeColumn[indexCol2-3]+"]["+rangeRow[indexRow2+2]+"]|["+rangeColumn[indexCol2-4]+"]["+rangeRow[indexRow2+3]+"]|["+rangeColumn[indexCol2-5]+"]["+rangeRow[indexRow2+4]+"]|["+rangeColumn[indexCol2-6]+"]["+rangeRow[indexRow2+5]+"]|["+rangeColumn[indexCol2-7]+"]["+rangeRow[indexRow2+6]+"]");
            let regBishop4 = new RegExp("["+rangeColumn[indexCol2+1]+"]["+rangeRow[indexRow2-2]+"]|["+rangeColumn[indexCol+2]+"]["+rangeRow[indexRow2-3]+"]|["+rangeColumn[indexCol2+3]+"]["+rangeRow[indexRow2-4]+"]|["+rangeColumn[indexCol2+4]+"]["+rangeRow[indexRow2-5]+"]|["+rangeColumn[indexCol2+5]+"]["+rangeRow[indexRow2-6]+"]|["+rangeColumn[indexCol2+6]+"]["+rangeRow[indexRow2-7]+"]|["+rangeColumn[indexCol2+7]+"]["+rangeRow[indexRow2-8]+"]");
           /*  let regPiece = new RegExp("[A-"+rangeColumn[indexCol2]+"][1-"+rangeRow[indexRow2]+"]", "g");
            let regPiece2 = new RegExp("["+rangeColumn[indexCol1]+"-H']["+rangeRow[indexRow1]+"-8]", "g"); */
            let test = regBishop.test(item.id);
            let test2 = regBishop2.test(item.id);
            let test3 = regBishop3.test(item.id);
            let test4 = regBishop4.test(item.id);
            if ((test==true||test2==true||test3==true||test4==true)&&item.classList.length<2){
                item.hasChildNodes()?item.removeChild(item.childNodes[0]):"";
                item.insertAdjacentHTML('afterbegin',
              '<div onclick="clickPossibleMove(this)" class="possibleMove">'+e.parentNode.id+'</div>'
              );
            }else {
              console.log("xxxx");
            }           
          });
          break;
        default: console.log('autre piece');  
        };
};
initFunction();
console.log('elxfkh');
