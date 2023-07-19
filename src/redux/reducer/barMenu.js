import { CHANGE_PRICE } from "../actions";

const initialState = {
  coctailMenu: [
    {
      id: 2,
      name: "Касабланка",
      img: "/casablanka.jpg",
      ingridients: [
        "De Kupyer Advoocat",
        "Горілка",
        "Лимонний сік",
        "Апельсиновий сік",
      ],
      price: 0,
    },
    {
      id: 3,
      name: "Кава Адвокат",
      img: "/coffeeAdvocat.jpg",
      ingridients: [
        "De Kupyer Advoocat",
        "De Kupyer Apricot Brandy",
        "Еспресо",
        "Збиті вершки",
      ],
      price: 0,
    },
    {
      id: 4,
      name: "Рай",
      ingridients: ["De Kupyer Apricot Brandy", "Джин", "Апельсиновий сік"],
      price: 0,
    },
    {
      id: 5,
      name: "Абрикосова мрія",
      ingridients: [
        "De Kupyer Apricot Brandy",
        "De Kuyper Triple Sec",
        "Темний Ром",
        "Ананасовий сік",
      ],
      price: 0,
    },
    {
      id: 6,
      name: "Май Тай",
      ingridients: [
        "De Kupyer Apricot Brandy",
        "De Kuyper Triple Sec",
        "Світлий Ром",
        "Ананасовий сік",
        "Гренадін",
        "Лимонний фреш",
      ],
      price: 0,
    },
    {
      id: 7,
      name: "Сінгапур Слінг",
      ingridients: [
        "De Kupyer Cherry Brandy",
        "Джин",
        "Содова",
        "Гренадін",
        "Лимонний фреш",
      ],
      price: 0,
    },
    {
      id: 8,
      name: "Блакитні Гаваї",
      ingridients: [
        "De Kupyer Coconut",
        "De Kupyer Blue Curacao",
        "Ром",
        "Кокосовий сироп",
      ],
      price: 0,
    },
    {
      id: 9,
      name: "Тропіки",
      ingridients: [
        "De Kupyer Coconut",
        "De Kupyer Pisang",
        "De Kuyper Country Lane",
      ],
      price: 0,
    },
    {
      id: 10,
      name: "Мавпячі Справи",
      ingridients: [
        "De Kupyer Coconut",
        "Горілка",
        "De Kuyper Country Lane",
        "Вершки, свіжий банан",
      ],
      price: 0,
    },
    {
      id: 11,
      name: "Банановий Дайкірі",
      ingridients: [
        "De Kuvper Creme de Bananes",
        "Світлий ром",
        "Лимонний фреш",
        "Cвіжий банан",
      ],
      price: 0,
    },
    {
      id: 12,
      name: "Бананова Корова",
      ingridients: [
        "De Kuvper Creme de Bananes",
        "Світлий ром",
        "Вершки",
        "Cвіжий банан",
      ],
      price: 0,
    },
    {
      id: 13,
      name: "Багама Мама",
      ingridients: [
        "De Kuvper Creme de Bananes",
        "De Kuyper Peach Tree",
        "Ром",
        "Апельсиновий сік",
        "Банановий сік",
        "Анасовий сік",
        "Гренадін",
      ],
      price: 0,
    },
    {
      id: 14,
      name: "Ямайська Кава",
      ingridients: [
        "De Kuvper Creme de Cafe",
        "Темний Ром",
        "Еспресо",
        "Вершки",
      ],
      price: 0,
    },
    {
      id: 15,
      name: "Мексиканська Кава",
      ingridients: ["De Kuvper Creme de Cafe", "Текіла", "Еспресо", "Вершки"],
      price: 0,
    },
    {
      id: 16,
      name: "Черепашка Ніндзя",
      ingridients: ["De Kuvper Blue Curacao", "Джин", "Апельсиновий сік"],
      price: 0,
    },
    {
      id: 17,
      name: "Блакинта Лагуна",
      ingridients: [
        "De Kuvper Blue Curacao",
        "Горілка",
        "Лимонний фреш",
        "Спрайт",
      ],
      price: 0,
    },
    {
      id: 18,
      name: "Піна Колада",
      ingridients: ["De Kuyper Pina Colada", "Світлий Ром", "Ананасовий сік"],
      price: 0,
    },
    {
      id: 19,
      name: "Сік Джунглів",
      ingridients: [
        "De Kuyper Pisang",
        "Джин",
        "Лимонний фреш",
        "Апельсиновий сік",
      ],
      price: 0,
    },
    {
      id: 20,
      name: "Зелений Мексиканець",
      ingridients: ["De Kuyper Pisang", "Лимонний фреш", "Текіла"],
      price: 0,
    },
    {
      id: 21,
      name: "В-52",
      ingridients: [
        "De Kuvper Creme de Cafe",
        "De Kuvper Triple Sec",
        "Бейліз",
      ],
      price: 0,
    },
    {
      id: 22,
      name: "Хіросіма",
      ingridients: ["Самбука", "Бейліз", "Абсент", "Гренадін"],
      price: 0,
    },
    {
      id: 23,
      name: "Текіла Санрайз",
      ingridients: ["Текіла", "Апельсиновий Сік", "Гренадін"],
      price: 0,
    },
    {
      id: 24,
      name: "Маргарита",
      ingridients: ["De Kuvper Triple Sec", "Текіла", "Лимонний фреш"],
      price: 0,
    },
    {
      id: 25,
      name: "Секс на пляжі",
      ingridients: [
        "De Kuyper Peach Tree",
        "Горілка",
        "Апельсиновий сік",
        "Журавлиний морс",
      ],
      price: 0,
    },
    {
      id: 26,
      name: "Блакинті Гаваї",
      ingridients: [
        "De Kuyper Coconut",
        "De Kuyper Blue Curacao",
        "Ром",
        "Кокосовий сироп",
      ],
      price: 0,
    },
    {
      id: 27,
      name: "Тропіки",
      ingridients: [
        "De Kuyper Coconut",
        "De Kuyper Pisang",
        "De Kuyper Country Lane",
      ],
      price: 0,
    },
    {
      id: 28,
      name: "Мавпячі Справи",
      ingridients: [
        "De Kuyper Country Lane",
        "De Kuyper Coconut",
        "Горілка",
        "Вершки, свіжий банан",
      ],
      price: 0,
    },
    {
      id: 29,
      name: "Банановий Дайкірі",
      ingridients: [
        "De Kuyper Creme de Bananes",
        "Світлий ром",
        "Лимонний фреш",
        "Свіжий банан",
      ],
      price: 0,
    },
    {
      id: 30,
      name: "Бананова Корова",
      ingridients: [
        "De Kuyper Creme de Bananes",
        "Світлий ром",
        "Вершки",
        "Свіжий банан",
      ],
      price: 0,
    },
    {
      id: 31,
      name: "Багама Мама",
      ingridients: [
        "De Kuyper Creme de Bananes",
        "De Kuyper Peach Tree",
        "Ром",
        "Апельсиновий сік",
        "Банановий сік",
        "Ананасовий сік",
        "Гренадін",
      ],
      price: 0,
    },
  ],
};

const barMenu = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRICE:
      return {
        ...state,
        coctailMenu: state.coctailMenu.map((product) =>
          product.id === action.payload.id
            ? { ...product, price: action.payload.newPrice }
            : product
        ),
      };
    default:
      return state;
  }
};

export default barMenu;
