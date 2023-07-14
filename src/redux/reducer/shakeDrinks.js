import { CHANGE_PRICE } from "../actions";

const initialState = {
  shakes: [
    {
      id: 137,
      name: "Колумбійський банан",
      price: 0,
    },
    {
      id: 138,
      name: "Рафаелло",
      price: 0,
    },
    {
      id: 139,
      name: "Фрапе",
      price: 0,
    },
    {
      id: 140,
      name: "Фрапе зі згущеним молоком",
      price: 0,
    },
    {
      id: 141,
      name: "Фрапе з сиропом",
      price: 0,
    },
    {
      id: 142,
      name: "Фреска банан",
      price: 0,
    },
    {
      id: 143,
      name: "Фреска полуниця",
      price: 0,
    },
    {
      id: 144,
      name: "Фреска карамель",
      price: 0,
    },
    {
      id: 145,
      name: "Фреска горіх",
      price: 0,
    },
    {
      id: 146,
      name: "Шейкерато згущене молоко",
      price: 0,
    },
    {
      id: 147,
      name: "Шейкерато шоколад",
      price: 0,
    },
    {
      id: 148,
      name: "Шейкерато карамель",
      price: 0,
    },
    {
      id: 149,
      name: "Шейкерато сироп",
      price: 0,
    },
    {
      id: 150,
      name: "Молочний коктейль (350 ml)",
      price: 0,
    },
    {
      id: 151,
      name: "Молочний коктейль (350 ml)",
      price: 0,
    },
    {
      id: 152,
      name: "Шоколадний Молочний коктейль (350 ml)",
      price: 0,
    },
    {
      id: 153,
      name: "Банановий Молочний коктейль (350 ml)",
      price: 0,
    },
    {
      id: 154,
      name: "Карамельний Молочний коктейль (350 ml)",
      price: 0,
    },
    {
      id: 155,
      name: "Полунично-банановий Молочний коктейль (350 ml)",
      price: 0,
    },
    {
      id: 156,
      name: "Фруктовий шейк Ананасовий (300 ml)",
      price: 0,
    },
    {
      id: 157,
      name: "Фруктовий шейк Тропічний (300 ml)",
      price: 0,
    },
    {
      id: 158,
      name: "Фруктовий шейк М'ятний (300 ml)",
      price: 0,
    },
    {
      id: 159,
      name: "Фруктовий шейк Манго-банан (300 ml)",
      price: 0,
    },
    {
      id: 160,
      name: "Фруктовий шейк Персик-апельсин (300 ml)",
      price: 0,
    },
    {
      id: 161,
      name: "Ягідний молочний коктейль (300 ml)",
      price: 0,
    },
    {
      id: 162,
      name: "Полуничний молочний коктейль (300 ml)",
      price: 0,
    },
    {
      id: 163,
      name: "Ванільний молочний коктейль (300 ml)",
      price: 0,
    },
    {
      id: 164,
      name: "Шоколадний молочний коктейль (300 ml)",
      price: 0,
    },
    {
      id: 165,
      name: "Банановий молочний коктейль (300 ml)",
      price: 0,
    },
    {
      id: 166,
      name: "Кокосовий молочний коктейль (300 ml)",
      price: 0,
    },
    {
      id: 167,
      name: "Чорнично-грейпфрутовий смузі (200 ml)",
      price: 0,
    },
    {
      id: 168,
      name: "Яблучний освіжаючий смузі (200 ml)",
      price: 0,
    },
    {
      id: 169,
      name: "Апельсин-банан-кiвi смузі (200 ml)",
      price: 0,
    },
    {
      id: 170,
      name: "Манго-банан-ківі смузі (200 ml)",
      price: 0,
    },
  ],
  coldAlco: [
    {
      id: 171,
      name: "Крижаний Бейліз (220 ml) (кава, лікер Bailey's, лікер Kahlua, морозиво)",
      price: 0,
    },
    {
      id: 172,
      name: "Королівське глясе (220 ml) (кава, молоко, лікер Bailey's, морозиво)",
      price: 0,
    },
    {
      id: 173,
      name: "Кавова Піна Колада (220 ml) (кава, молоко, лікер Pina Colada, морозиво)",
      price: 0,
    },
  ],
};

const shakeDrinks = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRICE: {
      const { id, newPrice } = action.payload;

      const updatedAlco = Object.keys(state).reduce((acc, category) => {
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
        ...updatedAlco,
      };
    }
    default:
      return state;
  }
};

export default shakeDrinks;
