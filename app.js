// alert('하이')
// 이미지1 태그를 선택
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const h1 = document.querySelector('h1');



const randomNumber1 = Math.floor(Math.random() * (6)) + 1;
const randomNumber2 = Math.floor(Math.random() * (6)) + 1;

img1.setAttribute('src','images/dice'+randomNumber1+'.png')
img2.setAttribute('src','images/dice'+randomNumber2+'.png')



//랜덤번호
console.log(randomNumber1)
console.log(randomNumber2)
// h1.innerText= '✌누가 이겼을까?✌' //이모지는 윈도우키 + 세미콜론

//if else문 사용

if(randomNumber1>randomNumber2){
   h1.innerText="✨플레이어1 승리✌"
}else if(randomNumber2>randomNumber1){
    h1.innerText="🎂플레이어2 승리✌"
}else {
    h1.innerText = '✌비김✌'
}

// function getRandomInt(1, 6) {
   
//     return Math.floor(Math.random() * (6)) + 1; //최댓값은 제외, 최솟값은 포함, floor는 소수점 이하 내림
//   }
  