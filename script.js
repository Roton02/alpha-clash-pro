function keyPressByPlayer(event){
    playerPreshed = event.key; 
   console.log(playerPreshed);
   if(playerPreshed==='Escape'){
    gameOver();
   }
    playerPreshedValue = playerPreshed.toLocaleLowerCase();
    // console.log(playerPreshedValue);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const expectedElement = currentAlphabetElement.innerText;
    const expectedValue = expectedElement.toLocaleLowerCase()
    // console.log(expectedValue);
    if(playerPreshedValue === expectedValue){
        // console.log( 'you got a point'); 
       const values=  getElementById('updateScore')
       const scoreValue = values + 1;
       setElementById('updateScore', scoreValue)
               
        // const updatedScroreText = updatedScrore.innerText;
        // const scrore = parseInt(updatedScroreText);
        // const finalScore = scrore+1;
        // updatedScrore.innerText = finalScore;
        // looping game
        removeBackgroundColorById(expectedValue)
        continueGame()
    }else{
        // console.log('you lost point');
        // const updateLifeLine = document.getElementById('life-line');
        // const lifelines = updateLifeLine.innerText
        // const lifeLine = parseInt(lifelines);
        // const lifeReduce = lifeLine - 1 ;
        // updateLifeLine.innerText = lifeReduce
        const lifeLine = getElementById('life-line')
        const lifeLineValue = lifeLine - 1;
        setElementById('life-line',lifeLineValue)

        if(lifeLine === 0){
           gameOver()
        }
    }
}

document.addEventListener('keyup', keyPressByPlayer)

function continueGame(){
    // step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);
    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    hideElementById('Final-Scrore')
    showElementById('play-ground');
    setElementById('life-line',5);
    setElementById('updateScore',0);
    continueGame();
}
function gameOver(){
    hideElementById('play-ground')
    showElementById('Final-Scrore')
    const lastScore = getElementById('updateScore');
    setElementById('Show-score', lastScore);
    const removeBg = getElementTextById('current-alphabet');
    removeBackgroundColorById(removeBg);
    
    
}