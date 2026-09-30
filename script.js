function printNumber() {

    let question1_num = document.getElementById("question1-num").value;
    let question1_result = document.getElementById("question1-result");

    for(let i = 1; i <= question1_num; i++){
        question1_result.textContent += i + " ";
    }
}

function printReverseNumber() {

    let question2_num = document.getElementById("question2-num").value;
    let question2_result = document.getElementById("question2-result");

    for (let i = question2_num; i >= 1; i--) {
        question2_result.textContent += i + " ";
    }
}

function printEvenNumbers() {
    let question3_num = document.getElementById("question3-num").value;
    let question3_result = document.getElementById("question3-result");

    for(let i = 0 ; i <= question3_num ; i++){
        if(i%2===0){
            question3_result.textContent += i + " ";
        }
    }
}

function printOddNumbers() {
    let question4_num = document.getElementById("question4-num").value;
    let question4_result = document.getElementById("question4-result");

    for(let i = 0 ; i <= question4_num ; i++){
        if(i%2!==0){
            question4_result.textContent += i + " ";
        }
    }
}

function printMultiplesOfFive(){ 
    let question5_num = document.getElementById("question5-num").value;
    let question5_result = document.getElementById("question5-result");

    for(let i = 1 ; i <= question5_num ; i++){
        if(i%5===0){
            question5_result.textContent += i + " ";
        }
    }
}

function printEveryThirdNumber(){
    let question6_num = document.getElementById("question6-num").value;
    let question6_result = document.getElementById("question6-result");

    for(let i = 1 ; i <= question6_num ; i++){
        if(i%3===0){
            question6_result.textContent += i + " ";
        }
    }   
}

function printSquares(){
    let question7_num = document.getElementById("question7-num").value;
    let question7_result = document.getElementById("question7-result") ;

    for(let i = 1 ; i<= question7_num ; i++){
        question7_result . innerHTML += i * i + "<br>";
    }
}

function printTable(){
    let question8_num = document.getElementById("question8-num").value;
    let question8_result = document.getElementById("question8-result");

    for(let i = 1; i <= 10; i++){
        question8_result.innerHTML += question8_num + " x " + i + " = " + (question8_num * i) + "<br>";
    }
}

function printEvenOddNumbers() {
    let question9_num = document.getElementById("question9-num").value;
    let question9_result = document.getElementById("question9-result");

   if(question9_num % 2 === 0){
        for(let i = 2 ; i <= question9_num ; i += 2){
            question9_result.textContent += i + " ";
        }
   }else{
        for(let i = 1 ; i <= question9_num ; i += 2){
            question9_result.textContent += i + " ";
        }
   }
}

function printDivisibleNumbers(){
    let question10_num = document.getElementById("question10-num").value;
    let question10_result = document.getElementById("question10-result");
    
     for(let i = 1 ; i <= question10_num ; i++){
       if(i% 3 === 0 && i%5 === 0){
            question10_result.textContent += i + " ";
        }
    }
}

function checkDivisibleByFive(){
    let question11_num = document.getElementById("question11-num").value;
    let question11_result = document.getElementById("question11-result");

    for(let i=1 ; i<=question11_num ; i++){
        if(i%5===0){
            question11_result.innerHTML += i + "   <strong>is divisible by five</strong><br>"
        }else{
            question11_result.innerHTML += i + "  not divisible by five <br>   "
        }
    }
}

function checkPassFail(){
    let question12_num = document.getElementById("question12-num").value;
    let question12_result = document.getElementById("question12-result");

    for(let i=1 ; i<=question12_num ; i++){
        if(i >= 25){
            question12_result.innerHTML += i + " <strong>Pass</strong><br>";
        }else{
            question12_result.innerHTML += i + " Fail<br>";
        }
    }
}

function categorizeNumbers(){
    let question13_num = document.getElementById("question13-num").value;
    let question13_result = document.getElementById("question13-result");
    
    for(let i=1 ; i<=question13_num ; i++){
        if(i <= 30){
            question13_result.innerHTML += i + " <strong>Small</strong><br>";
        }else if(i <=70){
            question13_result.innerHTML += i + " Medium<br>";
        }else{
            question13_result.innerHTML += i + " larger<br>";
        }
    }
}

function identifyNumbers(){
    let question15_num = Number(document.getElementById("question15-num").value);
    let question15_result = document.getElementById("question15-result");

    if(question15_num > 0){

        for(let i = 1; i <= question15_num; i++){
            if(i > 0){
                question15_result.innerHTML += i + " Positive<br>";
            }
        }

    }else if(question15_num < 0){

        for(let i = -1; i >= question15_num; i--){
            if(i > 0){
                question15_result.innerHTML += i + " Positive<br>";
            }else if(i < 0){
                question15_result.innerHTML += i + " Negative<br>";
            }else{
                question15_result.innerHTML += i + " Zero<br>";
            }
        }

    }else{

        question15_result.innerHTML += "0 Zero<br>";
    }
}

function countEvenNumbers(){
    let question14_num = document.getElementById("question14-num").value;
    let question14_result = document.getElementById("question14-result");
    let count = 0;
    
    for(let i =2 ; i<=question14_num ; i++){
        if(i%2===0){
            count++;
        }
    }
    question14_result.textContent= "Total Even Numbers  " +  count;
}

function countOddNumbers(){
    let question16_num = document.getElementById("question16-num").value;
    let question16_result = document.getElementById("question16-result");
    let count = 0;
    
    for(let i =1 ; i<=question16_num ; i++){
        if(i%2!==0){
            count++;
        }
    }
    question16_result.textContent= "Total Odd Numbers  " +  count;
}

function countDivisibleByFive(){
    let question17_num = document.getElementById("question17-num").value;
    let question17_result = document.getElementById("question17-result");
    let count = 0;

    for(let i = 1; i <= question17_num; i++){
        if(i % 5 === 0){
            question17_result.innerHTML += i + "<br>";
            count++;
        }
    }

    question17_result.innerHTML += "<br><strong>Total numbers divisible by 5: " + count + "</strong>";
}

function findSum(){
    let question18_num = document.getElementById("question18-num").value;
    let question18_result = document.getElementById("question18-result");
    let sum = 0;

    for(let i = 1; i <= question18_num; i++){
        sum = sum + i;
    }
    question18_result.innerHTML += "Sum of numbers is : " + sum + "</strong>";
}

function sumEvenNumbers(){
    let question19_num = document.getElementById("question19-num").value;
    let question19_result = document.getElementById("question19-result");
    let sum = 0;

    for(let i = 1; i <= question19_num; i++){
        if(i%2===0){
            sum = sum + i;
        } 
    }
    question19_result.innerHTML += "Sum of even numbers is : " + sum + "</strong>";
}

function sumOddNumbers(){
    let question20_num = document.getElementById("question20-num").value;
    let question20_result = document.getElementById("question20-result");
    let sum = 0;

    for(let i = 1; i <= question20_num; i++){
        if(i%2!==0){
            sum = sum + i;
        } 
    }
    question20_result.innerHTML += "Sum of odd numbers is : " + sum + "</strong>";
}

function sumDivisibleByThree(){
    let question21_num = document.getElementById("question21-num").value;
    let question21_result = document.getElementById("question21-result");
    let sum = 0;

    for(let i = 1; i <= question21_num; i++){
        if(i%3==0){
            sum = sum + i;
        } 
    }
    question21_result.innerHTML += "Sum of numbers divisible by 3 is: " + sum + "</strong>";
}

function countGreaterThanFifty(){
    let question22_num = document.getElementById("question22-num").value;
    let question22_result = document.getElementById("question22-result");
    let sum = 0;

    for(let i = 1; i <= question22_num; i++){
        if(i > 50){
            sum++;
        } 
    }
    question22_result.innerHTML += "Total numbers greater than 50 are:  " + sum + "</strong>";
}

function findLastDivisibleBySeven() {
    let question23_num = document.getElementById("question23-num").value;
    let question23_result = document.getElementById("question23-result");
    let lastNumber = 0;

    for (let i = 1; i <= question23_num; i++) {
        if (i % 7 === 0) {
            lastNumber = i;
        }
    }

    question23_result.innerHTML += "Last number divisible by 7: " + lastNumber;
}
function findFirstDivisibleByThreeAndFive(){
    let question24_num = document.getElementById("question24-num").value;
    let question24_result = document.getElementById("question24-result");

    for(let i = 1; i <= question24_num; i++){
        if(i % 3 === 0 && i % 5 === 0){
            question24_result.innerHTML += 
                "First number divisible by both 3 and 5: " + i;
            break;
        }
    }
}

function calculateFactorial(){
    let question25_num = document.getElementById("question25-num").value;
    let question25_result = document.getElementById("question25-result");
    let factorial = 1;

    for(let i = 1; i <= question25_num; i++){
        factorial = factorial * i;
    }

    question25_result.innerHTML += "Factorial is: " + factorial;
}

function printSquarePattern(){
    let question26_num = document.getElementById("question26-num").value;
    let question26_result = document.getElementById("question26-result");

    for(let i = 1 ; i <= question26_num ; i++){
        for(let j = 1 ; j <= question26_num ; j++){
            question26_result.innerHTML += "* ";
        }
        question26_result.innerHTML += "<br>";
    }
}

function printIncreasingStars(){
    let question27_num = document.getElementById("question27-num").value;
    let question27_result = document.getElementById("question27-result");

    for(let i = 1 ; i <= question27_num ; i++){
        for(let j = 1 ; j <= i ; j++){
            question27_result.innerHTML += "* ";
        }
        question27_result.innerHTML += "<br>";
    }
}

function printDecreasingStars(){
    let question28_num = document.getElementById("question28-num").value;
    let question28_result = document.getElementById("question28-result");

    for(let i = question28_num ; i >= 1 ; i--){
        for(let j = 1 ; j <= i ; j++){
            question28_result.innerHTML += "* ";
        }
        question28_result.innerHTML += "<br>";
    }
}

function printNumberPattern(){
    let question29_num = document.getElementById("question29-num").value;
    let question29_result = document.getElementById("question29-result");

    for(let i = 1 ; i <= question29_num ; i++){
        for(let j = 1 ; j <= i ; j++){
            question29_result.innerHTML += j + " ";
        }
        question29_result.innerHTML += "<br>";
    }
}

function printRepeatedNumberPattern(){
    let question30_num = document.getElementById("question30-num").value;
    let question30_result = document.getElementById("question30-result");

    for(let i = 1 ; i <= question30_num ; i++){
        for(let j = 1 ; j <= i ; j++){
            question30_result.innerHTML += i + " ";
        }
        question30_result.innerHTML += "<br>";
    }
}

function printReverseNumberPattern(){
    let question31_num = document.getElementById("question31-num").value;
    let question31_result = document.getElementById("question31-result");

    for(let i = question31_num ; i >= 1 ; i--){
        for(let j = 1 ; j <= i ; j++){
            question31_result.innerHTML += j + " ";
        }
        question31_result.innerHTML += "<br>";
    }
}

function printRightAlignedTriangle(){

    let question32_num = document.getElementById("question32-num").value;
    let question32_result = document.getElementById("question32-result");

    for(let i = 1; i <= question32_num; i++){

      
        for(let j = 1; j <= question32_num - i; j++){
            question32_result.innerHTML += "&nbsp;&nbsp;";
        }

    
        for(let j = 1; j <= i; j++){
            question32_result.innerHTML += "*";
        }

        question32_result.innerHTML += "<br>";
    }
}

function printPyramid(){

    let question33_num = document.getElementById("question33-num").value;
    let question33_result = document.getElementById("question33-result");

    for(let i = 1; i <= question33_num; i++){

        for(let j = 1; j <= question33_num - i; j++){
            question33_result.innerHTML += "&nbsp;&nbsp;";
        }

        for(let j = 1; j <= (2 * i - 1); j++){
            question33_result.innerHTML += "*";
        }

        question33_result.innerHTML += "<br>";
    }
}

function printReversePyramid(){

    let question34_num = document.getElementById("question34-num").value;
    let question34_result = document.getElementById("question34-result");

    for(let i = question34_num; i >= 1; i--){

        // Print spaces
        for(let j = 1; j <= question34_num - i; j++){
            question34_result.innerHTML += "&nbsp;&nbsp;";
        }

        // Print stars
        for(let j = 1; j <= (2 * i - 1); j++){
            question34_result.innerHTML += "*";
        }

        question34_result.innerHTML += "<br>";
    }
}