import { CHANGE_PRICE } from "../actions";

const initialState = {
  coctails: [
    {
      id: 217,
      name: "Кривава Мері",
      ingridients: ["Горілка", "Томатний сік", "Прянощі"],
      price: 0,
    },
    {
      id: 218,
      name: "Мохіто",
      ingridients: ["Ром", "М'ята", "Лайм", "Содова", "Сироп"],
      price: 0,
    },
    {
      id: 219,
      name: "Оргазм",
      ingridients: ["De Kuyper Triple Sec", "Бейліз", "Вершки"],
      price: 0,
    },
    {
      id: 220,
      name: "Текіла Бум",
      ingridients: ["Текіла", "Швепс"],
      price: 0,
    },
    {
      id: 221,
      name: "Амфетамін",
      ingridients: ["De Kuyper Creme de Menthe", "Самбука", "Абсент"],
      price: 0,
    },
    {
      id: 222,
      name: "B-53",
      ingridients: ["De Kuyper Creme de Cafe", "Бейліз", "Абсент"],
      price: 0,
    },
    {
      id: 223,
      name: "Медуза",
      ingridients: ["De Kuyper Blue Curacao", "Самбука", "Бейліз"],
      price: 0,
    },
    {
      id: 224,
      name: "BMW",
      ingridients: ["Бейліз", "Малібу", "Bicкi"],
      price: 0,
    },
    {
      id: 225,
      name: "3 Хвилі",
      ingridients: ["De Kuyper Creme de Cafe", "Бейліз", "Еспресо"],
      price: 0,
    },
    {
      id: 226,
      name: "Пікассо",
      ingridients: [
        "De Kuyper Creme de Menthe",
        "Sambuca",
        "Bailey's",
        "Гренадін",
      ],
      price: 0,
    },
    {
      id: 227,
      name: "Відьмацьке зілля",
      ingridients: [
        "Kuyper Blue Curacao",
        "De Kyuper Creme de Banana",
        "Tequila",
      ],
      price: 0,
    },
    {
      id: 228,
      name: "Опісля восьмої",
      ingridients: ["Kaluha", "De Kuyper Creme de Menth", "Bailey's"],
      price: 0,
    },
    {
      id: 229,
      name: "Банана спліт",
      ingridients: [
        "Kahlua",
        "De Kuyper Creme de Banana",
        "De Kuyper Wild Strawberry",
        "Збиті вершки",
      ],
      price: 0,
    },
    {
      id: 230,
      name: "Курчатко",
      ingridients: ["Sambuca", "Bailey's", "Advocaat", "Гренадін"],
      price: 0,
    },
    {
      id: 231,
      name: "Ірландський прапор",
      ingridients: [
        "De Kuyper Creme de Menthe",
        "Bailey's",
        "Ірландський віскі (Бренді)",
      ],
      price: 0,
    },
    {
      id: 232,
      name: "Сльози змії",
      ingridients: ["Tequila", "Kahlua", "Лимонний фреш"],
      price: 0,
    },
    {
      id: 233,
      name: "Рідкий Опіум",
      ingridients: ["Sambuca", "Kahlua", "Absinth", "Пів апельсина"],
      price: 0,
    },
    {
      id: 234,
      name: "Божевільний Апельсин",
      ingridients: ["Sambuca", "Absinth", "Becherovka", "Пів апельсина"],
      price: 0,
    },
    {
      id: 235,
      name: "Палаючий Ламборджині",
      ingridients: [
        "De Kuyper Blue Curacao",
        "Bailey's",
        "Cointreau",
        "Kahlua",
        "Sambuca",
      ],
      price: 0,
    },
  ],
};

const coctailFromRest = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRICE:
      return {
        ...state,
        coctails: state.coctails.map((product) =>
          product.id === action.payload.id
            ? { ...product, price: action.payload.newPrice }
            : product
        ),
      };
    default:
      return state;
  }
};

export default coctailFromRest;
