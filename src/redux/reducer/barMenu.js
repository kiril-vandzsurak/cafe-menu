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
