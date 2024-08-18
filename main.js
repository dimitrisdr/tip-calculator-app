let wraper = document.querySelector('.wraper');
let inputs = document.querySelectorAll('.input')
let tipBtns = document.querySelectorAll('.tip-btn')
let resetBatn = document.querySelector('.reset-btn')
let tipResults = document.querySelector('.tip-result')
let totalResults = document.querySelector('.total-result')

let dataForBill = {
    'bill':0,
    'tip':0,
    'persons':0
}

function handleTipBtns(e){
    dataForBill['tip'] = Number(+e.target.dataset.value)
    returnResults()
    console.log(dataForBill)
}

function handleInputs(e) {
    let category = e.target.dataset.item
    dataForBill[category] = Number(+e.target.value)
    console.log(dataForBill)
    returnResults()
}

function resetValues() {
    tipResults.textContent = '0.00'
    totalResults.textContent = '0.00'
    inputs.forEach(input => input.value = '')
}

function returnResults() {
    let tipNumberPerPerson = Math.floor(( ((dataForBill['tip'] / 100) * dataForBill['bill']) / dataForBill['persons'])*100) / 100
    let finalResultsNum = (Math.floor((dataForBill['bill'] / dataForBill['persons']) * 100) /100) 
    tipResults.textContent = tipNumberPerPerson
    totalResults.textContent = Math.floor((finalResultsNum + tipNumberPerPerson) * 100) / 100
}

inputs.forEach(input => input.addEventListener('input', handleInputs))
tipBtns.forEach(btn => btn.addEventListener('click', handleTipBtns))
resetBatn.addEventListener('click', resetValues)











// let billInput = document.querySelector('#bill-input');
// let peopleInput = document.querySelector('#people-input');
// let customInput = document.querySelector('.custom-input');