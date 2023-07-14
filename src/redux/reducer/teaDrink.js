import { CHANGE_PRICE } from "../actions";

const initialState = {
  fruitTea: [
    {
      id: 174,
      name: "Strawberry Flip / Полуничний Залп",
      price: 0,
    },
    {
      id: 175,
      name: "Sweet November / Солодкий Листопад",
      price: 0,
    },
    {
      id: 176,
      name: "Palm Beach / Палм Бич",
      price: 0,
    },
    {
      id: 177,
      name: "Almond Pie / Альмонд Пай",
      price: 0,
    },
  ],

  herbTea: [
    {
      id: 178,
      name: "Wellness Cup / Велнес Кап",
      price: 0,
    },
    {
      id: 179,
      name: "Rooibush Cream Caramel / Ройбуш 'Крем-карамель'",
      price: 0,
    },
    {
      id: 180,
      name: "Herbs and Ginger / Трави та імбир",
      price: 0,
    },
    {
      id: 181,
      name: "Honeybush Honig Supreme / Ханибуш Кениг Суприм",
      price: 0,
    },
    {
      id: 182,
      name: "Morning Star / Ранкова Зірка",
      price: 0,
    },
  ],

  forTea: [
    {
      id: 183,
      name: "Згущене молоко",
      price: 0,
    },
    {
      id: 184,
      name: "Імбир",
      price: 0,
    },
    {
      id: 185,
      name: "Мед",
      price: 0,
    },
    {
      id: 186,
      name: "Лимон",
      price: 0,
    },
    {
      id: 187,
      name: "М'ята",
      price: 0,
    },
    {
      id: 188,
      name: "Джем в асортименті",
      price: 0,
    },
  ],
  blackTea: [
    {
      id: 189,
      name: "Golden Assam Sankar FTGFOP / Голден Ассам Санкар",
      price: 0,
    },
    {
      id: 190,
      name: "Imperial Earl Grey / Імперіал Ерл Грей",
      price: 0,
    },
    {
      id: 191,
      name: "Sweet Rosie o'Grady / Солодка Розі О'Грейді",
      price: 0,
    },
    {
      id: 192,
      name: "Ceylon OP1 Kanneliya / Цейлон OP1 Каннелія",
      price: 0,
    },
    {
      id: 193,
      name: "Spice Punch / Пряний Пунш",
      price: 0,
    },
  ],

  greenTea: [
    {
      id: 194,
      name: "Royal Pai Mu Tan / Королівський Пай Му Тан",
      price: 0,
    },
    {
      id: 195,
      name: "Jasmine Ting Yuan / Жасмін Тінг Юань",
      price: 0,
    },
    {
      id: 196,
      name: "Ginseng Flight of the Dragon / Женьшень політ дракона",
      price: 0,
    },
    {
      id: 197,
      name: "Milk Oolong / Молочний улун",
      price: 0,
    },
  ],
};

const teaDrink = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRICE: {
      const { id, newPrice } = action.payload;

      const updatedTea = Object.keys(state).reduce((acc, category) => {
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
        ...updatedTea,
      };
    }
    default:
      return state;
  }
};

export default teaDrink;
