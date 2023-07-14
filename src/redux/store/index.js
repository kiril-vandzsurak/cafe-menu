import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import localStorage from "redux-persist/es/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import barMenu from "../reducer/barMenu.js";
import alcoBar from "../reducer/alcoBar.js";
import hotWineAndHookah from "../reducer/hotWineAndHookah.js";
import coffee from "../reducer/coffee.js";
import shakeDrinks from "../reducer/shakeDrinks.js";
import teaDrink from "../reducer/teaDrink.js";
import lemonadeDrink from "../reducer/lemonadeDrink.js";
import coctailFromRest from "../reducer/coctailFromRest.js";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
    }),
  ],
};

const bigReducer = combineReducers({
  bar: barMenu,
  alco: alcoBar,
  hotWine: hotWineAndHookah,
  coffee: coffee,
  shakes: shakeDrinks,
  tea: teaDrink,
  lemonade: lemonadeDrink,
  luxCoctail: coctailFromRest,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
