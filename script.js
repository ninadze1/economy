function run() {
    let data = document.querySelector(".main_form_vvod"); // помещаем в переменную верхнее поле ввода
    let v_n = 1648;
    let nalog = document.querySelector(".vyvod2"); // помещаем в переменную нижнее поле ввода
    let vychet = document.querySelector(".vyvod1"); // помещаем в переменную нижнее поле ввода
    let pension = document.querySelector(".vyvod3"); // помещаем в переменную нижнее поле ввода
    let number = data.value; // помещаем в переменную содержимое верхнего поля ввода


   vychet.value = v_n;
   nalog.value = (number  - vychet.value)* 0.15; 
   pension.value = number * 0.03;
   
    
}
let button = document.querySelector('.main_form_button');
button.addEventListener('click', run);