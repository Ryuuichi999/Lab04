// ข้อ 1
function increment() {
    var currentValue = parseInt($("#incrementText").val()) || 0;
    $("#incrementText").val(currentValue + 1);
}


// ข้อ 2
function addNumbers() {
    var num1 = parseInt($("#addNumbersForm input[name='num1']").val()) || 0;
    var num2 = parseInt($("#addNumbersForm input[name='num2']").val()) || 0;
    $("#addNumbersForm input[name='answer']").val(num1 + num2);
}



// ข้อ 3
function isPrime() {
    var myInput = parseInt($("#isPrimeForm input[name='number']").val());
    var count = 0;
    if (myInput < 1) {
        $("#isPrimeForm input[name='answer']").val(myInput + " ไม่ใช่จำนวนเฉพาะ");
        return;
    }
    if (myInput == 2) {
        $("#isPrimeForm input[name='answer']").val(myInput + " ไม่เป็นจำนวนเฉพาะ");
        return;
    }
    for (var i = 2; i <= Math.sqrt(myInput); i++) {
        if (myInput % i === 0) {  
            count++; 
            break; 
        }
    }
    if (count === 0) {
        $("#isPrimeForm input[name='answer']").val(myInput + " เป็นจำนวนเฉพาะ");
    } else {
        $("#isPrimeForm input[name='answer']").val(myInput + " ไม่ใช่จำนวนเฉพาะ");
    }
}


// ข้อ 4
var randomNumber = Math.round(Math.random() * 100);
var numberOfGuess = 0;

function checkGuess() {
    var myGuess = $("#numberGuessForm input[name='number']").val();
    var guessStatus = $("#guessStatus");
    var guessCounter = $("#guessCounter");
    numberOfGuess++;
    if (myGuess > randomNumber) {
        guessStatus.text("สูงเกิน").css("color", "black");
    } else if (myGuess < randomNumber) {
        guessStatus.text("ต่ำเกิน").css("color", "black");
    } else {
        guessStatus.text("ถูกต้อง!!").css({
            "color": "red",
            "font-weight": "bold"
        });
    }
    guessCounter.text(numberOfGuess);
}


// ข้อ 5
function backgroundForm() {
    var selectedColor = $('input[name="backgroundRadio"]:checked').val();
    $("body").css("background-color", selectedColor);
}
