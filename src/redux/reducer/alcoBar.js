import { CHANGE_PRICE } from "../actions";

const initialState = {
  vodka: [
    {
      id: 1,
      name: "Vodka",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
    {
      id: 2,
      name: "Vodka",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
    {
      id: 3,
      name: "Vodka",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
  ],
  cogniac: [
    {
      id: 4,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
    {
      id: 5,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
  ],
  balsam: [
    {
      id: 6,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
    {
      id: 7,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
  ],
  tequila: [
    {
      id: 8,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
    {
      id: 9,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
  ],
  whiskey: [
    {
      id: 10,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
    {
      id: 11,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
  ],
  jin: [
    {
      id: 12,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
    {
      id: 13,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
  ],
  rum: [
    {
      id: 14,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
    {
      id: 15,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
  ],
  wine: [
    {
      id: 16,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
    {
      id: 17,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
  ],
  champaign: [
    {
      id: 18,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
    {
      id: 19,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
  ],
  liquer: [
    {
      id: 20,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
    {
      id: 21,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
  ],
  liquerDeKupyer: [
    {
      id: 22,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
    {
      id: 23,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
  ],
  draftBeer: [
    {
      id: 24,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
    {
      id: 25,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
  ],
  bottleBeer: [
    {
      id: 26,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
    {
      id: 27,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
  ],
  other: [
    {
      id: 28,
      name: "other",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
    {
      id: 29,
      name: "Tequila",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
      price: 0,
    },
  ],
};

const alcoBar = (state = initialState, action) => {
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

export default alcoBar;
