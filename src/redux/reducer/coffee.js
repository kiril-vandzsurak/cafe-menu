import { CHANGE_PRICE } from "../actions";

const initialState = {
  coffeeDrink: [
    {
      id: 110,
      name: "Еспресо (35 ml)",
      price: 0,
    },
    {
      id: 111,
      name: "Еспресо з сиропом (50 ml)",
      price: 0,
    },
    {
      id: 112,
      name: "Еспресо по-сицилійськи (50 ml)",
      price: 0,
    },
    {
      id: 113,
      name: "Еспресо без кофеїну (50 ml)",
      price: 0,
    },
    {
      id: 114,
      name: "Рістретто (20 ml)",
      price: 0,
    },
    {
      id: 115,
      name: "Еспресо зі згущеним молоком (20 ml)",
      price: 0,
    },
    {
      id: 116,
      name: "Американо (120 ml)",
      price: 0,
    },
    {
      id: 117,
      name: "Кава по-віденськи (110 ml)",
      price: 0,
    },
    {
      id: 118,
      name: "Міні-віденська (60 ml)",
      price: 0,
    },
    {
      id: 119,
      name: "Фрапе (200 ml)",
      price: 0,
    },
    {
      id: 120,
      name: "Латте (200 ml)",
      price: 0,
    },
    {
      id: 121,
      name: "Макіато (50 ml)",
      price: 0,
    },
    {
      id: 122,
      name: "Капучіно (120 ml)",
      price: 0,
    },
    {
      id: 123,
      name: "Капучіно з вершками (170 ml)",
      price: 0,
    },
    {
      id: 124,
      name: "'Коричник' (170 ml)",
      price: 0,
    },
    {
      id: 125,
      name: "'Фрутіс' (170 ml)",
      price: 0,
    },
    {
      id: 126,
      name: "'Карамелла' (170 ml)",
      price: 0,
    },
    {
      id: 127,
      name: "'Ванільне небо' (250 ml)",
      price: 0,
    },
    {
      id: 128,
      name: "'Глясе' (150 ml)",
      price: 0,
    },
    {
      id: 129,
      name: "'Мокка' (200 ml)",
      price: 0,
    },
    {
      id: 130,
      name: "'Мокачіно' (50 ml)",
      price: 0,
    },
    {
      id: 131,
      name: "Горячий шоколад (150 ml)",
      price: 0,
    },
    {
      id: 132,
      name: "Горячий шоколад з вершками (200 ml)",
      price: 0,
    },
    {
      id: 133,
      name: "Какао (200 ml)",
      price: 0,
    },
    {
      id: 134,
      name: "Молоко і мед (210 ml)",
      price: 0,
    },
    {
      id: 135,
      name: "Пряне молоко (200 ml)",
      price: 0,
    },
    {
      id: 136,
      name: "Взбиті вершки (100 ml)",
      price: 0,
    },
  ],
};

const coffee = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRICE:
      return {
        ...state,
        coffeeDrink: state.coffeeDrink.map((product) =>
          product.id === action.payload.id
            ? { ...product, price: action.payload.newPrice }
            : product
        ),
      };
    default:
      return state;
  }
};

export default coffee;
