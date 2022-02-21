const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

// addEventListener 사용해서 button을 click 했을 때 button clicked!가 출력되도록
// arrow function 사용, callback함수에 직접 작성

btn.addEventListener('click', () => {
    const[r, g, b] = getRandomNumber(0, 255); // rgb  범위는 ~ 255

    const rgbColor = `rgba(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = rgbColor;
    color.textContent = rgbColor;
    color.style.color = rgbColor;

    // color.textContent = rgbColor;
    // color.style.color = rgbColor;
    // document.querySelector('.bgcolor').style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
});

// RGB 랜덥 값 추출 함수
function getRandomNumber(min, max) {
    let randomRGBArray = []    ;
    for(let i = 0 ; i <3 ; i++){
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomRGBArray.push(randomNumber)
    }
    return randomRGBArray;
}