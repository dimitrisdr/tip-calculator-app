let wraper = document.querySelector('.wraper');
let inputs = document.querySelectorAll('.input')
let tipBtns = document.querySelectorAll('.tip-btn')
let resetBatn = document.querySelector('.reset-btn')
let tipResults = document.querySelector('.tip-result')
let totalResults = document.querySelector('.total-result')

let dataForBill = {
    'bill':{amount:0, validation: (e) => e >= 0},
    'tip':{amount:0, validation: (e) => e >= 0},
    'persons':{amount:1, validation: (e) => e > 0 || e === ''}
}

function validatePersons(e){
    if ( e > 0 || e === '') {
        dataForBill['persons'].amount = (e > 0) ? e : 1
        return true;
    }else {
        return false;
    }
}

function handleTipBtns(e){
    dataForBill['tip'].amount = Number(+e.target.dataset.value)
    tipBtns.forEach(btn => btn.classList.remove('active'))
    e.target.classList.add('active')
    returnResults()
    console.log(dataForBill)
}

function handleInputs(e) {
    let category = e.target.dataset.item
    if (validateData(dataForBill, category, e.target.value)){
        if (e.target.matches('.custom-input') && e.target.value !== '') {
            tipBtns.forEach(btn => btn.classList.remove('active'))
        }
        dataForBill[category].amount = (category === 'persons' && e.target.value === '') ? 1 : Number(+e.target.value)
        e.target.parentNode.parentNode.classList.remove('invalid')
        console.log(dataForBill)
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