import { Game } from '../Game';
import Statistic from '../Statistic';

export default class Card {
  constructor(obj) {
    return Card.createCard(obj);
  }

  static createCard(obj) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardInner = document.createElement('div');
    cardInner.classList.add('card__inner');

    const audio = document.createElement('audio');
    audio.setAttribute('src', `assets/${obj.audioSrc}`);

    const img = document.createElement('img');
    img.setAttribute('src', `assets/${obj.image}`);

    const front = document.createElement('div');
    front.classList.add('card__front');

    const word = document.createElement('h3');
    word.innerText = obj.word;

    const btn = document.createElement('button');
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      Card.swapCard(card);
      Statistic.increaseValue(obj.word, 'train');
    });

    front.appendChild(img);
    front.appendChild(word);
    front.appendChild(btn);

    const back = document.createElement('div');
    back.classList.add('card__back');

    const translation = document.createElement('div');
    translation.innerText = obj.translation;

    back.appendChild(img.cloneNode(true));
    back.appendChild(translation);

    cardInner.appendChild(front);
    cardInner.appendChild(back);
    cardInner.appendChild(audio);

    card.appendChild(cardInner);

    card.addEventListener('click', Card.playAudio);

    return card;
  }

  static playAudio() {
    if (this.classList.contains('card--swapped')) {
      return;
    }

    const audio = this.querySelector('audio');

    if (audio) {
      audio.play();
    }
  }

  static swapCard(card) {
    card.classList.toggle('card--swapped');
    card.addEventListener('mouseleave', Card.mouseoutHandler);
  }

  static mouseoutHandler(event) {
    Card.swapCard(event.target);
    event.target.removeEventListener('mouseleave', Card.mouseoutHandler);
  }

  static markCardAsSucceed(card) {
    card.classList.add('card--succeed');
    card.removeEventListener('click', Game.checkAnswer);
  }

  static markCardsAsTrain() {
    const cards = document.querySelectorAll('.card--succeed');

    cards.forEach((card) => {
      if (card.classList.contains('card--succeed')) {
        card.classList.remove('card--succeed');
      }
    });
  }
}
