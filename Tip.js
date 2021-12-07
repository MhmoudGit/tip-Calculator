const bill = document.getElementById('bill');
const fivePercent = document.getElementById('fiveP');
const tenPercent = document.getElementById('tenP');
const fifteenPercent = document.getElementById('fifteenP');
const twentFivePercent = document.getElementById('twentyP');
const fiftyPercent = document.getElementById('fiftyP');
const customP = document.getElementById('custom');
const people = document.getElementById('people');
const showTip = document.getElementById('showTip');
const showTotal = document.getElementById('showTotal');
const reset = document.getElementById('reset')

fivePercent.addEventListener('click', five);
tenPercent.addEventListener('click', ten);
fifteenPercent.addEventListener('click', fifteen);
twentFivePercent.addEventListener('click', twenFive);
fiftyPercent.addEventListener('click', fifty);
customP.addEventListener('input', custom);
reset.addEventListener('click' , poof);

function five() {
    const total = showTotal.innerHTML = Math.round (bill.value * (5/100)*10)/10;
    if (people.value === ''){
        alert("Must Enter People Number")
    }
    else if (people.value == 1) {
        showTip.innerHTML = total
    } else {
        showTip.innerHTML = Math.round ((total/people.value)*10)/10
    }
}


function ten() {
    const total = showTotal.innerHTML = Math.round (bill.value * (10/100)*10)/10;
    if (people.value === ''){
        alert("Must Enter People Number")
    }
    else if (people.value == 1) {
        showTip.innerHTML = total
    } else {
        showTip.innerHTML = Math.round ((total/people.value)*10)/10
    }
}


function fifteen() {
    const total = showTotal.innerHTML = Math.round (bill.value * (15/100)*10)/10;
    if (people.value === ''){
        alert("Must Enter People Number")
    }
    else if (people.value == 1) {
        showTip.innerHTML = total
    } else {
        showTip.innerHTML = Math.round ((total/people.value)*10)/10
    }
}


function twenFive() {
    const total = showTotal.innerHTML = Math.round (bill.value * (25/100)*10)/10;
    if (people.value === ''){
        alert("Must Enter People Number")
    }
    else if (people.value == 1) {
        showTip.innerHTML = total
    } else {
        showTip.innerHTML = Math.round ((total/people.value)*10)/10
    }
}


function fifty() {
    const total = showTotal.innerHTML = Math.round (bill.value * (50/100)*10)/10;
    if (people.value === ''){
        alert("Must Enter People Number")
    }
    else if (people.value == 1) {
        showTip.innerHTML = total
    } else {
        showTip.innerHTML = Math.round ((total/people.value)*10)/10
    }
}


function custom() {
    const total = showTotal.innerHTML = Math.round (bill.value * (customP.value/100)*10)/10;
    if (people.value === ''){
        alert("Must Enter People Number First")
    }
    else if (people.value == 1) {
        showTip.innerHTML = total
    } else {
        showTip.innerHTML = Math.round ((total/people.value)*10)/10
    }
}

function poof(){
    bill.value = ''
    customP.value = ''
    people.value = ''
    showTotal.innerHTML = '0.00'
    showTip.innerHTML = '0.00'
}
