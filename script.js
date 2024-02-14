// function homeBtnClicked(){
//     const homeshow = document.getElementById('Home-section');
//     homeshow.classList.add('hidden');

//     const playGShow = document.getElementById('playground-section');
//     playGShow.classList.remove('hidden');
// }
function homeBtnClicked(){
    hideElementByID('Home-section')
    showElementById('playground-section')
    randomCreate()
}

function randomCreate(){
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const alphabet = alphabets.split('');

    const random = Math.random()*25;
    const index = Math.round(random);
    const alphabetKey = alphabet[index];
    const showElementsById = document.getElementById('show-elemens');
    showElementsById.innerText = alphabetKey;
    setBgColor(alphabetKey)
} 
