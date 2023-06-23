const initialState = {
  coctailMenu: [
    {
      id: 1,
      name: "Casablanka",
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
  ],
};

const barMenu = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default barMenu;
