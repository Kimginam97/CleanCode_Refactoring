/**
 * 배열 요소에 접근하기
 */

const array = [1,2,3];

// case 1
function operateTime(input, operators, is){
    input[0].split('').forEach((num) => {
        cy.get('.digit').contains(num).click();
    });

    input[1].split('').forEach((num) => {
        cy.get('.digit').contains(num).click();
    });

}

// case 2
function operateTime(input, operators, is){
    const [firstInput, secondInput] = inputs;
    firstInput.split('').forEach((num) => {
        cy.get('.digit').contains(num).click();
    });

    secondInput.split('').forEach((num) => {
        cy.get('.digit').contains(num).click();
    });
}

// case 3
function operateTime(firstInput, secondInput, is){
    firstInput.split('').forEach((num) => {
        cy.get('.digit').contains(num).click();
    });

    secondInput.split('').forEach((num) => {
        cy.get('.digit').contains(num).click();
    });
}

// ---------------------------------------------

// case 1
function clickGroupButton(){
    const confirmButton = document.getElementsByTagNameNS('button')[0];
    const cancelButton = document.getElementsByTagNameNS('button')[1];
    const resetButton = document.getElementsByTagNameNS('button')[2];

}

// case 2
function clickGroupButton(){
    const [confirmButton,cancelButton,resetButton] = document.getElementsByTagNameNS('button');
}

// ---------------------------------------------

// case 1
function formatDate(targetDate){
    const date = targetDate.toISOString().split('T')[0];

    const [year, month, day] = date.split('-');

    return `${year}년 ${month}월 ${day}일`;
}

// case 2
function formatDate(targetDate){
    const [date] = targetDate.toISOString().split('T');

    const [year, month, day] = date.split('-');

    return `${year}년 ${month}월 ${day}일`;
}

// case 3

function head(arr){
    return arr[0] ?? '';
}

function formatDate(targetDate){
    const date = head(targetDate.toISOString().split('T'));

    const [year, month, day] = date.split('-');

    return `${year}년 ${month}월 ${day}일`;
}
