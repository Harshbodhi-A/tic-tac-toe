// button click handler


//apply event to generate new game state


// game state renderer renders the generated game state

// renders text on button clicked with X or O

// disable the button clicked

// update panel values such as Turn Played By and Moves Left

// reset panel values to default values

// implement logic to get the winner

// announce winner


// REPLAY-MODE :: replay-game-button-clicked->fetches events recorded->apply event->generates new game state->render game state


// reset game to start a new



// bind events to clickable buttons

//function called whenever user tab on any box

function myfunction(){
    //seting dom to all boxes or input field

    var b1 = document.getElementById('box-1').value;
    var b2 = document.getElementById('box-2').value;
    var b3 = document.getElementById('box-3').value;
    var b4 = document.getElementById('box-4').value;
    var b5 = document.getElementById('box-5').value;
    var b6 = document.getElementById('box-6').value;
    var b7 = document.getElementById('box-7').value;
    var b8 = document.getElementById('box-8').value;
    var b9 = document.getElementById('box-9').value;

    //checking if Player X won or not and after
    //that disabled all the other fields

    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
        b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player X won');
    }

    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-8").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player X won');
    }
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-6").disabled = true;
        window.alert('Player X won');
    }
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        window.alert('Player X won');
    }
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        window.alert('Player X won');
    }
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-8").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player X won');
    }
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player X won');
    }
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
        b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player X won');
    }

    else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
        b2 == '0') && (b3 == '0' || b3 == '0')) {
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
        b4 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box8").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
        b8 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-6").disabled = true;
        window.alert('Player 0 won');
    }
     else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
        b6 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-5").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
        b5 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-4").disabled = true;
        document.getElementById("box-6").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
       b5 == '0') && (b7 == '0' || b7 == '0')) {
       document.getElementById("box-1").disabled = true;
       document.getElementById("box-2").disabled = true;
       document.getElementById("box-4").disabled = true;
       document.getElementById("box-6").disabled = true;
       document.getElementById("box-8").disabled = true;
       document.getElementById("box-9").disabled = true;
       window.alert('Player 0 won');
    }
    else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
       b5 == '0') && (b8 == '0' || b8 == '0')) {
       document.getElementById("box-1").disabled = true;
       document.getElementById("box-3").disabled = true;
       document.getElementById("box-4").disabled = true;
       document.getElementById("box-6").disabled = true;
       document.getElementById("box-7").disabled = true;
       document.getElementById("box-9").disabled = true;
       window.alert('Player 0 won');
    }
    else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
        b5 == '0') && (b6 == '0' || b6 == '0')) {
        document.getElementById("box-1").disabled = true;
        document.getElementById("box-2").disabled = true;
        document.getElementById("box-3").disabled = true;
        document.getElementById("box-7").disabled = true;
        document.getElementById("box-8").disabled = true;
        document.getElementById("box-9").disabled = true;
        window.alert('Player 0 won');

    }

    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
    || b2 == '0') && (b3 == 'X' || b3 == '0') &&
    (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
    b5 == '0') && (b6 == 'X' || b6 == '0') &&
    (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
    b8 == '0') && (b9 == 'X' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Match Tie";
        window.alert('Match Tie');
}
else {

    // Here, Printing Result
    if (flag == 1) {
        document.getElementById('next-player')
            .innerHTML = "Player X Turn";
    }
    else {
        document.getElementById('next-player')
            .innerHTML = "Player 0 Turn";
    }
}
}

function myfunc_2() {
    location.reload();
    document.getElementById('box-1').value = '';
    document.getElementById("box-2").value = '';
    document.getElementById("box-3").value = '';
    document.getElementById("box-4").value = '';
    document.getElementById("box-5").value = '';
    document.getElementById("box-6").value = '';
    document.getElementById("box-7").value = '';
    document.getElementById("box-8").value = '';
    document.getElementById("box-9").value = '';
 
}
 
// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function myfunc_3() {
    if (flag == 1) {
        document.getElementById("box-1").value = "X";
        document.getElementById("box-1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box-1").value = "0";
        document.getElementById("box-1").disabled = true;
        flag = 1;
    }
}
 
function myfunc_4() {
    if (flag == 1) {
        document.getElementById("box-2").value = "X";
        document.getElementById("box-2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box-2").value = "0";
        document.getElementById("box-2").disabled = true;
        flag = 1;
    }
}
 
function myfunc_5() {
    if (flag == 1) {
        document.getElementById("box-3").value = "X";
        document.getElementById("box-3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box-3").value = "0";
        document.getElementById("box-3").disabled = true;
        flag = 1;
    }
}
 
function myfunc_6() {
    if (flag == 1) {
        document.getElementById("box-4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box-4").value = "0";
        document.getElementById("box-4").disabled = true;
        flag = 1;
    }
}
 
function myfunc_7() {
    if (flag == 1) {
        document.getElementById("box-5").value = "X";
        document.getElementById("box-5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box-5").value = "0";
        document.getElementById("box-5").disabled = true;
        flag = 1;
    }
}
 
function myfunc_8() {
    if (flag == 1) {
        document.getElementById("box-6").value = "X";
        document.getElementById("box-6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box-6").value = "0";
        document.getElementById("box-6").disabled = true;
        flag = 1;
    }
}
 
function myfunc_9() {
    if (flag == 1) {
        document.getElementById("box-7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box-7").value = "0";
        document.getElementById("box-7").disabled = true;
        flag = 1;
    }
}
 
function myfunc_10() {
    if (flag == 1) {
        document.getElementById("box-8").value = "X";
        document.getElementById("box-8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box-8").value = "0";
        document.getElementById("box-8").disabled = true;
        flag = 1;
    }
}
 
function myfunc_11() {
    if (flag == 1) {
        document.getElementById("box-9").value = "X";
        document.getElementById("box-9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("box-9").value = "0";
        document.getElementById("box-9").disabled = true;
        flag = 1;
    }
}


function function1(){
    document.getElementById('move-count');
    
}