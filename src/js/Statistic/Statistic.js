import {
  CARDS,
  CATEGORIES,
  FIRST_TABLE_COLS,
  CATEGORY_MAX_SIZE,
  NAVIGATION,
  SORTING_ORDER,
  STATISTIC_INDICATORS,
} from '../const';
import Navigation from '../Navigation';
import Card from '../Card';
import Switcher from '../Switcher/Switcher';
import Helper from '../helpers';

export default class Statistic {
  static getStatistic() {
    try {
      const statistic = JSON.parse(localStorage.getItem('statistic')) || null;
      return statistic;
    } catch (err) {
      return null;
    }
  }

  static createStatistic() {
    const statistic = [];
    for (let i = 0; i < CATEGORIES.length; i += 1) {
      CARDS[i].forEach((card) => {
        const item = Statistic.createStatisticItem(card, i);
        statistic.push(item);
      });
    }
    return statistic;
  }

  static createStatisticItem(card, categoryIndex) {
    const item = {
      word: card.word,
      translation: card.translation,
      train: 0,
      play: 0,
      errors: 0,
      percentageOfSuccess: 0,
      category: CATEGORIES[categoryIndex],
    };

    return item;
  }

  static recordStatistic(statisticObj) {
    localStorage.setItem('statistic', JSON.stringify(statisticObj));
  }

  static init() {
    let statistic = Statistic.getStatistic();
    if (!statistic) {
      statistic = Statistic.createStatistic();
      Statistic.recordStatistic(statistic);
    }
  }

  static createStatisticPage(section) {
    section.classList.add('statistic');
    const sectionInner = section.querySelector('.category__inner');
    const table = Statistic.createStatisticTable();
    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add('statistic__btns');

    const repeatDifficultBtn = Statistic.createRepeatDifficultBtn();
    const resetBtn = Statistic.createResetBtn();

    btnWrapper.appendChild(repeatDifficultBtn);
    btnWrapper.appendChild(resetBtn);

    sectionInner.appendChild(btnWrapper);
    sectionInner.appendChild(table);
    return section;
  }

  static createStatisticTable() {
    const table = document.createElement('section');
    table.classList.add('table');

    const statistic = Statistic.getStatistic();

    const headerTable = document.createElement('header');
    headerTable.classList.add('table__header');
    const firstRow = Statistic.createHeaderRow();
    headerTable.appendChild(firstRow);

    const bodyTable = document.createElement('main');
    bodyTable.classList.add('table__body');

    statistic.forEach((item) => {
      const row = Statistic.createRow(item);
      bodyTable.appendChild(row);
    });

    table.appendChild(headerTable);
    table.appendChild(bodyTable);

    return table;
  }

  static createColumns(item) {
    const keys = Object.keys(item);

    return keys.map((key) => {
      const col = document.createElement('div');
      col.classList.add('col');
      col.innerText = item[key];
      col.setAttribute('data-name', key);

      if (typeof item[key] === 'number') {
        col.classList.add('col--number');
      }

      return col;
    });
  }

  static createRow(item) {
    const row = document.createElement('div');
    row.classList.add('row');

    const columns = Statistic.createColumns(item);

    columns.forEach((column) => row.appendChild(column));

    return row;
  }

  static createHeaderRow() {
    const row = document.createElement('div');
    row.classList.add('row');
    row.classList.add('row--header');

    FIRST_TABLE_COLS.forEach((obj) => {
      const col = document.createElement('div');
      col.classList.add('col');
      col.classList.add('col--header');
      col.innerText = obj.title;
      col.setAttribute('data-sort-key', obj.sortKey);
      col.setAttribute('data-sort-order', null);

      if (obj.type === 'number') {
        col.classList.add('col--number');
      }

      col.addEventListener('click', (event) => {
        Statistic.changeSortOrder(event.target);
        Statistic.sortStatisticBy(event.target);
      });

      row.appendChild(col);
    });

    return row;
  }

  static createResetBtn() {
    const resetBtn = document.createElement('button');
    resetBtn.classList.add('btn');
    resetBtn.innerText = 'Reset statistics';
    resetBtn.addEventListener('click', Statistic.dropStatistic);
    return resetBtn;
  }

  static increaseValue(word, key) {
    const statistic = Statistic.getStatistic();
    const statisticItemObj = statistic.find((item) => item.word === word);
    statisticItemObj[key] += 1;

    if (key === STATISTIC_INDICATORS.play || key === STATISTIC_INDICATORS.errors) {
      const { play, errors } = statisticItemObj;
      const percentage = Math.round(play / ((play + errors) / 100));
      statisticItemObj.percentageOfSuccess = percentage;
    }
    Statistic.recordStatistic(statistic);
  }

  static reloadStatisticTable() {
    let statistic = Statistic.getStatistic();

    if (!statistic) {
      statistic = Statistic.createStatistic();
      Statistic.recordStatistic(statistic);
    }

    const bodyTable = document.querySelector('.table__body');
    bodyTable.innerHTML = '';

    statistic.forEach((item) => {
      const row = Statistic.createRow(item);
      bodyTable.appendChild(row);
    });
  }

  static changeSortOrder(item) {
    const order = item.getAttribute('data-sort-order');

    if (order === SORTING_ORDER.asc) {
      item.setAttribute('data-sort-order', SORTING_ORDER.desc);
    } else if (order === SORTING_ORDER.desc) {
      item.setAttribute('data-sort-order', null);
    } else {
      item.setAttribute('data-sort-order', SORTING_ORDER.asc);
    }
  }

  static sortStatisticBy(item) {
    Helper.dropColsSortOrder(item);
    const sortKey = item.getAttribute('data-sort-key');
    const dataType = item.classList.contains('col--number') ? 'number' : 'string';
    const order = item.getAttribute('data-sort-order');
    const bodyTable = document.querySelector('.table__body');

    const rows = Array.from(bodyTable.querySelectorAll('.row'));

    if (order === 'asc') {
      rows.sort((curRow, nextRow) => {
        const curRowValue = curRow.querySelector(`.col[data-name="${sortKey}"]`).innerText;
        const nextRowValue = nextRow.querySelector(`.col[data-name="${sortKey}"]`).innerText;

        if (dataType === 'number') {
          return +curRowValue - +nextRowValue;
        }

        return curRowValue.localeCompare(nextRowValue);
      });
    } else if (order === 'desc') {
      rows.sort((curRow, nextRow) => {
        const curRowValue = curRow.querySelector(`.col[data-name="${sortKey}"]`).innerText;
        const nextRowValue = nextRow.querySelector(`.col[data-name="${sortKey}"]`).innerText;
        if (dataType === 'number') {
          return +nextRowValue - +curRowValue;
        }

        return nextRowValue.localeCompare(curRowValue);
      });
    } else {
      Statistic.reloadStatisticTable();
      return;
    }

    bodyTable.innerHTML = '';
    rows.forEach((row) => bodyTable.appendChild(row));
  }

  static dropStatistic() {
    const statistic = Statistic.createStatistic();
    Statistic.recordStatistic(statistic);
    Statistic.reloadStatisticTable();
    Statistic.reloadRepeatCategory();
    Helper.dropColsSortOrder();
  }

  static getDifficultCards() {
    const statistic = Statistic.getStatistic();
    const filteredStatistic = statistic.filter((item) => {
      const isPlayed = item.percentageOfSuccess !== 0;
      const isDifficult = item.percentageOfSuccess < 100;

      return isPlayed && isDifficult;
    });

    filteredStatistic.sort((a, b) => a.percentageOfSuccess - b.percentageOfSuccess);
    const mostDifficultItems = filteredStatistic.slice(0, CATEGORY_MAX_SIZE);
    const copyCards = CARDS.flat();
    const filteredCards = copyCards.filter((card) => (
      mostDifficultItems.some(({ word }) => word === card.word)
    ));
    return filteredCards;
  }

  static createRepeatDifficultBtn() {
    const repeatDifficultBtn = document.createElement('button');
    repeatDifficultBtn.classList.add('btn');
    repeatDifficultBtn.setAttribute('data-page', NAVIGATION.length);
    repeatDifficultBtn.innerText = 'Repeat difficult words';
    repeatDifficultBtn.addEventListener('click', Navigation.togglePage);
    return repeatDifficultBtn;
  }

  static reloadRepeatCategory() {
    const container = document.getElementById('container');
    const section = container.querySelector(`#category-${NAVIGATION.length}`);
    const sectionInner = section.querySelector('.category__inner');
    sectionInner.innerHTML = '';

    const difficultCards = Statistic.getDifficultCards();

    const btnStart = section.querySelector('.btn__start');
    btnStart.removeAttribute('disabled');

    if (difficultCards.length === 0) {
      const title = document.createElement('h2');
      title.innerText = 'Well, either you haven\'t ever play or you haven\'t errors yet.';
      sectionInner.appendChild(title);
      btnStart.setAttribute('disabled', 'disabled');
    }

    difficultCards.forEach((cardObj) => {
      const card = Card.createCard(cardObj);
      sectionInner.appendChild(card);
    });

    const isPlaying = Switcher.getSwitchState();

    if (isPlaying) {
      Helper.prepareCards();
    }
  }
}
