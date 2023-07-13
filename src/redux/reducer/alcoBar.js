import { CHANGE_PRICE } from "../actions";

const initialState = {
  vodka: [
    {
      id: 32,
      name: "Стерлінг",
      price: 0,
    },
    {
      id: 33,
      name: "Фінляндія",
      price: 0,
    },
    {
      id: 34,
      name: "Немиров Преміум",
      price: 0,
    },
    {
      id: 35,
      name: "Козацька Рада",
      price: 0,
    },
  ],
  cogniac: [
    {
      id: 36,
      name: "Henessy",
      price: 0,
    },
    {
      id: 37,
      name: "Henessy VSOP",
      price: 0,
    },
    {
      id: 38,
      name: "Martell",
      price: 0,
    },
    {
      id: 39,
      name: "Metaxa 5",
      price: 0,
    },
    {
      id: 40,
      name: "Metaxa 7",
      price: 0,
    },
    {
      id: 41,
      name: "Ужгород",
      price: 0,
    },
    {
      id: 42,
      name: "Тиса",
      price: 0,
    },
    {
      id: 43,
      name: "Закарпатський",
      price: 0,
    },
  ],
  balsam: [
    {
      id: 44,
      name: "Absinth",
      price: 0,
    },
    {
      id: 45,
      name: "Sambuca",
      price: 0,
    },
    {
      id: 46,
      name: "Unicum",
      price: 0,
    },
    {
      id: 47,
      name: "Becherovka",
      price: 0,
    },
    {
      id: 48,
      name: "Jagermeister",
      price: 0,
    },
    {
      id: 49,
      name: "Alter Gerzog",
      price: 0,
    },
  ],
  tequila: [
    {
      id: 50,
      name: "Tequila Jose Cuervo",
      price: 0,
    },
    {
      id: 51,
      name: "Tequila Jose Cuervo Gold",
      price: 0,
    },
  ],
  whiskey: [
    {
      id: 52,
      name: "Jameson",
      price: 0,
    },
    {
      id: 53,
      name: "Bushmills",
      price: 0,
    },
    {
      id: 54,
      name: "Johny Walker Black Label",
      price: 0,
    },
    {
      id: 55,
      name: "Johny Walker Red Label",
      price: 0,
    },
    {
      id: 56,
      name: "Jim Beam Black",
      price: 0,
    },
    {
      id: 57,
      name: "Jim Beam",
      price: 0,
    },
    {
      id: 58,
      name: "Chivas Regal 12",
      price: 0,
    },
    {
      id: 59,
      name: "Jack Daniel's",
      price: 0,
    },
  ],
  jin: [
    {
      id: 60,
      name: "Finsburry 37,5%",
      price: 0,
    },
    {
      id: 61,
      name: "Bombay Sapphire 47%",
      price: 0,
    },
  ],
  rum: [
    {
      id: 62,
      name: "Bacardi Superior",
      price: 0,
    },
    {
      id: 63,
      name: "Bacardi Black",
      price: 0,
    },
    {
      id: 64,
      name: "Malibu",
      price: 0,
    },
  ],
  wine: [
    {
      id: 65,
      name: "Різноманіття грузинських вин",
      price: 0,
    },
    {
      id: 66,
      name: "Коктейльне вино 'Martini'",
      price: 0,
    },
  ],
  champaign: [
    {
      id: 67,
      name: "Золота Балка",
      price: 0,
    },
    {
      id: 68,
      name: "Артемівське (в асортименті)",
      price: 0,
    },
  ],
  liquer: [
    {
      id: 69,
      name: "Bailey's",
      price: 0,
    },
    {
      id: 70,
      name: "Sheridan's",
      price: 0,
    },
    {
      id: 71,
      name: "Kahlua",
      price: 0,
    },
    {
      id: 72,
      name: "Cointreau",
      price: 0,
    },
    {
      id: 73,
      name: "Vana Tallin",
      price: 0,
    },
  ],
  liquerDeKupyer: [
    {
      id: 74,
      name: "Advocaat",
      price: 0,
    },
    {
      id: 75,
      name: "Peachtree",
      price: 0,
    },
    {
      id: 76,
      name: "Melon",
      price: 0,
    },
    {
      id: 77,
      name: "Wild Strawberry",
      price: 0,
    },
    {
      id: 78,
      name: "Blue Curacao",
      price: 0,
    },
    {
      id: 79,
      name: "Pizang",
      price: 0,
    },
    {
      id: 80,
      name: "Creme de Menthe",
      price: 0,
    },
    {
      id: 81,
      name: "Pina Colada",
      price: 0,
    },
    {
      id: 82,
      name: "Cherry Brandy",
      price: 0,
    },
    {
      id: 83,
      name: "Coconut",
      price: 0,
    },
    {
      id: 84,
      name: "Creme de Banana",
      price: 0,
    },
    {
      id: 85,
      name: "Apricot Brandy",
      price: 0,
    },
  ],
  draftBeer: [
    {
      id: 86,
      name: "Staropramen (0,5)",
      price: 0,
    },
    {
      id: 87,
      name: "Чернігівське (0,5)",
      price: 0,
    },
    {
      id: 88,
      name: "Staropramen (0,3)",
      price: 0,
    },
    {
      id: 89,
      name: "Чернігівське (0,3)",
      price: 0,
    },
  ],
  bottleBeer: [
    {
      id: 90,
      name: "Stella 0 (0,5)",
      price: 0,
    },
    {
      id: 91,
      name: "Stella (0,5)",
      price: 0,
    },
  ],
  forBeer: [
    {
      id: 92,
      name: "Фісташки (80 g)",
      price: 0,
    },
    {
      id: 93,
      name: "Арахіс (80 g)",
      price: 0,
    },
    {
      id: 94,
      name: "Бастурма (100 g)",
      price: 0,
    },
    {
      id: 95,
      name: "Чіпси (80 g)",
      price: 0,
    },
  ],
  other: [
    {
      id: 96,
      name: "Мінеральна вода Шаянська (500 ml)",
      price: 0,
    },
    {
      id: 97,
      name: "Моршинська (500 ml)",
      price: 0,
    },
    {
      id: 98,
      name: "Лужанська (500 ml)",
      price: 0,
    },
    {
      id: 99,
      name: "Кола, Фанта, Спрайт (250 ml)",
      price: 0,
    },
    {
      id: 100,
      name: "Ред Булл (250 ml)",
      price: 0,
    },
    {
      id: 101,
      name: "Соки в асортименті (200 ml)",
      price: 0,
    },
    {
      id: 102,
      name: "Сік 'Коник' у пляшці",
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
