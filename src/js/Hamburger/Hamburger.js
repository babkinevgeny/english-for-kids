export default class Hamburger {
  static toggleHamburger() {
    const hamburger = document.getElementById('hamburger');
    hamburger.classList.toggle('hamburger--active');
  }
}
