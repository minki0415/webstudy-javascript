const countValue = document.querySelector('#value');
const countButtons = document.querySelectorAll('button');
console.dir(countValue);

let count = 0;

countButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const curTarget = event.currentTarget;
        // console.dir(curTarget); // 버튼 클릭되는지 확인

        const styles = curTarget.classList[1];
        console.log(styles);

        count = styles !== 'reset' ? (count = styles === 'decrease' ? --count : ++count) : 0;

        let countValueColor = '';
        countValueColor = count !== 0 ? (countValueColor = count > 0 ? 'green' : 'red') : 'gray';

        countValue.textContent = count;
        countValue.style.color = countValueColor;
    })
});

// let num = 0;

// countButtons[0].addEventListener('click', () => {
//     countValue.textContent = --num;    
// });

// countButtons[1].addEventListener('click', () => {
//     num = 0;
//     countValue.textContent = 0;
// });

// countButtons[2].addEventListener('click', () => {
//     countValue.textContent = ++num;
// });