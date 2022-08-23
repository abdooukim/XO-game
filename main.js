let gameContainer = document.querySelector('.game-container') ;
let gameHeader = document.querySelector('.game-header') ;
let player = document.getElementById('player') ;
let btns = document.querySelectorAll('.btns') ;

let role = 'X' ;
let play = true ;

btns.forEach(btn=> {
    btn.addEventListener('click' , function(){
        startGame(this) ;
        checkWinner() ;
    })
})



// function change roles 

function startGame(ele){
    if (ele.innerHTML === '' && play ){
        ele.textContent = role;
        if (role === 'X') {
            role = 'O' ;
            gameContainer.classList.remove('role-x') ;
            gameContainer.classList.add('role-o') ;
        }
        else {
            role = 'X' ;
            gameContainer.classList.remove('role-o') ;
            gameContainer.classList.add('role-x') ;
        }
        player.textContent = role ;
        }
}

// check the winner 

function checkWinner(){
    let box = [] ;
    for (let i = 0 ; i < 9 ; i++ ){
        box[i + 1] = btns[i] ;
    }

    if (box[1].innerHTML === box[2].innerHTML && box[2].innerHTML === box[3].innerHTML && box[3].innerHTML != ""){
        theWinnerIs(box[1] , box[2] , box[3]) ;
    }

    else if (box[4].innerHTML === box[5].innerHTML && box[5].innerHTML === box[6].innerHTML && box[6].innerHTML != ""){
        theWinnerIs(box[4] , box[5] , box[6]) ;
    }

    else if (box[7].innerHTML === box[8].innerHTML && box[8].innerHTML === box[9].innerHTML && box[9].innerHTML != ""){
        theWinnerIs(box[7] , box[8] , box[9]) ;
    }

    else if (box[1].innerHTML === box[4].innerHTML && box[4].innerHTML === box[7].innerHTML && box[7].innerHTML != ""){
        theWinnerIs(box[1] , box[4] , box[7]) ;
    }

    else if (box[2].innerHTML === box[5].innerHTML && box[5].innerHTML === box[8].innerHTML && box[8].innerHTML != ""){
        theWinnerIs(box[2] , box[5] , box[8]) ;
    }

    else if (box[3].innerHTML === box[6].innerHTML && box[6].innerHTML === box[9].innerHTML && box[9].innerHTML != ""){
        theWinnerIs(box[3] , box[6] , box[9]) ;
    }

    else if (box[1].innerHTML === box[5].innerHTML && box[5].innerHTML === box[9].innerHTML && box[9].innerHTML != ""){
        theWinnerIs(box[1] , box[5] , box[9]) ;
    }

    else if (box[3].innerHTML === box[5].innerHTML && box[5].innerHTML === box[7].innerHTML && box[7].innerHTML != ""){
        theWinnerIs(box[3] , box[5] , box[7]) ;
    }
    
}

// who win ?

function theWinnerIs(box1 , box2 , box3){
    gameHeader.innerHTML = `Finished ! the winner is : Mister (${box1.innerHTML})` ;
    gameHeader.classList.add("dark") ;
    box1.classList.add("dark");
    box2.classList.add("dark");
    box3.classList.add("dark");
    play = false ;
    setTimeout( function(){
        playAgain(box1 , box2 , box3) ;
    } , 5000) ;
}

// finish the game and restart

function playAgain(box1 , box2 , box3){
    document.location.reload() ;
}