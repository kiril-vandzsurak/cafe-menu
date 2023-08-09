export const CHANGE_PRICE = "CHANGE_PRICE";
export const ADD_IMAGE = "ADD_IMAGE";

export const changePrice = (id, newPrice) => {
  return {
    type: CHANGE_PRICE,
    payload: {
      id,
      newPrice,
    },
  };
};

export const addImage = (productId, imageFile) => ({
  type: ADD_IMAGE,
  payload: {
    productId,
    imageFile,
  },
});
