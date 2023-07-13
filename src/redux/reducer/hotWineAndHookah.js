import { CHANGE_PRICE } from "../actions";

const initialState = {
  hotWine: [
    {
      id: 103,
      name: "Старий Лондон (чорний чай з молоком та ромом)",
      price: 0,
    },
    {
      id: 104,
      name: "Френч (містить коньяк з лікером Cointreau)",
      price: 0,
    },
    {
      id: 105,
      name: "Кубинський (кава з ромом, медом та молоком)",
      price: 0,
    },
    {
      id: 106,
      name: "Фламандське (червоне та біле вино, мед, шматочки апельсина, яблуки та спеції)",
      price: 0,
    },
    {
      id: 107,
      name: "Гасконське (червоне вино, коньяк, кава, шматочки апельсина та яблук, спеції)",
      price: 0,
    },
    {
      id: 108,
      name: "Бургудунське (біле вино, шматочки апельсина та яблук, спеції)",
      price: 0,
    },
  ],
  hookah: [
    {
      id: 109,
      name: "Ассортимент табака до кальяна 15 видів",
      price: 0,
    },
  ],
};

const hotWineAndHookah = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRICE:
      const { id, newPrice } = action.payload;
      return {
        ...state,
        hotWine: state.hotWine.map((product) =>
          product.id === id ? { ...product, price: newPrice } : product
        ),
        hookah: state.hookah.map((product) =>
          product.id === id ? { ...product, price: newPrice } : product
        ),
      };
    default:
      return state;
  }
};

export default hotWineAndHookah;
