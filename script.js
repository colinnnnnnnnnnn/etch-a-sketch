let rows = [];
let blocks = [];
const column = document.querySelector('.column');
const width = document.getElementById('width');
const height = document.getElementById('height');
const button = document.querySelector('.button');

let n = height.value;
let m = width.value;

column.setAttribute('style', 'gap: ' + (100/m) + 'px;');

function generate() {
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
    
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
    
            let child = blocks[i].firstElementChild;
            if (brightness[i] != 0) {
                brightness[i] -= 10;
                blocks[i].setAttribute('style', 'filter: brightness(' + brightness[i] + '%);');    
                child.style.backgroundColor = `#${randomColor}`;
            }
        });
    }
    
}

generate();

button.addEventListener('click', () => {
    location.reload();
});
