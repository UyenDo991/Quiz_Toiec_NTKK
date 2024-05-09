const slides = document.querySelectorAll('.picture');
var btnRnd10 = document.getElementById('checkrandom10');
var btnFull = document.getElementById('checkfull');
const _img_num = document.querySelectorAll('.img_num');
const row_id = document.querySelectorAll('.row_num');

let iNum = 0;
let min = 0;
let max = 10;
btnFull.checked = true;
btnRnd10.checked = false;
let i;
btnRnd10.addEventListener('click', function(){
    btnFull.checked = false;
    let rd_num = getRndInteger(min, max);
    showSlides_Content(rd_num);
    function showSlides_Content(rd_num) {
        let _number_from = Number(rd_num); 
        let _number_to = Number(rd_num) + 10;
        let _check_num = 0; 
        console.log('Random : ' + rd_num);
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        if (_number_to >= slides.length) 
        { 
            for (i = _number_from; i < slides.length; i++) {
                slides[i].style.display = "block";
            }
            _check_num = _number_to - slides.length; 
            for (i = 0; i < _check_num; i++) {
                slides[i].style.display = "block";
            }
        }
        else{
            for (i = _number_from; i < _number_to; i++) {
                slides[i].style.display = "block";
            }
        }
    }
    getRow();
});

///----------------------
getFull();
btnFull.addEventListener('click', function(){
    getFull();
    
});
function getFull() {
    btnRnd10.checked = false;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "block";
    }
    getRow()
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function getRow(){
    iNum = 0;
    for (i = 0; i < slides.length; i++) {
        row_id[i].innerHTML = "";
        if(slides[i].style.display == "block"){
            iNum = iNum + 1;
            row_id[i].innerHTML = 'Question ' + iNum;
        }
       
    }
}
