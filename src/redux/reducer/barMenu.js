import { CHANGE_PRICE } from "../actions";

const initialState = {
  coctailMenu: [
    {
      id: 1,
      name: "Касабланка",
      ingridients: [
        "De Kupyer Advoocat",
        "Горілка",
        "Лимонний сік",
        "Апельсиновий сік",
      ],
      price: 0,
    },
    {
      id: 2,
      name: "Кава Адвокат",
      ingridients: [
        "De Kupyer Advoocat",
        "De Kupyer Apricot Brandy",
        "Еспресо",
        "Збиті вершки",
      ],
      price: 0,
    },
    {
      id: 3,
      name: "Рай",
      ingridients: ["De Kupyer Apricot Brandy", "Джин", "Апельсиновий сік"],
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
        "Апельсинов сік",
        "Банановий сік",
        "Анасовий сік",
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
