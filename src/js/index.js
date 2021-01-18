import 'reset-css';
import '../scss/main.scss';
import Navigation from './Navigation';
import CategoryGenerator from './CategoryGenerator';
import { Game } from './Game';
import Statistic from './Statistic';
import Switcher from './Switcher';

Statistic.init();

CategoryGenerator.addCategories();

Navigation.createNavigation();

const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', Navigation.toggleNavigation);

const navigationAside = document.getElementById('navigation-aside');
navigationAside.addEventListener('click', Navigation.toggleNavigation);

const switcher = document.querySelector('#switcher label');
switcher.addEventListener('click', Switcher.switchApp);

const startBtns = document.querySelectorAll('.category .btn__start');
startBtns.forEach((btn) => btn.addEventListener('click', Game.startGame));
