const slides = document.querySelectorAll('.picture');
var btnRnd = document.getElementById('checkrandom');
var btnFull = document.getElementById('checkfull');
const _img_num = document.querySelectorAll('.img_num');

let min = 0;
let max = 50;
btnFull.checked = true;
btnRnd.checked = false;
let i;
let iNumImg = 0;
btnRnd.addEventListener('click', function(){
    btnFull.checked = false;
    let rd_num = getRndInteger(min, max);
    showSlides_Content_6_M(rd_num);
    function showSlides_Content_6_M(rd_num) {
        let _number_from = Number(rd_num); 
        let _number_to = Number(rd_num) + 20; 
        let _check_num = 0; 
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            _img_num[i].style.display = "none";
        }
        if (_number_to >= slides.length) 
        { 
            for (i = _number_from; i < slides.length; i++) {
                slides[i].style.display = "block";
                _img_num[i].style.display = "block";
            }
            _check_num = _number_to - slides.length; 
            for (i = 0; i < _check_num; i++) {
                slides[i].style.display = "block";
                _img_num[i].style.display = "block";
            }
        }
        else{
            for (i = _number_from; i < _number_to; i++) {
                slides[i].style.display = "block";
                _img_num[i].style.display = "block";
            }
        }
    }
    status_btn = "Random";
    rowNumImg(20);
});
///----------------------
getFull();
btnFull.addEventListener('click', function(){
    getFull();
    
});
function getFull() {
    btnRnd.checked = false;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "block";
        _img_num[i].style.display = "block";
    }
    sum = 50;
    rowNumImg(sum);
}
rowNumImg(50);
function rowNumImg(sum){
    iNumImg = 0;
    for (i = 0; i < 50; i++) {
        if(_img_num[i].style.display == "block"){
            iNumImg = iNumImg + 1;
            _img_num[i].innerHTML = 'Hình ' + iNumImg;
        }
       
    }
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
