export default class GameState {
  constructor() {
    this.cards = [];
    this.errors = 0;
  }

  setCards(newCards) {
    this.cards = [...newCards];
  }

  increaseErrors() {
    this.errors += 1;
  }

  clearErrors() {
    this.errors = 0;
  }

  getActualCard() {
    return this.cards[0];
  }
}
