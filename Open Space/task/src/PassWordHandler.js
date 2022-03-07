
const okButton = document.getElementById("ok-button");
const launchButton =  document.getElementById("launch-button");
let passValue = 0;
let leverValue = 0;
let checkboxValue = 0;
let checkboxList = document.querySelectorAll(".single-check-button");
let leverList = document.querySelectorAll(".single-lever");

initFunction();


function setControlPanel() {

    okButton.disabled = passValue;
    document.getElementById("password-field").disabled = passValue;

    for (const buttonListKey in checkboxList) {
        checkboxList[buttonListKey].disabled = !passValue;
    }

    for (const leverListKey in leverList) {
        leverList[leverListKey].disabled = !passValue;
    }

    console.log("setControlPanel:");
    console.log("passValue = "  + passValue);
}

okButton.addEventListener("click", function () {
        let passwordText = document.getElementById("password-field").value;
        if (passwordText === "TrustNo1") {
            passValue = 1;
        } else {
            passValue = 0;
        }
        console.log("Ok button pressed, passValue = " + passValue);

        setControlPanel();
})

launchButton.addEventListener("click", function () {
    let rocket = document.getElementById("rocket");

    let leftPos = rocket.style.left;
    let bottomPos = rocket.style.bottom;

    rocket.animate([
        { // current position of your rocket
            left: leftPos + 'px',
            bottom: bottomPos + 'px'
        },
        { //  final position of your rocket
            left: (leftPos + 4000) +'px',
            bottom: (bottomPos + 4000) + 'px'
        }
    ], {
        // timing options
        duration: 2000,
        iterations: 1
    })

});





function initFunction() {

    launchButton.disabled = true;
    setControlPanel();

}

function checkLaunchButton(){

    checkboxValue = 0;
    for (let j = 0; j < checkboxList.length; j++) {
        if (checkboxList[j].checked){
            checkboxValue++;
        }
    }

    leverValue = 0;
    for (let j = 0; j < leverList.length; j++) {
        leverValue += Number(leverList[j].value);
    }

    if (passValue === 1 && leverValue === 100*leverList.length && checkboxValue === checkboxList.length){
        launchButton.disabled = false;
        console.log("READY TO LAUNCH");
    } else {
        launchButton.disabled = true;
    }
}





