var num1 = Math.round(Math.random()*100);
console.log(num1);




const checkButton = document.querySelector("#Checknum").addEventListener("click", function() {
    const minVerdi = document.querySelector("#tall1").value;
    console.log(minVerdi);



   if (num1 == minVerdi) {
        document.querySelector("#subtitle").innerHTML = "Hurray! Du gjettet tallet"
        window.alert("Hurray! Du gjettet tallet")
    } else if (num1 > minVerdi) {
        // window.alert("Prøv igjen. Et nummer mer enn 50")
        document.querySelector("#subtitle").innerHTML = ("Prøv igjen. Skriv et nummer mer enn "+ minVerdi)
    } else if (num1 < minVerdi) {
        // window.alert("Prøv igjen. Et nummer mer enn 50")
        document.querySelector("#subtitle").innerHTML = ("Prøv igjen. Skriv mindre tall enn "+ minVerdi)
    }



})


function randomnum1() {

    var num2 = Math.round(Math.random()*100);
    const randomnum1 = document.querySelector(".randomnum").addEventListener("click", function() {
    
       if (num1 == num2) {
            document.querySelector("#subtitle").innerHTML = "Hurray! Du gjettet tallet"
            window.alert("Hurray! Du gjettet tallet")
        } else if (num1 > num2) {
            // window.alert("Prøv igjen. Et nummer mer enn 50")
            document.querySelector("#subtitle").innerHTML = ("Prøv igjen. Skriv et nummer mer enn "+ num2)
        } else if (num1 < num2) {
            // window.alert("Prøv igjen. Et nummer mer enn 50")
            document.querySelector("#subtitle").innerHTML = ("Prøv igjen. Skriv mindre tall enn "+ num2)
        }
    
    
    
       console.log();
    })
}










