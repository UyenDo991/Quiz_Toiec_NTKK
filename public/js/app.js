const slides = document.querySelectorAll('.picture');
var btnRnd = document.getElementById('checkrandom');
var btnFull = document.getElementById('checkfull');

let min = 0;
let max = 5;
btnFull.checked = true;
btnRnd.checked = false;
console.log(btnRnd);
btnRnd.addEventListener('click', function(){
    btnFull.checked = false;
    let rd_num = getRndInteger(min, max);
    console.log(rd_num);
    console.log(slides.length);
    showSlides_Content_6_M(rd_num);
    function showSlides_Content_6_M(rd_num) {
        let i;
        let _number_from = Number(rd_num); 5
        let _number_to = Number(rd_num) + 2; 7
        let _check_num = 0; 
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
});
///----------------------
btnFull.addEventListener('click', function(){
    btnRnd.checked = false;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "block";
    }
});
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
