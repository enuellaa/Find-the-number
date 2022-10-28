var num1 = Math.round(Math.random()*100);
console.log(num1);

const checkButton = document.querySelector("#Checknum").addEventListener("click", function() {
    const num = document.querySelector("#tall1").value;
    

    if (num1 == num) {
        document.querySelector("#subtitle").innerHTML = "Hurray! Du gjettet tallet" 
        window.alert("Hurray! Du gjettet tallet")
    } else if (num < "50") {
        // window.alert("Prøv igjen. Et nummer mer enn 50")
        document.querySelector("#subtitle").innerHTML = "Prøv igjen. Et nummer mer enn 50"
    } else {
        document.querySelector("#subtitle").innerHTML = "Beklager! Prøn igjen"
    }

    console.log();
})


function randomnum1() {
    const rnNumber = Math.floor(Math.random() * numberList.length)

    document.getElementById("tall1").value = numberList[rnNumber];
}


const numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
"13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56","57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"]













