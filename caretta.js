const submit = document.getElementById("form");
const userInputs = document.querySelectorAll("input");
const userLabels = document.querySelectorAll("label");
const userTextArea = document.querySelector("textarea");
const nav = document.querySelector("nav");
const invalidError = "no és vàlid";

let texts = [];
let textCount = 0;

submit.addEventListener("submit", function (event){
    formCheck(event);
});

/* TEXTS []
0."El teu nom * " 1."El teu correu electrònic * " 2."Títol * " 3."Missatge * "*/
for (let i = 0; i < userLabels.length; i++) {
    texts[textCount] = userLabels[i].textContent;
    textCount ++;
}

nav.style.transition="all 0.5s"
window.onscroll = function () {updateNav()};

function updateNav(){
    if (window.scrollY > 50) {
        nav.style.height="100px";
        nav.style.backgroundColor="lightblue";
    } else {
        nav.style.height="50px";
        nav.style.backgroundColor="white";
    }
}

/* ERRORS []
0.Name 1.Mail 2.Title 3.Msg*/
function formCheck(event) {
    let error = false;
    let errors = [];
    let inputCount = 0;
    let labelCount = 0;

    for (const input of userInputs) {
        if (input.value === "") {
            input.style.backgroundColor="lightcoral";
            error = true;
            errors[inputCount] = true;
        } else {
            input.style.backgroundColor="lightgreen";
        }
        inputCount ++;
    }
    if (userTextArea.value === "") {
        userTextArea.style.backgroundColor="lightcoral";
        error = true;
        errors[inputCount] = true;
    } else {
        userTextArea.style.backgroundColor="lightgreen";
    }
    for (const label of userLabels){
        if (errors[labelCount]){
            if (label.textContent === texts[labelCount]) {
                label.textContent = `${label.textContent} ${invalidError}`;
            }
        } else {
            label.textContent = texts[labelCount];
        }
        labelCount ++;
    }
    if (error) {
        event.preventDefault();
    }
}