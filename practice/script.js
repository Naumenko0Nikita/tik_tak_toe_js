const listButtons = document.querySelectorAll(".button_n")

let step = "X"

let victory = 0

for (let lenButton = 0; lenButton < listButtons.length; lenButton++){
    let button = listButtons[lenButton]
    button.addEventListener(
      type = "click",
      listener = function (event){
        if (step == "X"){
            if (button.value != "X" && button.value != "O"){
                button.textContent = "X"
                button.value = "X"
                step = "O"
            }
        }
        if (step == "O"){
            if (button.value != "X" && button.value != "O"){
                button.textContent = "O"
                button.value = "O"
                step = "X"
            }
        }
        // and - && 
        if (victory == 0){
            // 1 2 3
            // 4 5 6
            // 7 8 9
            // X horisontal
            // 1 2 3 
            if  (document.getElementById("1").value == "X" && document.getElementById("2").value == "X" && document.getElementById("3").value == "X"){
                console.log("X Horisontal 1 2 3")
                document.getElementById("1").style.backgroundColor = "green"
                document.getElementById("2").style.backgroundColor = "green"
                document.getElementById("3").style.backgroundColor = "green"
                victory = 1
            }
            // 4 5 6
            if  (document.getElementById("4").value == "X" && document.getElementById("5").value == "X" && document.getElementById("6").value == "X"){
                console.log("X Horisontal 4 5 6")
                document.getElementById("4").style.backgroundColor = "green"
                document.getElementById("5").style.backgroundColor = "green"
                document.getElementById("6").style.backgroundColor = "green"
                victory = 1
            }
            // 7 8 9 
            if  (document.getElementById("7").value == "X" && document.getElementById("8").value == "X" && document.getElementById("9").value == "X"){
                console.log("X Horisontal 7 8 9")
                document.getElementById("7").style.backgroundColor = "green"
                document.getElementById("8").style.backgroundColor = "green"
                document.getElementById("9").style.backgroundColor = "green"
                victory = 1
            }
            //
            //  0 Horisontal
            //  1 2 3 
            if  (document.getElementById("1").value == "O" && document.getElementById("2").value == "O" && document.getElementById("3").value == "O"){
                console.log("O Horisontal 1 2 3")
                document.getElementById("4").style.backgroundColor =  "green"
                document.getElementById("5").style.backgroundColor =  "green"
                document.getElementById("6").style.backgroundColor =  "green"
                victory = 1
            }
            // 4 5 6
            if  (document.getElementById("4").value == "O" && document.getElementById("5").value == "O" && document.getElementById("6").value == "O"){
                console.log("X Horizontal 4 5 6")
                document.getElementById("4").style.backgroundColor = "green"
                document.getElementById("5").style.backgroundColor = "green"
                document.getElementById("6").style.backgroundColor = "green"
                victory = 1
            }
            // 7 8 9 
            if  (document.getElementById("7").value == "O" && document.getElementById("O").value == "O" && document.getElementById("9").value == "O"){
                console.log(" O Horisontal 7 8 9")
                document.getElementById("7").style.backgroundColor = "green"
                document.getElementById("8").style.backgroundColor = "green"
                document.getElementById("9").style.backgroundColor = "green"
                victory = 1
            }
            // 
            // 0 vertical
            // 1 6 7
            if  (document.getElementById("1").value == "O" && document.getElementById("4").value == "O" && document.getElementById("7").value == "O"){
                console.log("O Vertical 1 4 7")
                document.getElementById("1").style.backgroundColor =  "green"
                document.getElementById("4").style.backgroundColor =  "green"
                document.getElementById("7").style.backgroundColor =  "green"
                victory = 1
            }
            // 2 5 8 
            if  (document.getElementById("2").value == "O" && document.getElementById("5").value == "O" && document.getElementById("8").value == "O"){
                console.log("O Vertical 2 5 8")
                document.getElementById("2").style.backgroundColor =  "green"
                document.getElementById("5").style.backgroundColor =  "green"
                document.getElementById("8").style.backgroundColor =  "green"
                victory = 1
            }
            // 3 6 9 
            if  (document.getElementById("3").value == "O" && document.getElementById("6").value == "O" && document.getElementById("9").value == "O"){
                console.log("O Vertical 3 6 9")
                document.getElementById("3").style.backgroundColor =  "green"
                document.getElementById("6").style.backgroundColor =  "green"
                document.getElementById("9").style.backgroundColor =  "green"
                victory = 1
            }
            // 
            // X verticall
            // 1 4 7 
            if  (document.getElementById("1").value == "X" && document.getElementById("4").value == "X" && document.getElementById("7").value == "X"){
                console.log("X Vertical 1 4 7")
                document.getElementById("1").style.backgroundColor =  "green"
                document.getElementById("4").style.backgroundColor =  "green"
                document.getElementById("7").style.backgroundColor =  "green"
                victory = 1
            }
            // 2 5 8 
            if  (document.getElementById("2").value == "X" && document.getElementById("5").value == "X" && document.getElementById("8").value == "X"){
                console.log("X Vertical 2 5 8")
                document.getElementById("2").style.backgroundColor =  "green"
                document.getElementById("5").style.backgroundColor =  "green"
                document.getElementById("8").style.backgroundColor =  "green"
                victory = 1
            }
            // 3 6 9 
            if  (document.getElementById("3").value == "X" && document.getElementById("6").value == "X" && document.getElementById("9").value == "X"){
                console.log("X Vertical 3 6 9")
                document.getElementById("3").style.backgroundColor =  "green"
                document.getElementById("6").style.backgroundColor =  "green"
                document.getElementById("9").style.backgroundColor =  "green"
                victory = 1
            } 
            // 
            // Diagonal X
            // 1 5 9
            if (document.getElementById("1").value == "X" && document.getElementById("5").value == "X" && document.getElementById("9").value == "X"){
                console.log("X Diagonal 1 5 9")
                document.getElementById("1").style.backgroundColor = "green"
                document.getElementById("5").style.backgroundColor = "green"
                document.getElementById("9").style.backgroundColor = "green"
                victory = 1
            }
            // 3 5 7 
            if (document.getElementById("3").value == "X" && document.getElementById("5").value == "X" && document.getElementById("7").value == "X"){
                console.log("X Diagonal 3 5 7")
                document.getElementById("3").style.backgroundColor = "green"
                document.getElementById("5").style.backgroundColor = "green"
                document.getElementById("7").style.backgroundColor = "green"
                victory = 1
            } 
            // 
            // Diagonal 0
            // 1 5 9 
            if (document.getElementById("1").value == "O" && document.getElementById("5").value == "O" && document.getElementById("9").value == "O"){
                console.log("O Diogonal 1 5 9")
                document.getElementById("1").style.backgroundColor = 'green'
                document.getElementById('5').style.backgroundColor = 'green'
                document.getElementById('9').style.backgroundColor = 'green'
                victory = 1
            }
            // 3 5 7
            if (document.getElementById("3").value == "O" && document.getElementById("5").value == "O" && document.getElementById("7").value == "O") {
                console.log("O Diogonal 3 5 7")
                document.getElementById("3").style.backgroundColor = "green"
                document.getElementById("5").style.backgroundColor = "green"
                document.getElementById("7").style.backgroundColor = "green"
                victory = 1
            }   
        }
        
        if (victory == 1){
            console.log("VICTORY")
            function disableButtons(){
                for(let count = 0; count < listButtons.length; count++){
                    listButtons[count].disabled = true
                }
            }
            disableButtons()
        }
        })
}