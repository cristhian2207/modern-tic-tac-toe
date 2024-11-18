let cells = document.getElementsByClassName("cells");
let isPlayerOne = true;

for(let i=0; i<cells.length; i++){
    cells[i].addEventListener('click', userMove);
}

function userMove(e) {
    let cellValue = e.target.innerHTML;
    if(!cellValue.length){
        e.target.innerHTML = isPlayerOne ? 'X' : 'O';
        if(isPlayerOne){
            e.target.classList.add('celdaX')
            e.target.classList.remove('celdaO')
        }
        else{
            e.target.classList.add('celdaO')    
            e.target.classList.remove('celdaX')
        }
        isPlayerOne = !isPlayerOne;

        checkLine(0, 1, 2);
        checkLine(3, 4, 5);
        checkLine(6, 7, 8);
        checkLine(0, 3, 6);
        checkLine(1, 4, 7);
        checkLine(2, 5, 8);
        checkLine(0, 4, 8);
        checkLine(6, 4, 2);
    } 
}

function checkLine(c1, c2, c3){
    if(
        cells[c1].innerHTML.length && 
        cells[c1].innerHTML == cells[c2].innerHTML &&
        cells[c2].innerHTML == cells[c3].innerHTML
    ){
        highLightWinnerCell(c1, c2, c3);
        showWinner(cells[c1].innerHTML);
    }
}

function highLightWinnerCell(c1, c2, c3){
    cells[c1].classList.add('celdaGanadora')
    cells[c2].classList.add('celdaGanadora')
    cells[c3].classList.add('celdaGanadora')
}

function showWinner(player){
    document.querySelector('#result').innerHTML = player + " wins";
    for(let i = 0; i < cells.length; i++){
        cells[i].removeEventListener('click', userMove)
    }
}