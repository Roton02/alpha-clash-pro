function hideElementByID(element){
    const elements = document.getElementById(element);
    elements.classList.add('hidden');
    // console.log('mamu distarb kn dicce ');
}
function showElementById(element){
 const elements = document.getElementById(element);
 elements.classList.remove('hidden')
}
 function setBgColor(element){
    const elements = document.getElementById(element);
    elements.classList.add('bg-pink-300')
 }
