// input
window.addEventListener('load', () => {
    let element1 = document.createElement('input');
    element1.type = 'text';
    element1.id = 'input1';
    document.body.appendChild(element1);

    let element2 = document.createElement('input');
    element2.type = 'text';
    element2.id = 'input2';
    document.body.appendChild(element2);

    let button = document.createElement('button');
    button.id = 'button';
    button.textContent = 'count';
    document.body.appendChild(button);

    button = document.querySelector('#button');
    button.addEventListener('click', buttonHandler);
    let lea1 = null;
    let lea2 = null;

});

// div
let div = document.createElement('div');
div.className = "error-message";
div.innerHTML = "This is not a number";
let div2 = document.createElement('div');
div2.className = "error-message";
div2.innerHTML = "This is not a number";
let divResult = document.createElement('div');
divResult.id = "result";

// button
function buttonHandler() {
    let resultContainer = document.createElement("div");
    resultContainer.id = 'resultContainer';
    resultContainer.style.width = "100px";
    resultContainer.style.height = "100px";
    resultContainer.style.background = "lightblue";
// into 10th system
    let firstInput = document.querySelector('#input1');
    let firstInputValue =  Number.parseInt(firstInput.value, 10);
    let secondInput = document.querySelector('#input2');
    let secondInputValue =  Number.parseInt(secondInput.value, 10);
// function
    button.onclick = function(){
    	if(input1.value.match(/,/)) {
        input1.value = input1.value.replace(/,/g, '.');
    	}
    	if(input2.value.match(/,/)) {
        input2.value = input2.value.replace(/,/g, '.');
    	}
        lea1 = document.getElementById("input1").value;
        lea2 = document.getElementById("input2").value;
        if(isNaN(+lea1)){
            document.getElementById("input1").after(div);
        }
        else{
            div.remove();
        }
        if(isNaN(+lea2)){
            document.getElementById("input2").after(div2);
        }
        else{
            div2.remove();
        }
        if(isNaN(+lea1) == false && isNaN(+lea2) == false){
            divResult.innerHTML = `${+lea1 + +lea2}`;
            button.after(divResult);
        }else{
            divResult.remove();
        }
    }

    // resultContainer.innerHTML = "<h1>value</h1>";
    // document.body.append(resultContainer);
}
