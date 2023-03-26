let rows = [];
let blocks = [];
const column = document.querySelector('.column');

let n = 10;
let m = 10;

column.setAttribute('style', 'gap: ' + (100/m) + 'px;');


for (let i = 0; i < n; i++) {
    rows.push(column.appendChild(document.createElement('div')));
    rows[i].setAttribute('class', 'row');
    rows[i].setAttribute('style', 'gap: ' + (100/m) + 'px;');
    for (let j = 0; j < m; j++) {

        let cover = rows[i].appendChild(document.createElement('div'));
        let block = cover.appendChild(document.createElement('div'));
        block.setAttribute('class', 'block');
        block.setAttribute('style', 'padding: ' + (300/m) + 'px;');
        
        blocks.push(cover);
    }
}

let brightness = [];
for (let i = 0; i < blocks.length; i++) {
    brightness.push(100);
}

for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('mouseover', () => {
        if (brightness[i] != 0) {
            brightness[i] -= 10;
            blocks[i].setAttribute('style', 'filter: brightness(' + brightness[i] + '%);');    
        }
    });
}