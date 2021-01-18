import Card from '../Card';
import Helper from '../helpers';
import GameState from './GameState';
import SoundGenerator from '../SoundGenerator';
import { SCORE_MAX_SIZE, TIME_INTERVALS } from '../const';
import Statistic from '../Statistic';
import Switcher from '../Switcher';

const gameState = new GameState();
const sounds = new SoundGenerator();

export default class Game {
  static switchToTrain() {
    const allCards = document.querySelectorAll('.category .card');

    allCards.forEach((card) => {
      card.classList.remove('card--in-play');
      card.addEventListener('click', Card.playAudio);
      card.removeEventListener('click', Game.checkAnswer);
      Card.markCardsAsTrain();
    });

    Game.stopGame();
    Helper.showStartButtons();
  }

  static startGame(event) {
    Helper.showScoreContainer();
    gameState.clearErrors();
    const categoryIndex = event.target.value;
    const cards = document.querySelectorAll(`#category-${categoryIndex} .card`);

    cards.forEach((card) => {
      card.addEventListener('click', Game.checkAnswer);
    });

    const shuffledCards = Helper.shuffleArray(cards);
    gameState.setCards(shuffledCards);

    Helper.hideStartButtons();
    Helper.showRepeatButtons();

    Game.nextStep();
  }

  static stopGame() {
    const isPlaying = Switcher.getSwitchState();

    if (isPlaying) {
      Helper.hideRepeatButtons();
      Helper.clearScoreContainer();
      Helper.hideScoreContainer();
      gameState.clearErrors();
      Helper.showStartButtons();
    }
  }

  static playCardFromList() {
    const actualCard = gameState.getActualCard();
    Card.playAudio.call(actualCard);
  }

  static nextStep() {
    Game.playCardFromList();

    const repeatBtn = document.querySelector('.category--active .btn__repeat');

    repeatBtn.addEventListener('click', this.playSoundHandler);
  }

  static playSoundHandler() {
    const actualCard = gameState.getActualCard();
    Card.playAudio.call(actualCard);
  }

  static checkAnswer() {
    const actualCard = gameState.getActualCard();
    const word = actualCard.querySelector('h3').innerText;

    if (actualCard === this) {
      Card.markCardAsSucceed(this);
      sounds.correctSound.play();
      Game.removeSucceedCard();
      Game.addPoint(true);
      Game.checkGameState();
      Statistic.increaseValue(word, 'play');
    } else {
      sounds.errorSound.play();
      gameState.increaseErrors();
      Game.addPoint();
      Statistic.increaseValue(word, 'errors');
    }
  }

  static checkGameState() {
    if (gameState.cards.length) {
      setTimeout(() => {
        Game.nextStep();
      }, TIME_INTERVALS.halfSecond);
    } else {
      Game.congratulateUser();
    }
  }

  static removeSucceedCard() {
    gameState.cards.shift();
  }

  static congratulateUser() {
    if (gameState.errors) {
      Helper.showFailedPopup(gameState.errors);
      setTimeout(() => {
        sounds.failureSound.play();
      }, TIME_INTERVALS.oneSecond);
    } else {
      Helper.showSucceedPopup();
      setTimeout(() => {
        sounds.successSound.play();
      }, TIME_INTERVALS.oneSecond);
    }

    setTimeout(Helper.redirectToMainPage, TIME_INTERVALS.fiveSeconds);

    setTimeout(() => {
      Card.markCardsAsTrain();
      Helper.showStartButtons();
      Helper.hideVisiblePopup();
    }, TIME_INTERVALS.fiveSeconds);
  }

  static addPoint(isSucceed) {
    const isScoreContainerFull = Game.checkMaxScoreSize();

    if (isScoreContainerFull) {
      Helper.clearScoreContainer();
    }

    const point = document.createElement('div');
    point.classList.add('score__item');

    if (isSucceed) {
      point.classList.add('score__item--succeed');
    }

    const score = document.getElementById('score');

    score.appendChild(point);
  }

  static checkMaxScoreSize() {
    const scores = document.querySelectorAll('.score__item');
    return scores.length >= SCORE_MAX_SIZE;
  }
}
