window.addEventListener('DOMContentLoaded', () => {
    
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');
    
    const playerTurn = document.querySelector('.display');

    let board = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;
    
    
    let secondtrun = 0;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';


    
    /* 5x5
        Indexes within the board
        [0] [1] [2] [3] [4]
        [5] [6] [7] [8] [9]
        [10] [11] [12] [13] [14]
        [15] [16] [17] [18] [19]
        [20] [21] [22] [23] [24]
    */

    
    const winningConditions = [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
        
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],
        
        [0, 6, 12, 18, 24],
        [4, 8, 12, 16, 20]
        
    ];
    
    
    
    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 11; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            
            const d = board[winCondition[3]];
            const e = board[winCondition[4]];
            
            if (a === '' || b === '' || c === '' || d === '' || e === '') {
                continue;
            }
            if (a === b && b === c && c === d && d === e) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
                announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
                isGameActive = false;
                return;
            }

        if (!board.includes(''))
            announce(TIE);
    }
    

    const announce = (type) => {
        switch(type){
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                
                
                playerTurn.style.fontSize = '0px';
                
                playerDisplay.style.fontSize = '0px';    
//                playerTurn.innerText = 'Game over'
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                playerTurn.style.fontSize = '0px';
//                playerTurn.innerHTML = 'Game over'
                
                playerDisplay.style.fontSize = '0px';                
                break;
            case TIE:
                announcer.innerHTML = 'No winning combination, <br> Player <span class="playerX">X</span> Won';
                playerTurn.style.fontSize = '0px';
                
                playerDisplay.style.fontSize = '0px';
        }
        announcer.classList.remove('hide');
    };
  
    
// Check the tile used does not contain X or O text; iow it's not been used yet
//If tile is empty it'll return true
    const isValidAction = (tile) => {   
        if (tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }

        return true;
    };


//    
    const updateBoard =  (index) => {
        board[index] = currentPlayer;
    }
    
    
    const changePlayer = () => {
        secondtrun = 0;
        playerDisplay.classList.remove(`player${currentPlayer}`); //remove previous player class (css)
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';        //get current player if current is 'X' then set it to 'O' else set it to 'X'
        playerDisplay.innerText = currentPlayer;                  //set current player inner text
        playerDisplay.classList.add(`player${currentPlayer}`);    //Add player X||O class (css)
    }
    

    const userAction = (tile, index) => {
        
        if(isValidAction(tile) && isGameActive) {//Check tile isn't used and game isn't over
            
            console.log(secondtrun);
            console.log(currentPlayer);
            console.log("spaceeeee");


            
            tile.innerText = currentPlayer;             //Set X or 0 text to tile
            tile.classList.add(`player${currentPlayer}`); //Add class player X||O (css)
            tile.classList.add('tile-back');              //Used Tile backgorund css
            updateBoard(index);
            
            handleResultValidation();
            
            if (currentPlayer == 'X'){
                    changePlayer();
            }
            
            
            if (currentPlayer == 'O'){
                secondtrun++;
                
                if(secondtrun > 2){
                    changePlayer();
                }
            }
            
            
        }
    }
    
    
//Restart game    
    const resetBoard = () => {
    
        board = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
        
        isGameActive = true;
        announcer.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }

        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
            tile.classList.remove('tile-back');
        });
        playerTurn.style.fontSize = '25px';
        playerDisplay.style.fontSize = '25px';
//        playerDisplay.classList.add(`player${currentPlayer}`);    //Add player X||O class (css)
    }
    
    
    
//Listen to evented in each tile   
    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    
//Call restart game function if button is clicked    
    resetButton.addEventListener('click', resetBoard);
    
});

    
    
window.addEventListener('DOMContentLoaded', () => {

            const tiles3 = Array.from(document.querySelectorAll('.tile3'));
            const playerDisplay3 = document.querySelector('.display-player3');
            const resetButton3 = document.querySelector('#reset3');
            const announcer3 = document.querySelector('.announcer3');

            const playerTurn3 = document.querySelector('.display3');

            let board3 = ['', '', '', '', '', '', '', '', ''];
            let currentPlayer3 = 'X';
            let isGameActive3 = true;


            let secondtrun3 = 0;

            const PLAYERX_WON3 = 'PLAYERX_WON';
            const PLAYERO_WON3 = 'PLAYERO_WON';
            const TIE3 = 'TIE';


            /* 3x3
                Indexes within the board
                [0] [1] [2]
                [3] [4] [5]
                [6] [7] [8]
            */

            //3x3 winning consditions
            const winningConditions3 = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];


            function handleResultValidation3() {
                let roundWon3 = false;
                for (let i = 0; i <= 7; i++) {
                    const winCondition3 = winningConditions3[i];
                    const a3 = board3[winCondition3[0]];
                    const b3 = board3[winCondition3[1]];
                    const c3 = board3[winCondition3[2]];

        //            const d3 = board[winCondition[3]];
        //            const e3 = board[winCondition[4]];

                    if (a3 === '' || b3 === '' || c3 === ''){
                        continue;
                    }
                    if (a3 === b3 && b3 === c3) {
                        roundWon3 = true;
                        break;
                    }
                }

                if (roundWon3) {
                        announce3(currentPlayer3 === 'X' ? PLAYERX_WON3 : PLAYERO_WON3);
                        isGameActive3 = false;
                        return;
                    }

                if (!board3.includes(''))
                    announce3(TIE3);
            }


            const announce3 = (type3) => {
                switch(type3){
                    case PLAYERO_WON3:
                        announcer3.innerHTML = 'Player <span class="playerO">O</span> Won';


                        playerTurn3.style.fontSize = '0px';

                        playerDisplay3.style.fontSize = '0px';    
        //                playerTurn.innerText = 'Game over'
                        break;
                    case PLAYERX_WON3:
                        announcer3.innerHTML = 'Player <span class="playerX">X</span> Won';
                        playerTurn3.style.fontSize = '0px';
        //                playerTurn.innerHTML = 'Game over'

                        playerDisplay3.style.fontSize = '0px';                
                        break;
                    case TIE3:
                        announcer3.innerHTML = 'Tie';
                        playerTurn3.style.fontSize = '0px';

                        playerDisplay3.style.fontSize = '0px';
                }
                announcer3.classList.remove('hide');
            };


        // Check the tile used does not contain X or O text; iow it's not been used yet
        //If tile is empty it'll return true
            const isValidAction3 = (tile3) => {   
                if (tile3.innerText === 'X' || tile3.innerText === 'O'){
                    return false;
                }

                return true;
            };


        //    
            const updateBoard3 =  (index3) => {
                board3[index3] = currentPlayer3;
            }


            const changePlayer3 = () => {
                secondtrun3 = 0;
                playerDisplay3.classList.remove(`player${currentPlayer3}`); //remove previous player class (css)
                currentPlayer3 = currentPlayer3 === 'X' ? 'O' : 'X';        //get current player if current is 'X' then set it to 'O' else set it to 'X'
                playerDisplay3.innerText = currentPlayer3;                  //set current player inner text
                playerDisplay3.classList.add(`player${currentPlayer3}`);    //Add player X||O class (css)
            }


            const userAction3 = (tile3, index3) => {

                if(isValidAction3(tile3) && isGameActive3) {//Check tile isn't used and game isn't over

                    console.log(secondtrun3);
                    console.log(currentPlayer3);
                    console.log("spaceeeee");



                    tile3.innerText = currentPlayer3;             //Set X or 0 text to tile
//                    tile3.classList.add(`player${currentPlayer3}`); //Add class player X||O (css)
                    
                    tile3.classList.add(`player${currentPlayer3}`); //Add class player X||O (css)
                    
                    tile3.classList.add('tile-back');              //Used Tile backgorund css
                    updateBoard3(index3);

                    handleResultValidation3();

                    changePlayer3();                 
                    

                }
            }


        //Restart game    
            const resetBoard3 = () => {

                board3 = ['', '', '', '', '', '', '', '', ''];

                isGameActive3 = true;
                announcer3.classList.add('hide');

                if (currentPlayer3 === 'O') {
                    changePlayer3();
                }

                tiles3.forEach(tile3 => {
                    tile3.innerText = '';
                    tile3.classList.remove('playerX');
                    tile3.classList.remove('playerO');
                    tile3.classList.remove('tile-back');
                });
                playerTurn3.style.fontSize = '25px';
                playerDisplay3.style.fontSize = '25px';
        //        playerDisplay.classList.add(`player${currentPlayer}`);    //Add player X||O class (css)
            }



        //Listen to evented in each tile   
            tiles3.forEach( (tile3, index3) => {
                tile3.addEventListener('click', () => userAction3(tile3, index3));
            });


        //Call restart game function if button is clicked    
            resetButton3.addEventListener('click', resetBoard3);    



}); 
    
