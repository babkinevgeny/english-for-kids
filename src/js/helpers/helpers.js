import Card from '../Card';

export default class Helper {
  static shuffleArray(arr) {
    const suffledArr = [...arr];

    for (let i = suffledArr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [suffledArr[i], suffledArr[j]] = [suffledArr[j], suffledArr[i]];
    }

    return suffledArr;
  }

  static showSucceedPopup() {
    const popupSucceed = document.querySelector('.popup--succeed');
    popupSucceed.classList.add('popup--visible');
  }

  static showFailedPopup(errors) {
    const popupFailed = document.querySelector('.popup--failed');
    const errorsContainer = popupFailed.querySelector('#errors');
    errorsContainer.innerText = errors;
    popupFailed.classList.add('popup--visible');
  }

  static hideVisiblePopup() {
    const visiblePopup = document.querySelector('.popup--visible');
    visiblePopup.classList.remove('popup--visible');
  }

  static showStartButtons() {
    const startButtons = document.querySelectorAll('.btn__start');

    startButtons.forEach((btn) => btn.classList.add('btn__start--visible'));
  }

  static hideStartButtons() {
    const startButtons = document.querySelectorAll('.btn__start--visible');

    startButtons.forEach((btn) => btn.classList.remove('btn__start--visible'));
  }

  static showRepeatButtons() {
    const repeatButtons = document.querySelectorAll('.btn__repeat');

    repeatButtons.forEach((btn) => btn.classList.toggle('btn__repeat--visible'));
  }

  static hideRepeatButtons() {
    const repeatButtons = document.querySelectorAll('.btn__repeat--visible');

    repeatButtons.forEach((btn) => btn.classList.toggle('btn__repeat--visible'));
  }

  static clearScoreContainer() {
    const score = document.getElementById('score');
    score.innerHTML = '';
  }

  static showScoreContainer() {
    const score = document.getElementById('score');
    score.classList.add('score--visible');
  }

  static hideScoreContainer() {
    const score = document.getElementById('score');
    score.classList.remove('score--visible');
  }

  static redirectToMainPage() {
    const navigationLink = document.querySelector('.navigation__link[data-page="0"]');
    const hamburger = document.getElementById('hamburger');

    navigationLink.click();
    hamburger.click();
  }

  static prepareCards() {
    const allCards = document.querySelectorAll('.category .card:not(.card--in-play)');

    allCards.forEach((card) => {
      card.classList.add('card--in-play');
      card.removeEventListener('click', Card.playAudio);
    });
  }

  static dropColsSortOrder(excludeItem) {
    const headerCols = Array.from(document.querySelectorAll('.col--header'));
    const filteredHeaderCols = headerCols.filter((col) => col !== excludeItem);
    filteredHeaderCols.forEach((col) => col.setAttribute('data-sort-order', null));
  }
}
