export const CHANGE_PRICE = "CHANGE_PRICE";

export const changePrice = (id, newPrice) => {
  return {
    type: CHANGE_PRICE,
    payload: {
      id,
      newPrice,
    },
  };
};
