
const columns = document.querySelectorAll('tr');
const serije = document.querySelectorAll('.table__serije-td');


function fade () {
    columns.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('column-active');
        });
    });
}

const finish = () => {
    serije.forEach(item => {
        item.addEventListener('click', () => {
            item.querySelector('p').classList.toggle('serija-active');
           item.querySelector('img').classList.toggle('finished-active');
           
        });
    });
}

fade();
finish();
/*   item.innerHTML = '<img src="tick.svg" alt="finished" class="finished">';*/