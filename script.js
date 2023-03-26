let rows = [];
const column = document.querySelector('.column');

let n = 10;
let m = 10;

column.setAttribute('style', 'gap: ' + (100/m) + 'px;');


for (let i = 0; i < n; i++) {
    rows.push(column.appendChild(document.createElement('div')));
    rows[i].setAttribute('class', 'row');
    rows[i].setAttribute('style', 'gap: ' + (100/m) + 'px;');
    for (let j = 0; j < m; j++) {
        let block = rows[i].appendChild(document.createElement('div'));
        block.setAttribute('class', 'block');
        block.setAttribute('style', 'padding: ' + (300/m) + 'px;');
    }
}