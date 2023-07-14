import { CHANGE_PRICE } from "../actions";

const initialState = {
  lemonades: [
    {
      id: 198,
      name: "Мохіто безалкогольний (свіжа м'ята, цукровий сир, лайми, содова)",
      price: 0,
    },
    {
      id: 199,
      name: "Класичний (апельсини, лимони, цукровий сироп, апельсиновий сік, содова)",
      price: 0,
    },
    {
      id: 200,
      name: "Ягідний (ягідки, цукровий сироп, ягідний сік, содова)",
      price: 0,
    },
    {
      id: 201,
      name: "Освіжаючий (свіжа м'ята, лимони, цукровий сироп, спрайт)",
      price: 0,
    },
  ],

  iceTea: [
    {
      id: 202,
      name: "Крижана нірвана (холодний зелений чай із свіжим ківі)",
      price: 0,
    },
    {
      id: 203,
      name: "Крижаний чорний (холодний чорний чай iз лимоном)",
      price: 0,
    },
    {
      id: 204,
      name: "Фруктовий Рай (холодний фруктовий чай ягід та свіжими шматочками банана)",
      price: 0,
    },
  ],

  freshes: [
    {
      id: 205,
      name: "Апельсиновий фреш (250 ml)",
      price: 0,
    },
    {
      id: 206,
      name: "Грейпфрутовий фреш (250 ml)",
      price: 0,
    },
    {
      id: 207,
      name: "Лимонний фреш (250 ml)",
      price: 0,
    },
    {
      id: 208,
      name: "Яблучний фреш (250 ml)",
      price: 0,
    },
    {
      id: 209,
      name: "Моркв'яний фреш (250 ml)",
      price: 0,
    },
    {
      id: 210,
      name: "Яблучно-буряковий фреш з імбирем (250 ml)",
      price: 0,
    },
  ],

  desert: [
    {
      id: 211,
      name: "Полуниця у пломбірі (три кульки пломбіру та полуничного джему з вершками)",
      price: 0,
    },
    {
      id: 212,
      name: "Вишневе озеро (три кульки пломбіру та вишневого джему з вишнями)",
      price: 0,
    },
    {
      id: 213,
      name: "Горіхові ласощі (горіхове морозиво з мигдалем та арахисом у шоколадному coyci)",
      price: 0,
    },
    {
      id: 214,
      name: "Персикова ніч (три кульки пломбіру зі шматочками персик у фруктовому соусі)",
      price: 0,
    },
    {
      id: 215,
      name: "Тропічний дощ (три кульки пломбіру зі шматочками банана апельсина та ківі і вершками)",
      price: 0,
    },
    {
      id: 216,
      name: "Мокамба (дві кульки шоколадного морозива із шо- коладним соусом, вершками та меленою кавою)",
      price: 0,
    },
  ],
};

const lemonadeDrink = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRICE: {
      const { id, newPrice } = action.payload;

      const updatedLemonade = Object.keys(state).reduce((acc, category) => {
        const updatedCategory = state[category].map((drink) => {
          if (drink.id === id) {
            return {
              ...drink,
              price: newPrice,
            };
          }
          return drink;
        });
        return {
          ...acc,
          [category]: updatedCategory,
        };
      }, {});

      return {
        ...state,
        ...updatedLemonade,
      };
    }
    default:
      return state;
  }
};

export default lemonadeDrink;
