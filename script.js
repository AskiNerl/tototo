let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let reset = document.getElementById("reset");
let counter = document.getElementById("counter");

let count = 0;

function updateUI() {
    counter.textContent = count;
}


plus.addEventListener("click", function() {
    count = count + 1;
    updateUI();
    
});

minus.addEventListener("click", function() {
    if (count === 0) {
        alert('Count cannot be less than 0');
        return;
    }

    count = count - 1;
    updateUI();
});

reset.addEventListener("click", function() {
    count = 0;
    updateUI();
});

const lightBtn = document.getElementById("light-mode");
const darkBtn = document.getElementById("dark-mode");

lightBtn.addEventListener("click", function() {
    document.body.classList.add("white");
});

darkBtn.addEventListener("click", function() {
    document.body.classList.remove("white");
});




let myTech = ["Клава", "Мыш", "Ноут"];
myTech.push("Airbook");

const listElement = document.getElementById("display-list");
const countElement = document.getElementById("count");
const techInput = document.getElementById("tech-input");
const addTechBtn = document.getElementById("add-tech-btn");

function renderList(){
    listElement.textContent = myTech.join(" | ");
    countElement.textContent = myTech.length;
}

renderList();

addTechBtn.addEventListener("click", function() {
    const newGadget = techInput.value;

    if (newGadget.trim() !== "") {
        
        const dataToSend = {
            title: newGadget
        };

      
        fetch("http://a.pinggy.io", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(dataToSend) 
        })
        .then(response => {
            if (response.ok) {
                myTech.push(newGadget);
                renderList();          
                techInput.value = "";   
                console.log("Успех: Девайс улетел в базу!");
            } else {
                alert("Бэк ругается! Данные не приняты.");
            }
        })
        .catch(error => {
            console.error(" Связь оборвалась:", error);
            alert("Сервер недоступен, бро.");
        });

    } else {
        alert("Впиши название девайса!");
    }
});

techInput.addEventListener("keypress",function(e) {
  if (e.key ==="Enter") {
    addTechBtn.click();
  }  
});

let btn3 = document.querySelector(".btn3");
let myImage = document.getElementById("my-image");
let isOriginalImage = true;

btn3.onclick = function () {
    if(isOriginalImage === true) {
        myImage.src = "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=400&auto=format&fit=crop";
        isOriginalImage = false;
    } else {
        myImage.src = "https://images.unsplash.com/photo-1542652694-40abf526446e?q=80&w=400&auto=format&fit=crop";
        isOriginalImage = true;
    }
};