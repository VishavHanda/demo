
const allCont = document.querySelector('.all-Cat');
const allCathovercon = document.querySelector('.all-Cat-hover-con');
const fruits = document.querySelector('.fruits');

let isVisible = false;

function showAllCat(){
    if(isVisible){
        allCathovercon.style.display = 'none';
    } else{
        allCathovercon.style.display = 'flex';
    }

    isVisible = !isVisible;
}

allCont.addEventListener('click', showAllCat);


function showPopup(){
    document.getElementById('offer-con').style.display = 'flex'
}
 
function closePopup(){
    document.getElementById('offer-con').style.display = 'none'
}

setTimeout(showPopup, 5000);
