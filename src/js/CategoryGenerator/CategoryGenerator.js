import { NAVIGATION, CARDS } from '../const';
import Card from '../Card';
import Navigation from '../Navigation';
import Statistic from '../Statistic';

export default class CategoryGenerator {
  static createCategory(categoryIndex) {
    const section = document.createElement('section');
    section.classList.add('category');
    section.setAttribute('id', `category-${categoryIndex}`);

    const sectionInner = document.createElement('div');
    sectionInner.classList.add('category__inner');

    if (categoryIndex > 0 && categoryIndex !== NAVIGATION.length - 1) {
      const startGameBtn = CategoryGenerator.createStartGameButton(categoryIndex);
      const repeatBtn = CategoryGenerator.createRepeatButton();
      section.appendChild(startGameBtn);
      section.appendChild(repeatBtn);
    }

    section.appendChild(sectionInner);

    return section;
  }

  static createCategories() {
    const categories = [];

    NAVIGATION.forEach((_category, index, navArr) => {
      let section = CategoryGenerator.createCategory(index);
      const sectionInner = section.querySelector('.category__inner');

      if (index === 0) { // it's place for navigation
        section.classList.add('category--active');

        const navigationList = document.createElement('ul');
        navigationList.classList.add('navigation__list');

        NAVIGATION.forEach((category, navIndex, arr) => {
          if (navIndex === 0 || navIndex === arr.length - 1) {
            return;
          }
          const navItem = Navigation.createNavigationPageItem(category, navIndex);
          navItem.style.backgroundImage = `url(assets/${CARDS[navIndex - 1][0].image})`;
          navigationList.appendChild(navItem);
        });
        sectionInner.appendChild(navigationList);
      } else if (index === navArr.length - 1) {
        section = Statistic.createStatisticPage(section);
      } else {
        CARDS[index - 1].forEach((cardObj) => {
          const card = Card.createCard(cardObj);
          sectionInner.appendChild(card);
        });
      }

      categories.push(section);
    });

    const repeatSection = CategoryGenerator.createRepeatCategory();
    categories.push(repeatSection);
    return categories;
  }

  static createRepeatCategory() {
    const section = CategoryGenerator.createCategory(NAVIGATION.length);
    const sectionInner = section.querySelector('.category__inner');
    const difficultCards = Statistic.getDifficultCards();

    if (difficultCards.length === 0) {
      const title = document.createElement('h2');
      title.innerText = 'Well, either you haven\'t ever play or you haven\'t errors yet.';
      sectionInner.appendChild(title);
      const btnStart = section.querySelector('.btn__start');
      btnStart.setAttribute('disabled', 'disabled');
      return section;
    }

    difficultCards.forEach((cardObj) => {
      const card = Card.createCard(cardObj);
      sectionInner.appendChild(card);
    });

    const btnStart = section.querySelector('.btn__start');
    btnStart.removeAttribute('disabled');

    return section;
  }

  static addCategories() {
    const container = document.getElementById('container');
    const categories = CategoryGenerator.createCategories();

    categories.forEach((category) => container.appendChild(category));
  }

  static createStartGameButton(categoryIndex) {
    const startGameBtn = document.createElement('button');
    startGameBtn.innerText = 'Start game';
    startGameBtn.classList.add('btn');
    startGameBtn.classList.add('btn__start');
    startGameBtn.setAttribute('id', `btn-start-${categoryIndex}`);
    startGameBtn.setAttribute('value', categoryIndex);
    return startGameBtn;
  }

  static createRepeatButton() {
    const repeatBtn = document.createElement('button');
    repeatBtn.innerText = 'Repeat word';
    repeatBtn.classList.add('btn');
    repeatBtn.classList.add('btn__repeat');
    return repeatBtn;
  }
}
