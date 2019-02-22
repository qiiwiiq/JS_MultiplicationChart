
let markup ='';

for (let i=2; i<=9; i++){

    let markup1 ='';
    let markup2 ='';

    for (let j=1; j<=3; j++){
        markup1 +=  `<li class="listItem">${i} x ${j} = ${i*j}</li>`;
    }

    for (let k=4; k<=9; k++){
        markup2 += `<li class="listItem">${i} x ${k} = ${i*k}</li>`;
    }

    markup += `
    <div class="box formulaBox floatLeft">
    <div class="numBox">${i}</div>

    <ul class="leftList">
        ${markup1}
    </ul>

    <ul class="rightList">
        ${markup2}
    </ul>    
    </div>
    `   
}


document.getElementById('multiplicationChart').innerHTML = markup;