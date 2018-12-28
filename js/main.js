window.addEventListener('load', init);

// 変数

// レベル
const levels = {
  easy: 5,
  medium: 3,
  hard: 2,
}

// レベルの変更
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word'); //h2
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

// 単語
const words = [
  'hello',
  'eminem',
  'byebye',
  'world',
  'test',
  'thanks',
  'aaronchoulai',
  'feel',
  'japan',
  'sisters',
  'noise',
  'boss',
  'macbook',
  'rubyonrails',
  'javascript',
  'snoopdoggydogg',
  'voice',
  'tokona-x',
  'programming',
  'dragon',
  'addidas',
  'nike',
  'e=mcmc',
  'happy',
  'lucky',
  'goodluck',
  'wish',
  'shouhukuteitsurube',
  'shouhukuteishouhei',
  'shouhukuteitsurukou',
  'sun',
  'go',
  'zzz',
  'zippo',
  'jazz',
  'jay-z',
  'drake',
  'kanye',
  'osaka'
];

//  Gameの初期化
function init() {
  // レベルによって秒数を正しく表示する
  seconds.innerHTML = currentLevel;
  // 単語を配列から読み込む
  showWord(words);
  // 入力した文字と表示されてる単語がマッチしてるかの呼び出し
  wordInput.addEventListener('input', startMatch);
  // カウントダウンタイマーの呼び出し,ミリ秒(1000 = 1秒)
  setInterval(countdown, 1000);
  // Gameの状態
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if(matchWords()) {
    isPlaying = true; //ゲーム中
    time = currentLevel + 1; // timeを再度セット
    showWord(words); // 新たな単語をセット
    wordInput.value = ''; // 入力枠を空にセット
    score++; // スコアをインクリメント
  }
  // ゲームオーバー時のスコア-1を0で表示させる
  if(score === -1){
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// 表示されてる単語と入力文字が一致
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'やるやん。';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}


// 選択とランダムに単語を表示
function showWord(words) {
  // wordsの配列をランダムに生成
  const randIndex = Math.floor(Math.random() * words.length);
  // ランダムな単語をh2に表示させる
  currentWord.innerHTML = words[randIndex];
}

// カウントダウンタイマー
function countdown() {
  if (time > 0) {
    time--;
  } else if(time === 0) {
    // Game is over
    isPlaying = false;
  }
  // 時間の表示
  timeDisplay.innerHTML = time;
}

// Gameの状態
function checkStatus() {
  if(!isPlaying && time === 0) {
    message.innerHTML = 'Game Overrr!!!';
    score = -1;
  }
}
