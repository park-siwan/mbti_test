// import {propertyDesc} from './Data.js';
// console.log(propertyDesc.ISTJ);
const form = document.querySelector('#form');
const leftButton = document.querySelector('#leftButton');
const rightButton = document.querySelector('#rightButton');
const title = document.querySelector('#title');
const subTitle = document.querySelector('#subTitle');
const questionCount = document.querySelector('#questionCount');
const questionsAmount = document.querySelector('#questionsAmount');

const span = document.createElement('span');
const div = document.createElement('div');


//데이터 보관소
let mbti = {
  count:0,
  leftButtonCount:0,
  rightButtonCount:0,
  part1 : {
    E:0,
    I:0,
  },
  part2 : {
    S:0,
    N:0,
  },
  part3 : {
    T:0,
    F:0,
  },
  part4 : {
    J:0,
    P:0,
  },
  type:[]
};

let type ='';

//감별기
function part1End(){
  //part1(E/I)
  if(mbti.leftButtonCount > mbti.rightButtonCount){
    mbti.part1.E = 1;
    console.log(`PART-1 : E`)
    mbti.type.push('E');
  } else {
    mbti.part1.I = 1;
    console.log(`PART-1 : I`)
    mbti.type.push('I');
  }
}

function part2End(){
  //part2(S/N)
  if(mbti.leftButtonCount > mbti.rightButtonCount){
    mbti.part2.S = 1;
    console.log(`PART-2 : S`)
    mbti.type.push('S');
  } else {
    mbti.part2.N = 1;
    console.log(`PART-2 : N`)
    mbti.type.push('N');
  }
}

function part3End(){
  //part3(T/F)
  if(mbti.leftButtonCount > mbti.rightButtonCount){
    mbti.part3.T = 1;
    console.log(`PART-3 : T`)
    mbti.type.push('T');
  } else {
    mbti.part3.F = 1;
    console.log(`PART-3 : F`)
    mbti.type.push('F');
  }
}

function part4End(){
  //part4(J/P)
  if(mbti.leftButtonCount > mbti.rightButtonCount){
    mbti.part4.J = 1;
    console.log(`PART-4 : J`)
    mbti.type.push('J');
  } else {
    mbti.part4.P = 1;
    console.log(`PART-4 : P`)
    mbti.type.push('P');
  }
}

//태그 생성기 : 진단서 생성시 사용
//진단서 화면 출력기 : mbti데이터 감별 - 출력기로 전달
function testDone(){
  title.textContent = `당신은 "${type}" 입니다.`;
  subTitle.textContent = '';
  div.setAttribute('id','descForm');
  form.after(div);
  const descForm = document.querySelector('#descForm');
  span.setAttribute('id','desc');
  descForm.append(span);
  const desc = document.querySelector('#desc');
  
  if(type === 'ISTJ'){
    desc.innerHTML = propertyDesc.ISTJ;
  } else if (type === 'ISFJ') {
    desc.innerHTML = propertyDesc.ISFJ;
  } else if (type === 'INFJ') {
    desc.innerHTML = propertyDesc.INFJ;
  } else if (type === 'INTJ') {
    desc.innerHTML = propertyDesc.INTJ;
  } else if (type === 'ISTP') {
    desc.innerHTML = propertyDesc.ISTP;
  } else if (type === 'ISFP') {
    desc.innerHTML = propertyDesc.ISFP;
  } else if (type === 'INFP') {
    desc.innerHTML = propertyDesc.INFP;
  } else if (type === 'INTP') {
    desc.innerHTML = propertyDesc.INTP;
  } else if (type === 'ESTP') {
    desc.innerHTML = propertyDesc.ESTP;
  } else if (type === 'ESFP') {
    desc.innerHTML = propertyDesc.ESFP;
  } else if (type === 'ENFP') {
    desc.innerHTML = propertyDesc.ENFP;
  } else if (type === 'ENTP') {
    desc.innerHTML = propertyDesc.ENTP;
  } else if (type === 'ESTJ') {
    desc.innerHTML = propertyDesc.ESTJ;
  } else if (type === 'ESFJ') {
    desc.innerHTML = propertyDesc.ESFJ;
  } else if (type === 'ENFJ') {
    desc.innerHTML = propertyDesc.ENFJ;
  } else if (type === 'ENTJ') {
    desc.innerHTML = propertyDesc.ENTJ;
  }
}

//질문자 : 카운팅 데이터를 받아서 적절한 타이밍에 질문하기
  //part 1-1
function questioner() {
  //part1(E/I)

  if(mbti.count === 0){
    leftButton.lastChild.textContent = '나는 말하기를 좋아해 실수할때가 종종 있다.';
    rightButton.lastChild.textContent = '나는 말이 없어 주변사람들이 답답할 때가 있다.';
  } else if(mbti.count === 1) {
    leftButton.lastChild.textContent = '나는 새로운 사람을 만나도 어색하지 않다.';
    rightButton.lastChild.textContent = '나는 모르는 사람을 만나는 일이 피곤하다.';
  } else if(mbti.count === 2) {
    leftButton.lastChild.textContent = '나는 말하면서 생각하고 대화도중 결심할 때가 있다.';
    rightButton.lastChild.textContent = '나는 의견을 말하기에 앞서 신중히 생각하는 편이다.';
    //part2(S/N)
  } else if(mbti.count === 3) {
    part1End();
    leftButton.lastChild.textContent = '나는 현실적이다.';
    rightButton.lastChild.textContent = '나는 미래지향적이다.';
    
  } else if(mbti.count === 4) {
    leftButton.lastChild.textContent = '나는 경험으로 판단한다.';
    rightButton.lastChild.textContent = '나는 떠오르는 직관으로 판단한다.';
  } else if(mbti.count === 5) {
    leftButton.lastChild.textContent = '나는 사실적 묘사를 잘한다.';
    rightButton.lastChild.textContent = '나는 추상적 표현을 잘한다.';
    //part3(T/F)
  } else if(mbti.count === 6) {
    leftButton.lastChild.textContent = '나는 분석적이다.';
    rightButton.lastChild.textContent = '나는 감수성이 풍부하다.';
    part2End();
  } else if(mbti.count === 7) {
    leftButton.lastChild.textContent = '나는 객관적이다.';
    rightButton.lastChild.textContent = '나는 공감적이다.';
  } else if(mbti.count === 8) {
    leftButton.lastChild.textContent = '나는 감정이 치우치지 않고 의사결정을 한다.';
    rightButton.lastChild.textContent = '나는 상황을 생각하며 의사결정한다.';
    //part4(J/P)
  } else if(mbti.count === 9) {
    part3End();
    leftButton.lastChild.textContent = '나는 결정에 대해서 잘 변경하지 않는 편이다.';
    rightButton.lastChild.textContent = '나는 나는 결정에 대해서 융통성이 있는 편이다.';
  } else if(mbti.count === 10) {
    leftButton.lastChild.textContent = '나는 계획에 의해서 일을 처리하는 편이다.';
    rightButton.lastChild.textContent = '나는 마지막에 임박했을때 일을 처리하는 편이다.';
  } else if(mbti.count === 11) {
    leftButton.lastChild.textContent = '나는 계획된 여행이 편하다.';
    rightButton.lastChild.textContent = '나는 갑자기 떠나는 여행이 편하다. ';
    //done
  } else if(mbti.count === 12) {
    leftButton.remove();
    rightButton.remove();
    questionCount.remove();
    questionsAmount.remove();
    part4End();
    type = mbti.type.join('');
    console.log(type);
    testDone();
  }
}

//이벤트 동작
function leftButtonSubmit() {
    mbti.count += 1;
    questionCount.textContent = mbti.count;
    mbti.leftButtonCount += 1;
  // console.log(`leftCount : ${mbti.leftButtonCount}`)
  console.log(`count : ${mbti.count}`)
  questioner();
}

function rightButtonSubmit() {
  mbti.count += 1;
  questionCount.textContent = mbti.count;
  mbti.rightButtonCount += 1;
  // console.log(`rightCount : ${mbti.rightButtonCount}`)
  console.log(`count : ${mbti.count}`)
  questioner();
}

//이벤트 리스너 등록
leftButton.addEventListener('click', leftButtonSubmit);
rightButton.addEventListener('click', rightButtonSubmit);

questioner();