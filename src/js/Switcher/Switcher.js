import { Game } from '../Game';
import Helper from '../helpers';

export default class Switcher {
  static switchApp() {
    const isPlaying = !Switcher.getSwitchState();
    if (isPlaying) {
      Helper.prepareCards();
      Helper.showStartButtons();
    } else {
      Game.switchToTrain();
      Helper.hideStartButtons();
    }
  }

  static getSwitchState() {
    const checkbox = document.getElementById('switcher-input');
    return checkbox.checked;
  }
}
