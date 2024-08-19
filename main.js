let wraper = document.querySelector('.wraper');
let inputs = document.querySelectorAll('.input')
let tipBtns = document.querySelectorAll('.tip-btn')
let resetBatn = document.querySelector('.reset-btn')
let tipResults = document.querySelector('.tip-result')
let totalResults = document.querySelector('.total-result')

let dataForBill = {
    'bill':{amount:0, validation: (e)=> e >= 0},
    'tip':{amount:0, validation: (e)=> e >= 0},
    'persons':{amount:1, validation: (e)=> e > 0 || e === 0}
}

function handleTipBtns(e){
    dataForBill['tip'].amount = Number(+e.target.dataset.value)
    returnResults()
    console.log(dataForBill)
}

function handleInputs(e) {
    let category = e.target.dataset.item
    if (validateData(dataForBill, category, e.target.value)){
        dataForBill[category].amount = Number(+e.target.value)
        e.target.parentNode.parentNode.classList.remove('invalid')
        returnResults()
    }else {
        e.target.parentNode.parentNode.classList.add('invalid')
    }
}

function validateData(data, category, value) {
    return data[category].validation(value)
}

function resetValues() {
    tipResults.textContent = '0.00'
    totalResults.textContent = '0.00'
    inputs.forEach(input => input.matches('#people-input')? input.value = 1 : input.value = '')
}

function returnResults() {
    console.log(dataForBill['bill'].amount)
    let tipNumberPerPerson = Math.floor(( ((dataForBill['tip'].amount / 100) * dataForBill['bill'].amount) / dataForBill['persons'].amount)*100) / 100
    let finalResultsNum = (Math.floor((dataForBill['bill'].amount / dataForBill['persons'].amount) * 100) /100) 
    tipResults.textContent = tipNumberPerPerson
    totalResults.textContent = Math.floor((finalResultsNum + tipNumberPerPerson) * 100) / 100
}

inputs.forEach(input => input.addEventListener('input', handleInputs))
tipBtns.forEach(btn => btn.addEventListener('click', handleTipBtns))
resetBatn.addEventListener('click', resetValues)











// let billInput = document.querySelector('#bill-input');
// let peopleInput = document.querySelector('#people-input');
// let customInput = document.querySelector('.custom-input');