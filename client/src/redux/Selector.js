
export const cartCount = (cart) => {
  return cart.items?.reduce((total, item) => total + item.quantity, 0) || 0;
};
