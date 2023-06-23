const initialState = {
  alcoDrinks: [
    {
      id: 1,
      name: "Vodka",
      ingridients: [
        "De kupyer Advoocat",
        "Gorilka",
        "Lime juice",
        "Orange juice",
      ],
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
    },
  ],
};

const alcoBar = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default alcoBar;
