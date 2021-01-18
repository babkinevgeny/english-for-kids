export default class SoundGenerator {
  constructor() {
    this.errorSound = SoundGenerator.createSound('error');
    this.correctSound = SoundGenerator.createSound('correct');
    this.successSound = SoundGenerator.createSound('success');
    this.failureSound = SoundGenerator.createSound('failure');
  }

  static createSound(fileName) {
    const sound = new Audio(`assets/audio/${fileName}.mp3`);
    return sound;
  }
}
