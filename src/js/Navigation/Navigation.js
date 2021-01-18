import {
  NAVIGATION,
  NAVIGATION_INDEX,
  STATISTIC_INDEX,
  NAVIGATION_ACTIVE_LINK_CLASS,
} from '../const';
import Hamburger from '../Hamburger';
import Statistic from '../Statistic';
import Helper from '../helpers';
import { Game } from '../Game';

export default class Navigation {
  static createNavigationItem(innerText, pageIndex) {
    const li = document.createElement('li');
    li.classList.add('navigation__item');

    const a = document.createElement('a');
    a.classList.add('navigation__link');

    if (pageIndex === NAVIGATION_INDEX) {
      a.classList.add('navigation__link--active');
    }

    if (pageIndex === STATISTIC_INDEX) {
      a.addEventListener('click', Navigation.statisticNavigationItemHandler);
    }

    a.setAttribute('data-page', pageIndex);
    a.innerText = innerText;

    a.addEventListener('click', Navigation.navigationItemHandler);

    li.appendChild(a);
    return li;
  }

  static createNavigation() {
    const navigationList = document.querySelector('#navigation-aside .navigation__list');

    NAVIGATION.forEach((category, index) => {
      const item = Navigation.createNavigationItem(category, index);
      navigationList.appendChild(item);
    });
  }

  static toggleNavigation(event) {
    const { classList } = event.target;
    const isForbidToToggle = (
      classList.contains('navigation__container')
      || classList.contains('navigation__list')
      || classList.contains('navigation__item')
    );

    if (!isForbidToToggle) {
      const navigationAside = document.getElementById('navigation-aside');
      navigationAside.classList.toggle('navigation--visible');
      Hamburger.toggleHamburger(event);
    }
  }

  static toggleNavigationItem(event) {
    const activeItem = Navigation.getActiveNavigationLink();
    Navigation.removeActiveNavigationLinkClass(activeItem);
    Navigation.addActiveNavigationLinkClass(event.target);
  }

  static toggleNavigationItemShadow(pageIndex) {
    const activeItem = Navigation.getActiveNavigationLink();
    Navigation.removeActiveNavigationLinkClass(activeItem);

    const newActiveItem = document.querySelector(`#navigation-aside .navigation__link[data-page="${pageIndex}"]`);
    Navigation.addActiveNavigationLinkClass(newActiveItem);
  }

  static getActiveNavigationLink() {
    const activeItem = document.querySelector(`#navigation-aside .${NAVIGATION_ACTIVE_LINK_CLASS}`);
    return activeItem;
  }

  static removeActiveNavigationLinkClass(elem) {
    elem.classList.remove(NAVIGATION_ACTIVE_LINK_CLASS);
  }

  static addActiveNavigationLinkClass(elem) {
    elem.classList.add(NAVIGATION_ACTIVE_LINK_CLASS);
  }

  static createNavigationPageItem(innerText, pageIndex) {
    const li = document.createElement('li');
    li.classList.add('navigation__item');

    const a = document.createElement('a');
    a.classList.add('navigation__link');

    if (pageIndex === 0) {
      a.classList.add('navigation__link--active');
    }

    a.setAttribute('data-page', pageIndex);
    a.innerText = innerText;

    const asideNavItemToggler = () => {
      Navigation.toggleNavigationItemShadow(pageIndex);
    };

    a.addEventListener('click', Navigation.togglePage);
    a.addEventListener('click', asideNavItemToggler);

    li.appendChild(a);
    return li;
  }

  static togglePage(event) {
    const className = 'category--active';
    const activePage = document.querySelector(`.${className}`);
    const pageNumber = event.target.getAttribute('data-page');

    activePage.classList.remove(className);
    const newActivePage = document.getElementById(`category-${pageNumber}`);
    newActivePage.classList.add(className);
  }

  static navigationItemHandler(event) {
    Navigation.toggleNavigationItem(event);
    Navigation.togglePage(event);
    Game.stopGame();
  }

  static statisticNavigationItemHandler() {
    Statistic.reloadStatisticTable();
    Statistic.reloadRepeatCategory();
    Helper.dropColsSortOrder();
  }
}
